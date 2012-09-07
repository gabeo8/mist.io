"""Map actions to backends"""
import os
import tempfile
import logging

from libcloud.compute.types import Provider
from libcloud.compute.types import NodeState
from libcloud.compute.providers import get_driver

from mist.io.config import BACKENDS
from mist.io.config import EC2_PROVIDERS

log = logging.getLogger('mist.io')


def connect(request):
    """Establishes backend connection using the credentials specified.

    It has been tested with:

        * EC2, but not alternative providers like EC2_EU,
        * Rackspace, only the old style and not the openstack powered one,
        * Openstack Diablo through Trystack, should also try Essex,
        * Linode
    """
    try:
        backend_list = request.environ['beaker.session']['backends']
    except:
        backend_list = BACKENDS

    backend_index = int(request.matchdict['backend'])
    backend = backend_list[backend_index]

    driver = get_driver(int(backend['provider']))

    if backend['provider'] == Provider.OPENSTACK:
        conn = driver(backend['id'],
                      backend['secret'],
                      ex_force_auth_url=backend.get('auth_url', None),
                      ex_force_auth_version=backend.get('auth_version',
                                                        '2.0_password'))
    elif backend['provider'] == Provider.LINODE:
        conn = driver(backend['secret'])
    else:
        # ec2, rackspace
        conn = driver(backend['id'], backend['secret'])
    return conn


def get_machine_actions(machine, backend):
    """Returns available machine actions based on backend type.

    Rackspace, Linode and openstack support the same options, but EC2 also
    supports start/stop.

    The available actions are based on the machine state. The state
    codes supported by mist.io are those of libcloud, check config.py.
    """
    # defaults for running state
    can_start = False
    can_stop = False
    can_destroy = True
    can_reboot = True
    if backend.type in EC2_PROVIDERS:
        can_start = True
        can_stop = True

    # for other states
    if machine.state is NodeState.REBOOTING:
        can_start = False
        can_stop = False
        can_reboot = False
    elif machine.state is NodeState.TERMINATED:
        can_stop = False
        can_reboot = False
    elif machine.state is NodeState.UNKNOWN and \
         backend.type in EC2_PROVIDERS:
        # We assume uknown state in EC2 mean stopped
        can_start = True
    elif machine.state in (NodeState.PENDING, NodeState.UNKNOWN):
        can_start = False
        can_destroy = False
        can_stop = False
        can_reboot = False

    return {'can_stop': can_stop,
            'can_start': can_start,
            'can_destroy': can_destroy,
            'can_reboot': can_reboot}


def import_key(conn, public_key, name):
    """Imports a public ssh key to a machine.

    If a key with a the selected name already exists it leaves it as is and
    considers it a success.

    This is supported only for EC2 at the moment.

    TODO: Where are the exceptions for ec2 errors? Using and ugly if for now.
    """
    if conn.type in EC2_PROVIDERS:
        (tmp_key, tmp_path) = tempfile.mkstemp()
        key_fd = os.fdopen(tmp_key, 'w+b')
        key_fd.write(public_key)
        key_fd.close()
        try:
            conn.ex_import_keypair(name=name, keyfile=tmp_path)
            os.remove(tmp_path)
            return True
        except Exception as exc:
            if 'Duplicate' in exc.message:
                log.warn('Key already exists, not importing anything.')
                os.remove(tmp_path)
                return True
            else:
                log.error('Failed to import key.')
                os.remove(tmp_path)
                return False
    else:
        log.warn('This provider does not support key importing.')
        return False


def create_security_group(conn, info):
    """Creates a security group based on the info dictionary provided.

    This is supported only for EC2 at the moment. Info should be a dictionary
    with 'name' and 'description' keys.

    TODO: Where are the exceptions for ec2 errors? Using and ugly if for now.
    TODO: This sets very permissive option to the group, might have to tweak
          liblcoud in this, not sure if it is supported by the ec2 API.
    """
    name = info.get('name', None)
    description = info.get('description', None)

    if conn.type in EC2_PROVIDERS and name and description:
        try:
            conn.ex_create_security_group(name=name, description=description)
            conn.ex_authorize_security_group_permissive(name=name)
            return True
        except Exception as exc:
            if 'Duplicate' in exc.message:
                log.warn('Security group already exists, not doing anything.')
                return True
            else:
                log.error('Create and configure security group.')
                return False
    else:
        log.warn('This provider does not support security group creation.')
        return False