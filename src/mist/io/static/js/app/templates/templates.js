define('app/templates/templates', ['ember'], function() {
  return function (callback) {
    if (!JS_BUILD) {
      require([
        'text!app/templates/backend_add.html',
        'text!app/templates/backend_button.html',
        'text!app/templates/backend_edit.html',
        'text!app/templates/confirmation_dialog.html',
        'text!app/templates/dialog.html',
        'text!app/templates/file_upload.html',
        'text!app/templates/graph_button.html',
        'text!app/templates/graph_list_bar.html',
        'text!app/templates/graph_list_control.html',
        'text!app/templates/graph_list.html',
        'text!app/templates/graph_list_item.html',
        'text!app/templates/home.html',
        'text!app/templates/image_list.html',
        'text!app/templates/image_list_item.html',
        'text!app/templates/ip_address_list_item.html',
        'text!app/templates/key_add.html',
        'text!app/templates/key_edit.html',
        'text!app/templates/key.html',
        'text!app/templates/key_list.html',
        'text!app/templates/key_list_item.html',
        'text!app/templates/login.html',
        'text!app/templates/machine_add.html',
        'text!app/templates/machine.html',
        'text!app/templates/machine_keys.html',
        'text!app/templates/machine_keys_list_item.html',
        'text!app/templates/machine_list.html',
        'text!app/templates/machine_list_item.html',
        'text!app/templates/machine_monitoring.html',
        'text!app/templates/machine_power.html',
        'text!app/templates/machine_shell.html',
        'text!app/templates/machine_tags.html',
        'text!app/templates/machine_tags_list_item.html',
        'text!app/templates/messagebox.html',
        'text!app/templates/metric_add_custom.html',
        'text!app/templates/metric_add.html',
        'text!app/templates/metric_node.html',
        'text!app/templates/missing.html',
        'text!app/templates/network_create.html',
        'text!app/templates/network.html',
        'text!app/templates/network_list.html',
        'text!app/templates/network_list_item.html',
        'text!app/templates/rule_edit.html',
        'text!app/templates/rule.html',
        'text!app/templates/rule_list.html',
        'text!app/templates/subnet_list_item.html',
        'text!app/templates/user_menu.html',
      ], function () {
        Ember.TEMPLATES['backend_add/html'] = Ember.Handlebars.compile(arguments[0]);
        Ember.TEMPLATES['backend_button/html'] = Ember.Handlebars.compile(arguments[1]);
        Ember.TEMPLATES['backend_edit/html'] = Ember.Handlebars.compile(arguments[2]);
        Ember.TEMPLATES['confirmation_dialog/html'] = Ember.Handlebars.compile(arguments[3]);
        Ember.TEMPLATES['dialog/html'] = Ember.Handlebars.compile(arguments[4]);
        Ember.TEMPLATES['file_upload/html'] = Ember.Handlebars.compile(arguments[5]);
        Ember.TEMPLATES['graph_button/html'] = Ember.Handlebars.compile(arguments[6]);
        Ember.TEMPLATES['graph_list_bar/html'] = Ember.Handlebars.compile(arguments[7]);
        Ember.TEMPLATES['graph_list_control/html'] = Ember.Handlebars.compile(arguments[8]);
        Ember.TEMPLATES['graph_list/html'] = Ember.Handlebars.compile(arguments[9]);
        Ember.TEMPLATES['graph_list_item/html'] = Ember.Handlebars.compile(arguments[10]);
        Ember.TEMPLATES['home/html'] = Ember.Handlebars.compile(arguments[11]);
        Ember.TEMPLATES['image_list/html'] = Ember.Handlebars.compile(arguments[12]);
        Ember.TEMPLATES['image_list_item/html'] = Ember.Handlebars.compile(arguments[13]);
        Ember.TEMPLATES['ip_address_list_item/html'] = Ember.Handlebars.compile(arguments[14]);
        Ember.TEMPLATES['key_add/html'] = Ember.Handlebars.compile(arguments[15]);
        Ember.TEMPLATES['key_edit/html'] = Ember.Handlebars.compile(arguments[16]);
        Ember.TEMPLATES['key/html'] = Ember.Handlebars.compile(arguments[17]);
        Ember.TEMPLATES['key_list/html'] = Ember.Handlebars.compile(arguments[18]);
        Ember.TEMPLATES['key_list_item/html'] = Ember.Handlebars.compile(arguments[19]);
        Ember.TEMPLATES['login/html'] = Ember.Handlebars.compile(arguments[20]);
        Ember.TEMPLATES['machine_add/html'] = Ember.Handlebars.compile(arguments[21]);
        Ember.TEMPLATES['machine/html'] = Ember.Handlebars.compile(arguments[22]);
        Ember.TEMPLATES['machine_keys/html'] = Ember.Handlebars.compile(arguments[23]);
        Ember.TEMPLATES['machine_keys_list_item/html'] = Ember.Handlebars.compile(arguments[24]);
        Ember.TEMPLATES['machine_list/html'] = Ember.Handlebars.compile(arguments[25]);
        Ember.TEMPLATES['machine_list_item/html'] = Ember.Handlebars.compile(arguments[26]);
        Ember.TEMPLATES['machine_monitoring/html'] = Ember.Handlebars.compile(arguments[27]);
        Ember.TEMPLATES['machine_power/html'] = Ember.Handlebars.compile(arguments[28]);
        Ember.TEMPLATES['machine_shell/html'] = Ember.Handlebars.compile(arguments[29]);
        Ember.TEMPLATES['machine_tags/html'] = Ember.Handlebars.compile(arguments[30]);
        Ember.TEMPLATES['machine_tags_list_item/html'] = Ember.Handlebars.compile(arguments[31]);
        Ember.TEMPLATES['messagebox/html'] = Ember.Handlebars.compile(arguments[32]);
        Ember.TEMPLATES['metric_add_custom/html'] = Ember.Handlebars.compile(arguments[33]);
        Ember.TEMPLATES['metric_add/html'] = Ember.Handlebars.compile(arguments[34]);
        Ember.TEMPLATES['metric_node/html'] = Ember.Handlebars.compile(arguments[35]);
        Ember.TEMPLATES['missing/html'] = Ember.Handlebars.compile(arguments[36]);
        Ember.TEMPLATES['network_create/html'] = Ember.Handlebars.compile(arguments[37]);
        Ember.TEMPLATES['network/html'] = Ember.Handlebars.compile(arguments[38]);
        Ember.TEMPLATES['network_list/html'] = Ember.Handlebars.compile(arguments[39]);
        Ember.TEMPLATES['network_list_item/html'] = Ember.Handlebars.compile(arguments[40]);
        Ember.TEMPLATES['rule_edit/html'] = Ember.Handlebars.compile(arguments[41]);
        Ember.TEMPLATES['rule/html'] = Ember.Handlebars.compile(arguments[42]);
        Ember.TEMPLATES['rule_list/html'] = Ember.Handlebars.compile(arguments[43]);
        Ember.TEMPLATES['subnet_list_item/html'] = Ember.Handlebars.compile(arguments[44]);
        Ember.TEMPLATES['user_menu/html'] = Ember.Handlebars.compile(arguments[45]);
        callback();
      });
      return;
    }
Ember.TEMPLATES["backend_add/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                   <span class=\"provider-icon-small\">\n                        <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("Mist.backendAddController.provider.className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n                    </span>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.backendAddController.provider.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                    Select provider\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <li data-icon=\"false\">\n                        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectProvider", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                            <span class=\"provider-icon-small\">\n                                <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("this.className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n                            </span>\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </a>\n                    </li>\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("field.className :field")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                ");
  stack1 = helpers['if'].call(depth0, "field.label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "field.isText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "field.isFile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "field.isKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "field.isRegion", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "field.isSlider", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'for': ("field.name")
  },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "field.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(":\n                    </label>\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'data-theme': ("a"),
    'type': ("field.type"),
    'id': ("field.name"),
    'placeholder': ("field.placeholder"),
    'valueBinding': ("field.value")
  },hashTypes:{'data-theme': "STRING",'type': "ID",'id': "ID",'placeholder': "ID",'valueBinding': "ID"},hashContexts:{'data-theme': depth0,'type': depth0,'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <a class=\"ui-btn ui-btn-icon-right ui-icon-plus ui-btn-a ui-corner-all\"\n                        ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("field.name")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadFile", "field", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "field.buttonText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    </a>\n                ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("field.name")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                        class=\"mist-select\"\n                        data-role=\"collapsible\"\n                        data-iconpos=\"right\"\n                        data-collapsed-icon=\"carat-d\"\n                        data-expanded-icon=\"carat-u\"\n                        data-theme=\"a\">\n                        <h4>");
  stack1 = helpers['if'].call(depth0, "field.value", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                        <ul data-role=\"listview\">\n                            ");
  stack1 = helpers.each.call(depth0, "Mist.keysController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            <li data-icon=\"false\" data-theme=\"d\">\n                                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createKeyClicked", "field", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Add Key</a>\n                            </li>\n                        </ul>\n                    </div>\n                ");
  return buffer;
  }
function program15(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "field.value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program17(depth0,data) {
  
  
  data.buffer.push("Select SSH Key");
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <li data-icon=\"false\" data-theme=\"a\">\n                                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectKey", "", "field", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                                </li>\n                            ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("field.name")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                        class=\"mist-select\"\n                        data-role=\"collapsible\"\n                        data-iconpos=\"right\"\n                        data-collapsed-icon=\"carat-d\"\n                        data-expanded-icon=\"carat-u\"\n                        data-theme=\"a\">\n                        <h4>");
  stack1 = helpers['if'].call(depth0, "field.value", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                        <ul data-role=\"listview\">\n                            ");
  stack1 = helpers.each.call(depth0, "view.providerRegions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </ul>\n                    </div>\n                ");
  return buffer;
  }
function program22(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "view.selectedRegion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program24(depth0,data) {
  
  
  data.buffer.push("Select Region");
  }

function program26(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <li data-icon=\"false\" data-theme=\"a\">\n                                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectRegion", "", "field", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data})));
  data.buffer.push(">\n                                        ");
  stack1 = helpers._triageMustache.call(depth0, "location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </a>\n                                </li>\n                            ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <select class=\"toggle-field\" data-theme=\"a\" data-role=\"slider\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "switchToggled", {hash:{
    'on': ("change"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        <option value=\"0\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "field.offLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</option>\n                        <option value=\"1\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "field.onLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</option>\n                    </select>\n                ");
  return buffer;
  }

function program30(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"ajax-loader\"></div>\n        ");
  }

  data.buffer.push("<div id=\"backend-add\"\n    data-swipe-close=\"false\"\n    class=\"side-panel\"\n    data-role=\"panel\"\n    data-position=\"right\"\n    data-display=\"overlay\"\n    data-theme=\"c\">\n\n    <div data-role=\"header\">\n        <h1>Add backend</h1>\n        <a class=\"ui-btn-right\" data-icon=\"info\" data-iconpos=\"notext\" data-theme=\"a\"\n            target=\"_blank\" href=\"https://mistio.zendesk.com/hc/en-us\"></a>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        <label>Provider:</label>\n        <div id=\"new-backend-provider\"\n            class=\"mist-select\"\n            data-role=\"collapsible\"\n            data-collapsed-icon=\"carat-d\"\n            data-expanded-icon=\"carat-u\"\n            data-iconpos=\"right\"\n            data-theme=\"a\">\n            <h4>");
  stack1 = helpers['if'].call(depth0, "Mist.backendAddController.provider.title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h4>\n            <ul class=\"mist-select\" data-role=\"listview\" data-theme=\"a\">\n                ");
  stack1 = helpers.each.call(depth0, "Mist.backendsController.providerList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n\n        <div id=\"backend-add-fields\">\n        ");
  stack1 = helpers.each.call(depth0, "field", "in", "view.providerFields", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.backendsController.addingBackend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n            <a data-role=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-theme=\"a\">Back</a>\n            <a id=\"new-backend-ok\" data-theme=\"d\"\n                ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.isReady::ui-state-disabled :ui-btn :ui-btn-d")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</a>\n        </div>\n    </div>\n</div>\n\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.keyAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.fileUploadView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["backend_button/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "buttonClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  
});
Ember.TEMPLATES["backend_edit/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ajax-loader\"></div>\n            ");
  }

  data.buffer.push("<!-- Popup Overlay -->\n\n<div id=\"backend-edit-screen\"\n    class=\"ui-popup-screen\n        ui-overlay-b\n        ui-screen-hidden\">\n</div>\n\n<!-- Popup Wrapper -->\n<div id=\"backend-edit-popup\"\n     class=\"pop\n        ui-popup-container\n        ui-popup-hidden\n        ui-popup-truncate\">\n\n    <!-- Popup -->\n\n    <div id=\"backend-edit\"\n         class=\"mid-popup\n            ui-popup\n            ui-body-a\n            ui-overlay-shadow\n            ui-corner-all\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\">\n\n         <!-- Header -->\n\n        <div class=\"ui-header ui-bar-b\">\n\n            <h1 class=\"ui-title\">Edit backend</h1>\n\n        </div>\n\n        <!-- Body -->\n\n        <div role=\"main\" class=\"ui-content\" data-theme=\"a\">\n\n            <!-- New backend title text field -->\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'valueBinding': ("Mist.backendEditController.newTitle")
  },hashTypes:{'valueBinding': "STRING"},hashContexts:{'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <!-- Backend state toggle switch -->\n\n            <div data-role=\"fieldcontain\">\n                <select id=\"backend-toggle\" data-role=\"slider\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "stateToggleSwitched", {hash:{
    'target': ("view"),
    'on': ("change")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        <option value=\"0\">Disabled</option>\n                        <option value=\"1\">Enabled</option>\n                </select>\n                <span class=\"state\">");
  stack1 = helpers._triageMustache.call(depth0, "Mist.backendEditController.backend.state", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            </div>\n\n            <!-- Delete button -->\n\n            <a class=\"ui-btn ui-shadow ui-corner-all\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteClicked", {hash:{
    'target': ("view"),
    'on': ("click")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                Delete\n            </a>\n\n            <!-- Delete confirmation -->\n\n            <div id=\"backend-delete-confirm\">\n                <label>Confirm backend removal?</label>\n                <label id=\"monitoring-message\">There are monitored machines.\n                    <br />Monitoring for these will be disabled\n                </label>\n                <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n                    <a class=\"ui-btn ui-shadow ui-corner-all\" id=\"button-confirm-disable\"\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yesClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Yes</a>\n                    <a class=\"ui-btn ui-btn-d ui-shadow ui-corner-all\"\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "noClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">No</a>\n                </div>\n            </div>\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.backendsController.deletingBackend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <!-- Back button -->\n\n            <a class=\"ui-btn ui-shadow ui-corner-all button-back\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["confirmation_dialog/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"confirmation-popup\" data-role=\"popup\" data-overlay-theme=\"b\" data-transition=\"flip\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "Mist.confirmationController.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n        <p>");
  stack1 = helpers._triageMustache.call(depth0, "Mist.confirmationController.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n            <button data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "noClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">No</button>\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "yesClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Yes</button>\n        </div>\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["dialog/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "paragraph", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "command", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <p ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("this.class")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "paragraph", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("this.href"),
    'class': ("this.class"),
    'target': ("this.target")
  },hashTypes:{'href': "STRING",'class': "STRING",'target': "STRING"},hashContexts:{'href': depth0,'class': depth0,'target': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "linkClicked", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "link", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </a>\n                ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <div class=\"command-container\"\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commandClicked", "", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "command", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                <a class=\"ui-btn ui-btn-a ui-corner-all\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">OK</a>\n\n            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, "view.isBack", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }
function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                <a class=\"ui-btn ui-btn-a ui-corner-all\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                <div class=\"ok-cancel\n                        ui-controlgroup\n                        ui-controlgroup-horizontal\n                        ui-group-theme-a\n                        ui-corner-all\"\n                    data-role=\"controlgroup\"\n                    data-type=\"horizontal\">\n\n                    ");
  stack1 = helpers['if'].call(depth0, "view.isOKCancel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                    ");
  stack1 = helpers['if'].call(depth0, "view.isYesNo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                </div>\n\n            ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <a class=\"ui-btn\"\n                            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reject", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                                Cancel\n                        </a>\n                        <a class=\"ui-btn ui-btn-d\"\n                            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                                OK\n                        </a>\n                    ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <a class=\"ui-btn ui-btn-d\"\n                            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reject", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                                No\n                        </a>\n                        <a class=\"ui-btn\"\n                            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                                Yes\n                        </a>\n                    ");
  return buffer;
  }

  data.buffer.push("<!-- Popup Overlay -->\n\n<div id=\"dialog-screen\"\n    class=\"ui-popup-screen ui-overlay-b ui-screen-hidden\">\n</div>\n\n<!-- Popup Wrapper -->\n\n<div id=\"dialog-popup\"\n    class=\"flip\n        ui-popup-container\n        ui-popup-hidden\n        ui-popup-truncate\">\n\n    <!-- Popup -->\n\n    <div id=\"dialog\"\n        class=\"large-popup\n            ui-popup\n            ui-body-inherit\n            ui-overlay-shadow\n            ui-corner-all\"\n        data-role=\"popup\"\n        data-enhanced=\"true\"\n        data-transition=\"flip\"\n        data-dismissible=\"false\">\n\n\n        <!-- Header -->\n\n        <div class=\"ui-header ui-bar-b\" role=\"banner\">\n\n            <h1 class=\"ui-title\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.dialogController.options.head", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h1>\n\n        </div>\n\n        <!-- Body -->\n\n        <div class=\"ui-content ui-body-a\" role=\"main\">\n\n\n            ");
  stack1 = helpers.each.call(depth0, "Mist.dialogController.options.body", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <!-- Buttons -->\n\n            ");
  stack1 = helpers['if'].call(depth0, "view.isOK", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["file_upload/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ajax-loader add-key-loader\"></div>\n            ");
  }

  data.buffer.push("<div id=\"file-upload\" class=\"large-popup\" data-role=\"popup\" data-overlay-theme=\"b\" data-transition=\"flip\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "Mist.fileUploadController.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        <label for=\"textarea-private-key\">");
  stack1 = helpers._triageMustache.call(depth0, "Mist.fileUploadController.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(":\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.fileUploadController.uploadingFile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'id': ("upload-area"),
    'valueBinding': ("Mist.fileUploadController.file")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <a class=\"ui-btn ui-corner-all ui-btn-a ui-btn-icon-right ui-icon-arrow-u\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Upload</a>\n\n        <input id=\"file-upload-input\" type=\"file\" name=\"file\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadInputChanged", {hash:{
    'on': ("change"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("/>\n\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n            <a class=\"ui-btn ui-corner-all ui-btn-a\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n            <a id=\"file-upload-ok\" class=\"ui-btn ui-corner-all ui-btn-d ui-state-disabled\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doneClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Done</a>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["graph_button/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"graph-button\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("view.buttonId")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <a class=\"ui-btn ui-btn-icon-left ui-icon-arrow-u ui-corner-all\"\n        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "graphButtonClicked", "view.graph", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n            ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.graph.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </a>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["graph_list_bar/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.graphButtonView", {hash:{
    'graphBinding': ("this"),
    'actionProxyBinding': ("view.actionProxy")
  },hashTypes:{'graphBinding': "STRING",'actionProxyBinding': "STRING"},hashContexts:{'graphBinding': depth0,'actionProxyBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"graph-button\" id=\"add-metric-btn\">\n            <a class=\"ui-btn ui-btn-icon-left ui-icon-plus ui-corner-all ui-btn-d\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addGraphClicked", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    Add Graph\n            </a>\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"graphBar\">\n\n    ");
  stack1 = helpers.each.call(depth0, "Mist.graphsController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.config.canModify", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["graph_list_control/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <!--a id=\"history-control-stream\"\n                class=\"ui-btn\n                    ui-mini\n                    ui-btn-b\n                    ui-corner-all\n                    ui-btn-inline\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pauseClicked", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    Pause\n            </a-->\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <a id=\"history-control-stream\"\n                class=\"ui-btn\n                    ui-mini\n                    ui-btn-b\n                    ui-corner-all\n                    ui-btn-inline\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetClicked", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    Reset\n            </a>\n            <!--\n                Forward Button\n            -->\n            <a id=\"history-control-forward\"\n                class=\"time\n                    ui-btn\n                    ui-mini\n                    ui-corner-all\n                    ui-btn-inline\n                    ui-btn-icon-notext\n                    ui-icon-arrow-r\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "forwardClicked", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            </a>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"graph-list-control\">\n\n    <div id=\"history-control\" class=\"ui-mini\">\n\n        <!--\n            Stream Toggle\n        -->\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.stream.isStreaming", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div id=\"time-window-control\" class=\"ui-mini\">\n            <select data-inline=\"true\" data-shadow=\"false\" data-mini=\"true\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "timeWindowChanged", {hash:{
    'on': ("change"),
    'target': ("view.actionProxy")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    <option value=\"minutes\" selected='true'>10 minutes</option>\n                    <option value=\"hour\">1 hour</option>\n                    <option value=\"day\">1 day</option>\n                    <option value=\"week\">1 week</option>\n                    <option value=\"month\">1 month</option>\n            </select>\n        </div>\n\n        <!--\n            Back Button\n        -->\n        <a id=\"history-control-back\"\n            class=\"time\n                ui-btn\n                ui-mini\n                ui-corner-all\n                ui-btn-inline\n                ui-btn-icon-notext\n                ui-icon-arrow-l\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        </a>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["graph_list/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n    <!--\n        Control Widget\n    -->\n\n    ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.config.canControl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <!--\n        Graphs\n    -->\n\n    <div id=\"graphs\">\n        ");
  stack1 = helpers.each.call(depth0, "Mist.graphsController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <!--\n        Minimized graph buttons\n    -->\n\n    ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.config.canMinimize", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.config.canControl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div id=\"top-history\">\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.graphListControlView", {hash:{
    'actionProxyBinding': ("view.actionProxy")
  },hashTypes:{'actionProxyBinding': "STRING"},hashContexts:{'actionProxyBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.graphListItemView", {hash:{
    'graphBinding': ("this"),
    'actionProxyBinding': ("view.actionProxy")
  },hashTypes:{'graphBinding': "STRING",'actionProxyBinding': "STRING"},hashContexts:{'graphBinding': depth0,'actionProxyBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.graphListBarView", {hash:{
    'actionProxyBinding': ("view.actionProxy")
  },hashTypes:{'actionProxyBinding': "STRING"},hashContexts:{'actionProxyBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n        <div id=\"bottom-history\"></div>\n    ");
  }

  stack1 = helpers['if'].call(depth0, "Mist.graphsController.isOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["graph_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "view.graph.unit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n\n            <div class=\"ajax-loader\"></div>\n\n        ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "view.graph.pendingRemoval", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <div class=\"ajax-loader fetching-stats-loader\"></div>\n\n            <!--\n                Remove button\n            -->\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.config.canModify", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <!--\n                Minimize button\n            -->\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.config.canMinimize", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ajax-loader\"></div>\n            ");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers.unless.call(depth0, "view.graph.isBuiltIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <a class=\"ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext\"\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeClicked", "view.graph", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">x\n                    </a>\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <a class=\"ui-btn ui-btn-c ui-btn-icon-notext ui-corner-all ui-icon-arrow-d\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "collapseClicked", "view.graph", {hash:{
    'target': ("view.actionProxy")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-\n                </a>\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <g ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("this.id")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                <path></path>\n            </g>\n        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"legend\">\n            ");
  stack1 = helpers.each.call(depth0, "view.graph.datasources", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("this.id :lineLegend")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "machine.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"graph\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("view.graph.id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n    <!--\n        Graph Head\n    -->\n\n    <div class=\"header\">\n\n        <div class=\"title\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "view.graph.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <div class=\"graphValue\">-&nbsp;</div>");
  stack1 = helpers['if'].call(depth0, "view.graph.unit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "view.graph.pendingCreation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <!--\n        Graph Body\n    -->\n\n    <svg>\n        <g class=\"grid-x\"></g>\n        <g class=\"grid-y\"></g>\n        ");
  stack1 = helpers.each.call(depth0, "view.graph.datasources", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <!--  Visible only when on single line graphs -->\n        <g class=\"valueArea\">\n            <path></path>\n        </g>\n\n        <g class=\"x-axis\"></g>\n        <rect class=\"hideAnimeLine\"></rect>\n        <line class=\"axisLine x\"></line>\n        <line class=\"axisLine y\"></line>\n        <g class=\"y-axis\"></g>\n    </svg>\n\n    <!--\n        Graph Secondary Legend Header\n    -->\n\n    ");
  stack1 = helpers['if'].call(depth0, "Mist.graphsController.config.showGraphLegend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["home/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.backendButtonView", {hash:{
    'backendBinding': ("this"),
    'class': ("ui-btn ui-input-btn ui-corner-all ui-shadow")
  },hashTypes:{'backendBinding': "STRING",'class': "STRING"},hashContexts:{'backendBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li class=\"ui-li-has-count\">\n\n                <a class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" href=\"#/networks\">\n\n                    <span class=\"ui-li-count ui-body-inherit\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.backendsController.networkCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </span>\n                    Networks\n\n                </a>\n            </li>\n            ");
  return buffer;
  }

  data.buffer.push("<div id=\"home-page\" data-role=\"page\" class=\"ui-page-active ui-page\">\n\n    <!-- Page header -->\n\n    <div class=\"ui-header ui-bar-b\">\n\n        <h1 class=\"ui-title\">mist.io</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <!-- Page Body -->\n\n    <div role=\"main\" class=\"ui-content\" data-theme=\"c\">\n\n        <!-- Add backend button -->\n\n        <a id=\"add-backend-btn\" class=\"ui-link ui-btn ui-btn-d ui-icon-plus\n            ui-btn-icon-right ui-shadow ui-corner-all\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addBackend", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                Add backend\n        </a>\n\n        <!-- Backends list -->\n\n        <div id=\"backend-buttons\" data-role=\"controlgroup\" data-type=\"horizontal\"\n            class=\"ui-controlgroup ui-controlgroup-horizontal ui-corner-all\">\n\n            ");
  stack1 = helpers.each.call(depth0, "Mist.backendsController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n\n        <!-- Navigation -->\n\n        <ul class=\"ui-listview ui-listview-inset ui-corner-all ui-shadow\">\n\n            <!-- Machines link -->\n\n            <li class=\"ui-li-has-count ui-first-child\">\n\n                <a class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" href=\"#/machines\">\n                    <span class=\"ui-li-count ui-body-inherit\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.backendsController.machineCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </span>\n                    Machines\n\n                </a>\n            </li>\n\n            <!-- Images link -->\n\n            <li class=\"ui-li-has-count\">\n\n                <a class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" href=\"#/images\">\n                    <span class=\"ui-li-count ui-body-inherit\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.backendsController.imageCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </span>\n                    Images\n                </a>\n            </li>\n\n            <!-- Networks link -->\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.backendsController.hasNetworks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <!-- Keys link -->\n\n            <li class=\"ui-li-has-count ui-last-child\">\n\n                <a class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\" href=\"#/keys\">\n                    <span class=\"ui-li-count ui-body-inherit\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.keysController.content.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </span>\n                    Keys\n\n                </a>\n            </li>\n        </ul>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.graphListView", {hash:{
    'actionProxyBinding': ("view")
  },hashTypes:{'actionProxyBinding': "STRING"},hashContexts:{'actionProxyBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.dialogView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.backendAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.backendEditView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["image_list/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"ajax-loader\"></div>\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.imageListItemView", {hash:{
    'imageBinding': ("this"),
    'class': ("checkbox-link")
  },hashTypes:{'imageBinding': "STRING",'class': "STRING"},hashContexts:{'imageBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                    Please wait...\n                ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                    Continue search on server...\n                ");
  }

  data.buffer.push("<div id=\"image-list-page\" data-role=\"page\" class=\"ui-page-active\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n\n        <a href=\"#\" class=\"responsive-button\" data-icon=\"home\">Home</a>\n\n        <h1>Images</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.backendsController.loadingImages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("search-term-input"),
    'placeholder': ("Search images ..."),
    'valueBinding': ("Mist.imageSearchController.searchTerm")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.imageSearchController.isSearching", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <ul id=\"image-list\"\n            data-role=\"listview\"\n            data-inset=\"true\"\n            class=\"checkbox-list\">\n            ");
  stack1 = helpers.each.call(depth0, "view.renderedImages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n\n        ");
  stack1 = helpers['if'].call(depth0, "view.renderingMoreImages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <button id=\"images-advanced-search\" data-theme=\"b\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "searchClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <span>\n                ");
  stack1 = helpers['if'].call(depth0, "view.searchingImages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </span>\n        </button>\n\n        <div class=\"small-padding\"></div>\n\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.dialogView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["image_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.starClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleImageStar", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'checkedBinding': ("view.image.star")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</label>\n\n<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "launchImage", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <h3>");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.image.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h3>\n    <p class=\"tag\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "view.image.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</p>\n    <p class=\"tag\">");
  stack1 = helpers._triageMustache.call(depth0, "view.image.backend.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n</a>\n");
  return buffer;
  
});
Ember.TEMPLATES["ip_address_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <span class=\"ajax-loader\"></span>\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "server.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                        --\n                    ");
  }

  data.buffer.push("<td>");
  stack1 = helpers._triageMustache.call(depth0, "ipaddress", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n<td>\n    <div class=\"reserved\">\n        <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isTogglingReserve:ui-state-disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            ");
  stack1 = helpers['if'].call(depth0, "isTogglingReserve", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <select name=\"reserved-slider\" data-role=\"slider\" data-mini=\"true\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reservedToggled", {hash:{
    'target': ("view"),
    'on': ("change")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <option value=\"off\"></option>\n                <option value=\"on\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'selected': ("reserved")
  },hashTypes:{'selected': "STRING"},hashContexts:{'selected': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Reserved</option>\n            </select>\n        <span>\n    </div>\n    <div class=\"associate\">\n        <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isAssociating:ui-state-disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("view.domID"),
    'class': ("isAssociating:associating\n                    isAssociating::ui-icon-carat-d\n                    isAssociating:ui-state-disabled\n                    :assign-network-btn\n                    :ui-btn-icon-right\n                    :ui-mini\n                    :ui-btn\n                    :ui-corner-all\n                    :ui-btn-a")
  },hashTypes:{'id': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "assignClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers['if'].call(depth0, "server.name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </a>\n        </span>\n    </div>\n</td>\n");
  return buffer;
  
});
Ember.TEMPLATES["key_add/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"ajax-loader key-add-loader\"></div>\n                ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "Mist.keyAddController.uploadingKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ajax-loader\"></div>\n            ");
  }

  data.buffer.push("<!-- Popup Overlay -->\n\n<div id=\"key-add-screen\"\n    class=\"ui-popup-screen ui-overlay-b ui-screen-hidden\">\n</div>\n\n<!-- Popup Wrapper -->\n\n<div id=\"key-add-popup\"\n    class=\"flip\n        ui-popup-container\n        ui-popup-hidden\n        ui-popup-truncate\">\n\n    <!-- Popup -->\n\n    <div id=\"key-add\"\n        class=\"large-popup\n            ui-popup\n            ui-body-inherit\n            ui-overlay-shadow\n            ui-corner-all\"\n        data-role=\"popup\"\n        data-enhanced=\"true\"\n        data-position-to=\"origin\"\n        data-transition=\"flip\">\n\n\n        <!-- Header -->\n\n        <div class=\"ui-header ui-bar-b\" role=\"banner\">\n\n            <h1 class=\"ui-title\">Add key</h1>\n\n        </div>\n\n        <!-- Body -->\n\n        <div class=\"ui-content ui-body-a\" role=\"main\">\n\n            <!-- Key Name Field -->\n\n            <label for=\"key-add-id\">Name:</label>\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("key-add-id"),
    'valueBinding': ("Mist.keyAddController.keyId")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <!-- Key Private Field -->\n\n            <label for=\"key-add-private\">Private Key:\n                ");
  stack1 = helpers['if'].call(depth0, "Mist.keyAddController.generatingKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </label>\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'id': ("key-add-private"),
    'valueBinding': ("Mist.keyAddController.keyPrivate")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <!-- Generate and Upload buttons -->\n\n            <div class=\"generate-upload\n                    ui-controlgroup\n                    ui-controlgroup-horizontal\n                    ui-group-theme-a\n                    ui-corner-all\"\n                data-role=\"controlgroup\"\n                data-type=\"horizontal\">\n\n                <a class=\"ui-btn ui-btn-icon-left ui-icon-gear\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "generateClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        Generate\n                </a>\n\n                <a class=\"ui-btn ui-btn-icon-right ui-icon-arrow-u\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        Upload\n                </a>\n            </div>\n\n            <!-- Hidden Input field for uploading ssh keys -->\n\n            <input id=\"key-add-upload\" type=\"file\" name=\"file\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "uploadInputChanged", {hash:{
    'on': ("change"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("/>\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.keyAddController.addingKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <!-- Back and Add buttons -->\n\n            <div class=\"ok-cancel\n                    ui-controlgroup\n                    ui-controlgroup-horizontal\n                    ui-group-theme-a\n                    ui-corner-all\"\n                data-role=\"controlgroup\"\n                data-type=\"horizontal\">\n\n                <a class=\"ui-btn\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        Back\n                </a>\n                <a id=\"key-add-ok\" class=\"ui-btn ui-btn-d ui-state-disabled\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        Add\n                </a>\n            </div>\n\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["key_edit/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"ajax-loader\"></div>\n        ");
  }

  data.buffer.push("<div id=\"rename-key-popup\" \n     class=\"small-popup\" \n     data-role=\"popup\" \n     data-overlay-theme=\"b\" \n     data-transition=\"slideup\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n        <h1>Rename key</h1>\n    </div>\n\n    <div data-role=\"content\">\n\n        <label for=\"new-key-name\">New name:</label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("new-key-name"),
    'valueBinding': ("Mist.keyEditController.newKeyId")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.keysController.renamingKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n            <a data-role=\"button\" data-theme=\"a\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n            <button id=\"rename-key-ok\" data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n        </div>\n\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["key/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"ajax-loader\"></div>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ajax-loader\"></div>\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div id=\"single-key-machines\" data-role=\"collapsible\">\n\n            <h4>Machines\n                ");
  stack1 = helpers['if'].call(depth0, "Mist.backendsController.loadingMachines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h4>\n            <ul data-role=\"listview\" class=\"checkbox-list\" data-inset=\"true\">\n                ");
  stack1 = helpers.each.call(depth0, "view.machines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineListItemView", {hash:{
    'machineBinding': ("this"),
    'class': ("checkbox-link")
  },hashTypes:{'machineBinding': "STRING",'class': "STRING"},hashContexts:{'machineBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                ");
  return buffer;
  }

  data.buffer.push("<div id=\"single-key-page\" data-role=\"page\" class=\"ui-page-active\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n\n        <a href=\"#/keys\" class=\"responsive-button\" data-icon=\"arrow-l\">Keys</a>\n\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.keysController.loading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n         <div data-role=\"collapsible\" data-collapsed=\"false\">\n            <h4>Public Key\n                ");
  stack1 = helpers['if'].call(depth0, "Mist.keysController.gettingPublicKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h4>\n            <input id=\"public-key\" type=\"text\" readonly=\"readonly\" onclick=\"this.focus();this.select()\"/>\n        </div>\n\n        <div data-role=\"collapsible\">\n            <h4>Private key\n                ");
  stack1 = helpers['if'].call(depth0, "Mist.keysController.gettingPrivateKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h4>\n            <a data-role=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "displayClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Display</a>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "machines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"large-padding\"></div>\n\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.dialogView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.keyEditView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.confirmationDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    <div class=\"dual-action-footer\" data-role=\"footer\" data-theme=\"b\">\n        <table><tbody><tr><td>\n            <a data-role=\"button\" data-icon=\"edit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "renameClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Rename</a>\n        </td><td>\n            <a data-role=\"button\" data-icon=\"delete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</a>\n        </td></tr></tbody></table>\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["key_list/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.keyListItemView", {hash:{
    'keyBinding': ("this"),
    'class': ("checkbox-link")
  },hashTypes:{'keyBinding': "STRING",'class': "STRING"},hashContexts:{'keyBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div id=\"key-list-page\" data-role=\"page\" class=\"ui-page-active\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n\n        <a href=\"#\" class=\"responsive-button\" data-icon=\"home\">Home</a>\n\n        <h1>Keys</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        <a id=\"select-keys-btn\"\n           class=\"responsive-button\"\n           data-role=\"button\"\n           data-icon=\"arrow-d\"\n           ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Select</a>\n\n        <a id=\"add-key-btn\"\n           class=\"responsive-button\"\n           data-role=\"button\"\n           data-icon=\"plus\"\n           data-iconpos=\"right\"\n           data-theme=\"d\"\n           ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</a>\n\n        <ul data-role=\"listview\"\n            data-filter=\"true\"\n            data-inset=\"true\"\n            data-filter-placeholder=\"Filter...\"\n            class=\"checkbox-list\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.keysController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n\n        <div class=\"mid-padding\"></div>\n\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.dialogView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.keyAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.keyEditView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.confirmationDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    <div id=\"select-keys-popup\" data-role=\"popup\" data-transition=\"flip\" data-position-to=\"#select-keys-btn\">\n        <ul data-role='listview'>\n            <li data-icon=\"false\">\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectionModeClicked", true, {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","BOOLEAN"],data:data})));
  data.buffer.push(">All</a>\n            </li>\n            <li data-icon=\"false\">\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectionModeClicked", false, {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","BOOLEAN"],data:data})));
  data.buffer.push(">None</a>\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"tri-action-footer\" data-role=\"footer\" data-theme=\"b\">\n        <table><tbody><tr><td>\n            <a data-role=\"button\" data-icon=\"edit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "renameClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Rename</a>\n        </td><td>\n            <a data-role=\"button\" data-icon=\"delete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Delete</a>\n        </td><td>\n            <a data-role=\"button\" data-icon=\"gear\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDefaultClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Set default</a>\n        </td></tr></tbody></table>\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["key_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n    <div class=\"ui-grid-b\">\n        <div class=\"ui-block-a key-name\">");
  stack1 = helpers._triageMustache.call(depth0, "view.key.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"ui-block-b\"></div>\n        <div class=\"ui-block-c key-tags\">\n            ");
  stack1 = helpers['if'].call(depth0, "view.key.isDefault", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n             <span class=\"tag\">default</span>\n            ");
  }

  data.buffer.push("<label>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'checkedBinding': ("view.key.selected")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</label>\n\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "key", "view.key", options) : helperMissing.call(depth0, "link-to", "key", "view.key", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["login/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"ajax-loader\"></div>\n        ");
  }

  data.buffer.push("<div id=\"login-popup\" class=\"mid-popup\" data-role=\"popup\" data-overlay-theme=\"b\" data-transition=\"flip\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n        <h1>Login to mist.io</h1>\n    </div>\n\n    <div data-role=\"content\">\n        <label for=\"email\">Email:</label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("email"),
    'valueBinding': ("Mist.loginController.email")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <label for=\"password\">Password:</label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("password"),
    'type': ("password"),
    'valueBinding': ("Mist.loginController.password")
  },hashTypes:{'id': "STRING",'type': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'type': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.loginController.loggingIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "forgot", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" target=\"_new\">Forgot your password?</a>\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n            <a data-role=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n            <button id=\"login-ok\" data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loginClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Log in</button>\n        </div>\n\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_add/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                   <span class=\"provider-icon-small\">\n                        <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("Mist.machineAddController.newMachineProvider.className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        </span>\n                    </span>\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "enabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers.unless.call(depth0, "isBareMetal", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers.unless.call(depth0, "isLibvirt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <li data-icon=\"false\">\n                                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectProvider", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                                    <span class=\"provider-icon-small\">\n                                        <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n                                    </span>\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </a>\n                            </li>\n                        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <span class=\"image-icon-small\">\n                        <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("Mist.machineAddController.newMachineImage.className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        </span>\n                    </span>\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    ");
  stack1 = helpers.unless.call(depth0, "Mist.machineAddController.newMachineProvider.images.hasStarred", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <li data-icon=\"false\">\n                            <span class=\"image-icon-small\">\n                                <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("this.className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n                            </span>\n                            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectImage", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                        </li>\n                    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "star", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <li data-icon=\"false\">\n                            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectImage", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                                <span class=\"image-icon-small\">\n                                    <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("this.className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></span>\n                                </span>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </a>\n                        </li>\n                    ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <li data-icon=\"false\">\n                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectSize", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        <span class=\"size-decription\">\n                         - disk:");
  stack1 = helpers._triageMustache.call(depth0, "disk", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ram:");
  stack1 = helpers._triageMustache.call(depth0, "ram", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                    </a>\n                </li>\n                ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <li data-icon=\"false\">\n                        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectLocation", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                    </li>\n                    ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <li data-icon=\"false\">\n                        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectKey", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                    </li>\n                ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <input ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("this.id"),
    'name': ("this.id"),
    'checked': ("this.selected")
  },hashTypes:{'id': "STRING",'name': "STRING",'checked': "STRING"},hashContexts:{'id': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                            type=\"checkbox\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleNetworkSelection", "", {hash:{
    'on': ("change"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                        <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'for': ("this.id")
  },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-corners=\"false\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </label>\n                    ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            Estimated price:\n            <span>");
  stack1 = helpers._triageMustache.call(depth0, "view.price", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"create-machine-panel\"\n     data-swipe-close=\"false\"\n     class=\"side-panel\"\n     data-role=\"panel\"\n     data-position=\"right\"\n     data-display=\"overlay\"\n     data-theme=\"c\">\n\n    <div data-role=\"header\">\n        <h1 class=\"ui-title\">Create Machine</h1>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        <!-- Select Name -->\n\n        <label for=\"create-machine-name\">Name:</label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("create-machine-name"),
    'data-theme': ("a"),
    'valueBinding': ("Mist.machineAddController.newMachineName")
  },hashTypes:{'id': "STRING",'data-theme': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'data-theme': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <!-- Select Provider -->\n\n        <label>Provider:</label>\n        <div id=\"create-machine-provider\"\n            data-role=\"collapsible\"\n            data-iconpos=\"right\"\n            data-collapsed-icon=\"arrow-d\"\n            data-expanded-icon=\"arrow-u\"\n            data-theme=\"a\"\n            class=\"mist-select\">\n            <h4>");
  stack1 = helpers['if'].call(depth0, "Mist.machineAddController.newMachineProvider.provider", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.machineAddController.newMachineProvider.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h4>\n            <ul data-role=\"listview\" data-theme=\"a\">\n                ");
  stack1 = helpers.each.call(depth0, "Mist.backendsController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n\n        <!-- Select Image -->\n\n        <label>Image:</label>\n        <div id=\"create-machine-image\"\n             data-role=\"collapsible\"\n             data-iconpos=\"right\"\n             data-collapsed-icon=\"arrow-d\"\n             data-expanded-icon=\"arrow-u\"\n             data-theme=\"a\"\n             class=\"mist-select\">\n            <h4>\n                ");
  stack1 = helpers['if'].call(depth0, "Mist.machineAddController.newMachineImage.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.machineAddController.newMachineImage.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h4>\n            <ul data-role=\"listview\" data-theme=\"a\">\n                ");
  stack1 = helpers.each.call(depth0, "Mist.machineAddController.newMachineProvider.images.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n\n        <!-- Select Size -->\n        <div id=\"size\">\n        <label>Size:</label>\n        <div id=\"create-machine-size\"\n             data-role=\"collapsible\"\n             data-iconpos=\"right\"\n             data-collapsed-icon=\"arrow-d\"\n             data-expanded-icon=\"arrow-u\"\n             data-theme=\"a\"\n             class=\"mist-select\">\n            <h4>");
  stack1 = helpers._triageMustache.call(depth0, "Mist.machineAddController.newMachineSize.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n            <ul data-role=\"listview\" data-theme=\"a\">\n                ");
  stack1 = helpers.each.call(depth0, "Mist.machineAddController.newMachineProvider.sizes.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n        </div>\n\n        <!-- Select Location -->\n\n        <div id=\"location\">\n            <label>Location:</label>\n            <div id=\"create-machine-location\"\n                 data-role=\"collapsible\"\n                 data-iconpos=\"right\"\n                 data-collapsed-icon=\"arrow-d\"\n                 data-expanded-icon=\"arrow-u\"\n                 data-theme=\"a\"\n                 class=\"mist-select\">\n                <h4>");
  stack1 = helpers._triageMustache.call(depth0, "Mist.machineAddController.newMachineLocation.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n                <ul data-role=\"listview\" data-theme=\"a\">\n                    ");
  stack1 = helpers.each.call(depth0, "Mist.machineAddController.newMachineProvider.locations.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </div>\n        </div>\n\n        <!-- Docker Specific -->\n\n        <div class=\"docker\">\n\n            <!-- Environment Vars -->\n            <label for=\"create-machine-env\">Environment Variables:</label>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextArea", {hash:{
    'id': ("create-machine-env"),
    'data-theme': ("a"),
    'valueBinding': ("Mist.machineAddController.newMachineDockerEnvironment")
  },hashTypes:{'id': "STRING",'data-theme': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'data-theme': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <!-- Command -->\n            <label for=\"create-machine-command\">Command:</label>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextArea", {hash:{
    'id': ("create-machine-command"),
    'data-theme': ("a"),
    'valueBinding': ("Mist.machineAddController.newMachineDockerCommand")
  },hashTypes:{'id': "STRING",'data-theme': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'data-theme': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        </div>\n\n        <!-- Select Key -->\n\n        <div id=\"key\">\n        <label>Key:</label>\n        <div id=\"create-machine-key\"\n             data-role=\"collapsible\"\n             data-iconpos=\"right\"\n             data-collapsed-icon=\"arrow-d\"\n             data-expanded-icon=\"arrow-u\"\n             data-theme=\"a\"\n             class=\"mist-select\">\n            <h4>");
  stack1 = helpers._triageMustache.call(depth0, "Mist.machineAddController.newMachineKey.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n            <ul data-role=\"listview\" data-theme=\"a\">\n                ");
  stack1 = helpers.each.call(depth0, "Mist.keysController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <li data-icon=\"false\" data-theme=\"d\">\n                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createKeyClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add Key</a>\n                </li>\n            </ul>\n        </div>\n        </div>\n\n        <!-- Select Networks -->\n\n        <div id=\"create-machine-network\">\n            <label>Networks:</label>\n            <div data-role=\"collapsible\"\n                    data-iconpos=\"right\"\n                    data-collapsed-icon=\"arrow-d\"\n                    data-expanded-icon=\"arrow-u\"\n                    data-theme=\"a\"\n                    class=\"mist-select\">\n                <h4>Networks</h4>\n                <fieldset data-role=\"controlgroup\" data-theme=\"a\">\n                    ");
  stack1 = helpers.each.call(depth0, "Mist.machineAddController.newMachineProvider.networks.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </fieldset>\n            </div>\n        </div>\n\n        <!-- Select Script -->\n\n        <div id=\"script\">\n            <label for=\"create-machine-script\">Script:</label>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextArea", {hash:{
    'id': ("create-machine-script"),
    'data-theme': ("a"),
    'valueBinding': ("Mist.machineAddController.newMachineScript")
  },hashTypes:{'id': "STRING",'data-theme': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'data-theme': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n\n        <!-- Enable monitoring -->\n        <div id=\"create-machine-monitoring\" class=\"ui-state-disabled\">\n            <label>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'data-theme': ("a"),
    'checkedBinding': ("Mist.machineAddController.newMachineMonitoring")
  },hashTypes:{'data-theme': "STRING",'checkedBinding': "STRING"},hashContexts:{'data-theme': depth0,'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            Enable monitoring\n            </label>\n        </div>\n\n        <div id=\"create-machine-cost\">\n        ");
  stack1 = helpers['if'].call(depth0, "view.price", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\" >\n                <a data-role=\"button\"\n                   data-theme=\"a\"\n                   ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n                <a id=\"create-machine-ok\"\n                    data-role=\"button\"\n                        data-theme=\"d\"\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "launchClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Launch!</a>\n        </div>\n    </div>\n</div>\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.keyAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["machine/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.backendsController.loadingMachines", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ajax-loader\"></div>\n            ");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "keysCount", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <a class=\"ui-btn\n                            ui-shadow\n                            ui-corner-all\"\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "manageKeysClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "keysCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" keys\n                    </a>\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <a class=\"ui-btn\n                            ui-btn-d\n                            ui-btn-icon-right\n                            ui-icon-plus\n                            ui-corner-all\"\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addKeyClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        Add key\n                    </a>\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n                             probing... <div class=\"ajax-loader\"></div>\n                         ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                             ");
  stack1 = helpers._triageMustache.call(depth0, "view.lastProbe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                             <a id=\"machine-probe-btn\"\n                                class=\"ui-btn ui-shadow ui-corner-all\"\n                                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "probeClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                                    Probe\n                            </a>\n                         ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>Up and running for</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "view.upFor", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    </tr>\n                ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>Load</td>\n                        <td>\n                            <div class=\"loadleds\">\n                                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("loadavg15 :led")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                </div>\n                                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("loadavg5 :led")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                </div>\n                                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("loadavg1 :led")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                </div>\n                            </div>\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "loadavg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "loadavg5", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>Latency</td>\n                        <td>\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":netleds")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled4 :netled1")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                </div>\n                                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled3 :netled2")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                </div>\n                                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled2 :netled3")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                </div>\n                                <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled1 :netled4")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                                </div>\n                            </div>\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "latency", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("ms</td>\n                    </tr>\n                ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>Packet loss</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "loss", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    </tr>\n                ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>Tags</td>\n                        <td>\n                            ");
  stack1 = helpers.each.call(depth0, "tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                ");
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <span class=\"tag\">");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                            ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>Public IPs</td>\n                        <td>\n                            ");
  stack1 = helpers.each.call(depth0, "view.public_ips", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                ");
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <div class=\"ip\">");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n                            ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>Private IPs</td>\n                        <td>\n                            ");
  stack1 = helpers.each.call(depth0, "view.private_ips", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </td>\n                    </tr>\n                ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <tr>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "key", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                    </tr>\n                ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div id=\"single-machine-metadata\" data-role=\"collapsible\">\n\n                <h4>Full metadata list</h4>\n\n                <table class=\"info-table\">\n                    ");
  stack1 = helpers.each.call(depth0, "view.metadata", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </table>\n\n            </div>\n        ");
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <tr>\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "key", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                            <td>");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        </tr>\n                    ");
  return buffer;
  }

  data.buffer.push("<div id=\"single-machine-page\" data-role=\"page\" class=\"ui-page-active\" data-theme=\"a\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n\n        <a class=\"ui-btn\n                ui-btn-icon-left\n                ui-icon-arrow-l\n                responsive-button\"\n            href=\"#/machines\">Machines</a>\n\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <div data-role=\"header\" data-theme=\"a\" class=\"single-machine-header\">\n\n        <!-- Provider Icon -->\n        <span class=\"single-view-icon-wrapper\">\n            <span id=\"single-view-provider-icon\"\n                ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.providerIconClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            </span>\n        </span>\n\n        <!-- OS Icon -->\n        <span class=\"single-view-icon-wrapper\">\n            <span id=\"single-view-image-icon\"\n                ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.imageIconClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            </span>\n        </span>\n\n        <!-- State label -->\n        <h1 ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("state")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "state", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        <!-- Show spinner if machines are being loaded -->\n        ");
  stack1 = helpers.unless.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n        <!-- If machine is not running created, disable keys UI -->\n        <span id=\"mist-manage-keys\"\n            ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.isRunning::ui-state-disabled\n                :ui-btn-right")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n            <!-- If machine is beging created, hide keys UI -->\n            ");
  stack1 = helpers.unless.call(depth0, "pendingCreation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n\n        <!--\n\n             Monitoring collapsible\n\n        -->\n\n\n        <div id=\"monitoring-collapsible\" data-role=\"collapsible\" data-collapsed=\"false\">\n\n            <h4>Monitoring</h4>\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineMonitoringView", {hash:{
    'machineBinding': ("view.machine")
  },hashTypes:{'machineBinding': "STRING"},hashContexts:{'machineBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        </div>\n\n\n        <!--\n\n             Information collapsibles\n\n        -->\n\n\n        <div data-role=\"collapsible\" data-collapsed=\"false\">\n\n            <h4>Basic Info</h4>\n\n            <table class=\"info-table\">\n                <tr>\n                    <td>Last probed</td>\n                    <td> ");
  stack1 = helpers['if'].call(depth0, "probing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </td>\n                </tr>\n                ");
  stack1 = helpers['if'].call(depth0, "probed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "loadavg", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "latency", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "loss", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "view.public_ips", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "view.private_ips", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = helpers.each.call(depth0, "view.basicInfo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </table>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "view.metadata", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"mid-padding\"></div>\n\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.dialogView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.metricAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineKeysView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineTagsView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineShellView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machinePowerView", {hash:{
    'position': ("#single-machine-power-btn")
  },hashTypes:{'position': "STRING"},hashContexts:{'position': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.confirmationDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    <div class=\"tri-action-footer\" data-role=\"footer\" data-theme=\"b\">\n        <table><tbody><tr><td>\n            <a id=\"single-machine-tags-btn\"\n                ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("id::ui-state-disabled\n                    can_tag::ui-state-disabled\n                    :ui-btn\n                    :ui-btn-icon-left\n                    :ui-icon-grid")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tagsClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Tags</a>\n        </td><td>\n            <a id=\"single-machine-shell-btn\"\n                ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("hasKeys::ui-state-disabled\n                    :ui-btn\n                    :ui-btn-icon-left\n                    :ui-icon-gear")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shellClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Shell</a>\n        </td><td>\n            <a id=\"single-machine-power-btn\"\n                ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("id::ui-state-disabled\n                    :ui-btn\n                    :ui-btn-icon-left\n                    :ui-icon-power")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "powerClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Power</a>\n        </td></tr></tbody></table>\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_keys/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <ul id=\"machine-keys\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.machineKeysController.associatedKeys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineKeysListItemView", {hash:{
    'keyBinding': ("this")
  },hashTypes:{'keyBinding': "STRING"},hashContexts:{'keyBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"ajax-loader\"></div>\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "Mist.keysController.disassociatingKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li data-icon=\"false\">\n            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nonAssociatedKeyClicked", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n        </li>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"machine-keys-panel\"\n    data-swipe-close=\"false\"\n    class=\"side-panel\"\n    data-role=\"panel\"\n    data-position=\"right\"\n    data-display=\"overlay\"\n    data-theme=\"c\">\n\n    <div data-role=\"header\">\n        <h1>Manage Keys</h1>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"c\">\n\n        <a id=\"associate-btn\" data-role=\"button\"\n            class=\"ui-btn ui-btn-d ui-btn-icon-right ui-icon-plus ui-corner-all\"\n           ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "associateClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add Key</a>\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.machineKeysController.associatedKeys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.keysController.associatingKey", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <a class=\"ui-btn ui-btn-a ui-corner-all\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n\n    </div>\n\n</div>\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.keyAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<div id=\"key-actions-popup\"\n    class=\"tiny-popup\"\n    data-role=\"popup\"\n    data-overlay-theme=\"b\"\n    data-transition=\"flip\"\n    data-position-to=\"#machine-keys\"\n    data-theme=\"a\">\n    <ul data-role=\"listview\">\n        <li data-icon=\"false\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Remove</a></li>\n        <li data-icon=\"false\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "probeClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Probe</a></li>\n        <li data-icon=\"false\"><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "viewClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">View</a></li>\n    </ul>\n</div>\n\n<div id=\"non-associated-keys-popup\"\n    class=\"tiny-popup\"\n    data-role=\"popup\"\n    data-overlay-theme=\"b\"\n    data-transition=\"flip\"\n    data-position-to=\"#associate-btn\">\n\n    <ul data-role=\"listview\">\n        ");
  stack1 = helpers.each.call(depth0, "Mist.machineKeysController.nonAssociatedKeys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <li data-icon=\"false\" data-theme=\"d\">\n            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newKeyClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">New key</a>\n        </li>\n    </ul>\n</div>\n\n<div id=\"machine-userPort-popup\"\n    class=\"large-popup\"\n    data-role=\"popup\"\n    data-theme=\"c\"\n    data-overlay-theme=\"b\"\n    data-position-to=\"#machine-keys-panel\"\n    data-transition=\"flip\">\n\n    <div data-role=\"header\">\n        <h2>SSH user &amp; port</h2>\n    </div>\n\n    <div data-role=\"content\">\n        <div class=\"message\">\n            Cannot connect as root on port 22\n        </div>\n        <label for=\"user\">User:</label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("user"),
    'data-theme': ("a"),
    'placeholder': ("root"),
    'valueBinding': ("Mist.machineKeysController.user")
  },hashTypes:{'id': "STRING",'data-theme': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'data-theme': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <label for=\"port\">Port:</label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("port"),
    'data-theme': ("a"),
    'placeholder': ("22"),
    'valueBinding': ("Mist.machineKeysController.port")
  },hashTypes:{'id': "STRING",'data-theme': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'data-theme': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n            <a class=\"ui-btn ui-btn-a\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeSSH_Details", {hash:{
    'target': ("Mist.machineKeysController")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                Cancel\n            </a>\n            <a id=\"tryAssociate\" class=\"ui-btn ui-btn-d\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "customAssociateClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Retry</a>\n        </div>\n\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_keys_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<span class=\"small-list-item\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "associatedKeyClicked", "", {hash:{
    'on': ("click"),
    'target': ("view")
  },hashTypes:{'on': "STRING",'target': "STRING"},hashContexts:{'on': depth0,'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n\n    <p ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.keyIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n</span>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_list/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "enabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    ");
  stack1 = helpers.each.call(depth0, "machines.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineListItemView", {hash:{
    'machineBinding': ("this"),
    'class': ("checkbox-link")
  },hashTypes:{'machineBinding': "STRING",'class': "STRING"},hashContexts:{'machineBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "enabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <li data-icon=\"false\">\n                        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectionModeClicked", "title", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </a>\n                    </li>\n                ");
  return buffer;
  }

  data.buffer.push("<div id=\"machine-list-page\" data-role=\"page\" class=\"ui-page-active\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n\n        <a href=\"#\" class=\"responsive-button\" data-icon=\"home\">Home</a>\n\n        <h1>Machines</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        <a id=\"create-machine-btn\"\n           class=\"responsive-button\"\n           data-role=\"button\"\n           data-icon=\"plus\"\n           data-iconpos=\"right\"\n           data-theme=\"d\"\n           ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Create</a>\n\n        <a id=\"select-machines-btn\"\n           class=\"responsive-button\"\n           data-role=\"button\"\n           data-icon=\"arrow-d\"\n           ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Select</a>\n\n        <ul id=\"machines\"\n            data-role=\"listview\"\n            data-inset=\"true\"\n            data-filter=\"true\"\n            data-filter-placeholder=\"Filter...\"\n            data-theme=\"c\"\n            class=\"checkbox-list\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.backendsController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n\n        <div class=\"mid-padding\"></div>\n\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.dialogView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineAddView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineTagsView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineShellView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machinePowerView", {hash:{
    'position': ("#machines-power-btn")
  },hashTypes:{'position': "STRING"},hashContexts:{'position': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.confirmationDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    <div id=\"select-machines-popup\" data-role=\"popup\" data-overlay-theme=\"b\" data-transition=\"flip\" data-position-to=\"#select-machines-btn\">\n        <ul data-role=\"listview\">\n            <li data-icon=\"false\">\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectionModeClicked", "all", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">All</a>\n            </li>\n            <li data-icon=\"false\">\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectionModeClicked", "none", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">None</a>\n            </li>\n            ");
  stack1 = helpers.each.call(depth0, "Mist.backendsController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n\n    <div class=\"tri-action-footer\" data-role=\"footer\" data-theme=\"b\">\n        <table><tbody><tr><td>\n            <a id=\"machines-tags-btn\" data-role=\"button\" data-icon=\"grid\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tagsClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Tags</a>\n        </td><td>\n            <a id=\"machines-shell-btn\" data-role=\"button\" data-icon=\"gear\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shellClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Shell</a>\n        </td><td>\n            <a id=\"machines-power-btn\" data-role=\"button\" data-icon=\"power\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "powerClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Power</a>\n        </td></tr></tbody></table>\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <label>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'checkedBinding': ("view.machine.selected")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</label>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classBinding': ("view.machine.hasMonitoring")
  },hashTypes:{'classBinding': "STRING"},hashContexts:{'classBinding': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "machine", "view.machine", options) : helperMissing.call(depth0, "link-to", "machine", "view.machine", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        <div class=\"ui-grid-b\">\n            <div class=\"ui-block-a machine-name\">");
  stack1 = helpers._triageMustache.call(depth0, "view.machine.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n            <span class=\"ui-block-b machine-state\">\n                <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.machine.state")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "view.machine.state", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = helpers['if'].call(depth0, "pendingCreation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </span>\n            </span>\n\n            <div class=\"ui-block-c machine-leds\">\n                <span>\n                    ");
  stack1 = helpers['if'].call(depth0, "view.machine.hasMonitoring", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </span>\n                ");
  stack1 = helpers.unless.call(depth0, "pendingCreation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            </div>\n\n            <div class=\"ui-block-c machine-tags\">\n                <span class=\"tag\">");
  stack1 = helpers._triageMustache.call(depth0, "view.machine.backend.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                ");
  stack1 = helpers.each.call(depth0, "view.machine.tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n        </div>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n                    <div class='ajax-loader'></div>\n                ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "waitState", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                        <span></span>\n                    ");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("probing probed")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                        <div class=\"loadleds\">\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("loadavg15 :led")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            </div>\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("loadavg5 :led")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            </div>\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("loadavg1 :led")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            </div>\n                        </div>\n                        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":netleds")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled4 :netled1")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            </div>\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled3 :netled2")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            </div>\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled2 :netled3")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            </div>\n                            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("netled1 :netled4")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            </div>\n                        </div>\n\n                    </div>\n                ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <span class=\"tag\">");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n    <a class=\"ui-icon-delete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "disassociateGhostMachine", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n\n        <div class=\"ui-grid-b\">\n            <div class=\"ui-block-a machine-name\">");
  stack1 = helpers._triageMustache.call(depth0, "view.machine.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n            <span class=\"ui-block-b machine-state\">\n                <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.machine.state")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "view.machine.state", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </span>\n            </span>\n\n        </div>\n\n    </a>\n\n");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "view.machine.isGhost", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_monitoring/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "view.pendingFirstStats", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div id=\"graphs-wrapper\"\n            ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.pendingFirstStats:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.graphListView", {hash:{
    'actionProxyBinding': ("view")
  },hashTypes:{'actionProxyBinding': "STRING"},hashContexts:{'actionProxyBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.ruleListView", {hash:{
    'rulesBinding': ("view.rules")
  },hashTypes:{'rulesBinding': "STRING"},hashContexts:{'rulesBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <div id=\"monitoring-bottom-btns\">\n            <div data-rule=\"ui-grid-a\">\n                <div class=\"ui-block-a\">\n                    <a id=\"add-rule-button\"\n                      ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("\n                            Mist.rulesController.creatingPending:ui-state-disabled\n                            :ui-btn\n                            :ui-corner-all\n                            :ui-btn-d\n                            :ui-btn-icon-left\n                            :ui-icon-plus")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addRuleClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                            Add Rule\n                    </a>\n                </div>\n            </div>\n            <div class=\"ui-block-b\">\n                <a id=\"disable-monitor-btn\"\n                    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("\n                        view.machine.disablingMonitoring:ui-state-disabled\n                        :ui-btn\n                        :ui-corner-all\n                        :ui-btn-b\n                        :ui-btn-icon-left\n                        :ui-icon-delete")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "disableMonitoringClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        Disable\n                </a>\n            </div>\n        </div>\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div id=\"machine-monitoring-disabled\">\n\n                <label id=\"enable-monitoring-label\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "view.monitoringMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </label>\n\n                <div class=\"ajax-loader l\"></div>\n            </div>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        <div id=\"machine-monitoring-disabled\">\n\n            ");
  stack1 = helpers['if'].call(depth0, "view.machine.enablingMonitoring", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n       </div>\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n\n                <label id=\"enable-monitoring-label\">\n                    Enabling monitoring, please wait...\n                </label>\n\n                <div class=\"ajax-loader l\"></div>\n\n            ");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "view.machine.disablingMonitoring", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n\n                <label id=\"enable-monitoring-label\">\n                    Disabling monitoring...\n                </label>\n\n                <div class=\"ajax-loader l\"></div>\n\n            ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                <label id=\"enable-monitoring-label\">\n                    View real time server analytics, get alerts\n                    and set up automated actions.\n                </label>\n\n                <a id=\"enable-monitoring-btn\"\n                    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("\n                        view.machine.enablingMonitoring:ui-state-disabled\n                        view.gettingCommand:ui-state-disabled\n                        :ui-btn\n                        :ui-corner-all\n                        :ui-btn-d\n                        :ui-btn-icon-left\n                        :ui-icon-star")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "enableMonitoringClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                        Enable Monitoring\n                </a>\n\n               ");
  stack1 = helpers['if'].call(depth0, "view.gettingCommand", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n           ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("\n                    <div class=\"ajax-loader\"></div>\n               ");
  }

  data.buffer.push("<div id=\"machine-monitoring\">\n\n    ");
  stack1 = helpers['if'].call(depth0, "view.machine.hasMonitoring", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.ruleEditView", {hash:{
    'metricsBinding': ("this.metrics")
  },hashTypes:{'metricsBinding': "STRING"},hashContexts:{'metricsBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  return buffer;
  
});
Ember.TEMPLATES["machine_power/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <a data-role=\"button\" data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "actionClicked", "start", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Start</a>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <a data-role=\"button\" data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "actionClicked", "shutdown", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Shutdown</a>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <a data-role=\"button\" data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "actionClicked", "reboot", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Reboot</a>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <a data-role=\"button\" data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "actionClicked", "destroy", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Destroy</a>\n        ");
  return buffer;
  }

  data.buffer.push("<div id=\"machine-power-popup\"\n     class=\"tiny-popup\"\n     data-role=\"popup\"\n     data-overlay-theme=\"c\"\n     data-transition=\"slideup\"\n     ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-position-to': ("view.position")
  },hashTypes:{'data-position-to': "STRING"},hashContexts:{'data-position-to': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n    <div data-role=\"header\" data-theme=\"b\">\n        <h1>Power</h1>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.machinePowerController.canStart", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.machinePowerController.canShutdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.machinePowerController.canReboot", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.machinePowerController.canDestroy", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <a data-role=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_shell/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"machine-shell\"\n     data-role=\"popup\"\n     data-theme=\"b\"\n     data-dismissible=\"false\"\n     data-overlay-theme=\"b\"\n     data-transition=\"slideup\">\n\n    <div data-role=\"content\" data-theme=\"b\">\n        <div id=\"shell-return\"></div>\n        <a id=\"shell-back\" data-role=\"button\" data-theme=\"a\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_tags/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.machineTagsListItemView", {hash:{
    'tagBinding': ("this")
  },hashTypes:{'tagBinding': "STRING"},hashContexts:{'tagBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"ajax-loader\"></div>\n        ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "Mist.machineTagsController.deletingTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

  data.buffer.push("<div id=\"machine-tags-popup\" \n     class=\"large-popup\" \n     data-role=\"popup\" \n     data-overlay-theme=\"b\" \n     data-transition=\"flip\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n        <h1>Manage Tags</h1>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'valueBinding': ("Mist.machineTagsController.newTag")
  },hashTypes:{'valueBinding': "STRING"},hashContexts:{'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <a id=\"add-tag-ok\" data-role=\"button\" data-theme=\"d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add</a>\n\n        <ul data-role=\"listview\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.machineTagsController.machine.tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.machineTagsController.addingTag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <a id=\"add-tag-back\" data-role=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n\n    </div>\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["machine_tags_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<span class=\"small-list-item\">\n\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n    <button data-icon=\"delete\" data-iconpos=\"notext\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></button>\n\n</span>");
  return buffer;
  
});
Ember.TEMPLATES["messagebox/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p id=\"message-cmd\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.notificationController.messageBox.options.command", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </p>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p id=\"message-ps\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.notificationController.messageBox.options.ps", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </p>\n            ");
  return buffer;
  }

  data.buffer.push("<!-- Popup Overlay -->\n\n<div id=\"message-box-screen\"\n    class=\"ui-popup-screen ui-overlay-b ui-screen-hidden\">\n</div>\n\n<!-- Popup Wrapper -->\n\n<div id=\"message-box-popup\"\n    class=\"flip\n        ui-popup-container\n        ui-popup-hidden\n        ui-popup-truncate\">\n\n    <!-- Popup -->\n\n    <div id=\"message-box\"\n        class=\"large-popup\n            ui-popup\n            ui-body-inherit\n            ui-overlay-shadow\n            ui-corner-all\"\n        data-role=\"popup\"\n        data-transition=\"flip\"\n        data-dismissible=\"false\">\n\n\n        <!-- Header -->\n\n        <div class=\"ui-header ui-bar-b\" role=\"banner\">\n            <h1 class=\"ui-title\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.notificationController.messageBox.options.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </h1>\n        </div>\n\n        <!-- Body -->\n\n        <div class=\"ui-content ui-body-a\" role=\"main\">\n\n\n            <!--\n                Paragraphs\n            -->\n\n\n            ");
  stack1 = helpers.each.call(depth0, "Mist.notificationController.messageBox.options.paragraphs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <!--\n                Command\n            -->\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.notificationController.messageBox.options.command", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <!--\n                Postscript\n            -->\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.notificationController.messageBox.options.ps", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n            <!--\n                OK Button\n            -->\n\n\n            <a class=\"ui-btn ui-btn-a ui-corner-all\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "okClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">OK</a>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["metric_add_custom/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ajax-loader\"></div>\n            ");
  }

  data.buffer.push("\n<div id=\"metric-add-custom-screen\" class=\"ui-popup-screen ui-screen-hidden ui-overlay-a\"></div>\n<div id=\"metric-add-custom-popup\"\n     class=\"ui-popup-container ui-popup-hidden ui-body-inherit ui-corner-all\">\n\n    <div id=\"metric-add-custom\"\n         class=\"ui-popup ui-corner-all ui-overlay-shadow\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\"\n         data-position-to=\"#add-metric-btn\">\n\n        <div class=\"ui-header ui-bar-b\">\n            <h1 class=\"ui-title\">Add custom metric</h1>\n        </div>\n        <div class=\"ui-content\">\n\n            <div class=\"ui-grid-a\">\n                <div class=\"ui-block-a\">\n                    <label for=\"custom-plugin-name\">Name:</label>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("custom-plugin-name"),
    'placeholder': ("e.g. my metric"),
    'valueBinding': ("Mist.metricAddCustomController.metric.name")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n                <div class=\"ui-block-b\">\n                    <label for=\"custom-plugin-unit\">Unit:</label>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'id': ("custom-plugin-unit"),
    'placeholder': ("e.g. bytes (optional)"),
    'valueBinding': ("Mist.metricAddCustomController.metric.unit")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n            </div>\n            <label for=\"custom-plugin-script\">Python script:</label>\n            <pre id=\"custom-plugin-error\"></pre>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'id': ("custom-plugin-script"),
    'valueBinding': ("Mist.metricAddCustomController.metric.script")
  },hashTypes:{'id': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <select id=\"advanced-toggle\" data-role=\"slider\" data-theme=\"a\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "advancedToggled", {hash:{
    'target': ("view"),
    'on': ("change")
  },hashTypes:{'target': "STRING",'on': "STRING"},hashContexts:{'target': depth0,'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                <option value=\"0\">Basic settings</option>\n                <option value=\"1\">Advanced settings</option>\n            </select>\n\n            <div id=\"custom-plugin-advanced\">\n                <label>\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'data-mini': ("true"),
    'checkedBinding': ("Mist.metricAddCustomController.metric.type")
  },hashTypes:{'data-mini': "STRING",'checkedBinding': "STRING"},hashContexts:{'data-mini': depth0,'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                Calculate derivative\n                </label>\n            </div>\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.metricAddCustomController.addingMetric", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n                <a class=\"ui-btn ui-corner-all\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n                <a class=\"ui-btn ui-corner-all ui-btn-d ui-state-disabled\"\n                    id=\"deploy\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deployClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Deploy</a>\n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["metric_add/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.metricNodeView", {hash:{
    'nodeBinding': ("Mist.metricAddController.metricsTree")
  },hashTypes:{'nodeBinding': "STRING"},hashContexts:{'nodeBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"ui-body-a\">\n                    <p>Checking available metrics on your server</p>\n                    <div class=\"ajax-loader\"></div>\n                </div>\n            ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                <div id=\"overlay\"></div>\n            ");
  }

  data.buffer.push("<div id=\"metric-add-screen\" class=\"ui-popup-screen ui-screen-hidden ui-overlay-a\"></div>\n<div id=\"metric-add-popup\"\n     class=\"ui-popup-container mid-popup ui-popup-hidden ui-body-inherit ui-corner-all\">\n\n    <div id=\"metric-add\"\n         class=\"ui-popup ui-corner-all ui-overlay-shadow\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\"\n         data-position-to=\"#add-metric-btn\">\n\n        <div class=\"ui-header ui-bar-b\">\n            <h1 class=\"ui-title\">Select Metric</h1>\n        </div>\n\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("\n                Mist.metricAddController.metrics.length::no-metrics\n                :ui-content\n                :ui-body-a")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n            role=\"main\">\n\n            <a class=\"ui-btn ui-btn-d ui-corner-all ui-btn-icon-left ui-icon-plus\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "customClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">custom</a>\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.metricAddController.metrics.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.metricsController.addingMetric", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </div>\n    </div>\n</div>\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.metricAddCustomView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["metric_node/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n    <a class=\"end-node\n        ui-btn\n        ui-corner-all\"\n        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectMetric", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "view.node.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n    ");
  stack1 = helpers.unless.call(depth0, "view.node.isRootNode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div class=\"nest\">\n        ");
  stack1 = helpers.each.call(depth0, "view.node.subTargets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <a class=\"parent-node\n            ui-btn\n            ui-corner-all\n            ui-btn-icon-left\n            ui-icon-carat-d\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleUnfold", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "view.node.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.metricNodeView", {hash:{
    'nodeBinding': ("this")
  },hashTypes:{'nodeBinding': "STRING"},hashContexts:{'nodeBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.node.isEndNode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["missing/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"missing-page\" data-role=\"page\" class=\"ui-page-active ui-page ui-page-theme-a\">\n    <div id=\"splash\">\n        <div id=\"container\">\n            <a id=\"logo\" href=\"/#\"></a>\n            <div id=\"message\">\n                404. Got lost in the clouds\n            </div>\n        </div>\n    </div>\n</div>\n");
  
});
Ember.TEMPLATES["network_create/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "backend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "backend.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n                            Select backend\n                        ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "enabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "isOpenStack", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <li data-icon=\"false\">\n                                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backendSelected", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                                        ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    </a>\n                                </li>\n                            ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"ajax-loader\"></div>\n        ");
  }

  data.buffer.push("<div id=\"network-create\"\n    data-swipe-close=\"false\"\n    class=\"side-panel\"\n    data-role=\"panel\"\n    data-position=\"right\"\n    data-display=\"overlay\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n        <h1>Create Network</h1>\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        <!--\n            Select Backend\n\n            Allow only openstack backends for now\n        -->\n        <div id=\"network-create-backend-wrapper\">\n\n            <label for=\"network-create-backend\">Backend:</label>\n\n            <div id=\"network-create-backend\"\n                data-role=\"collapsible\"\n                data-iconpos=\"right\"\n                data-collapsed-icon=\"arrow-d\"\n                data-expanded-icon=\"arrow-u\"\n                data-theme=\"a\"\n                class=\"mist-select\">\n\n                <h4>\n                    ");
  stack1 = helpers['with'].call(depth0, "Mist.networkCreateController.network", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </h4>\n\n                <ul data-role=\"listview\" data-theme=\"a\">\n\n                    ");
  stack1 = helpers.each.call(depth0, "Mist.backendsController.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                </ul> <!-- list -->\n            </div> <!-- collapsible -->\n        </div><!-- wrapper -->\n\n\n        <!--\n            Select Network Name\n        -->\n        <div id=\"network-create-name-wrapper\">\n\n            <label for=\"network-create-name\">Network Name:</label>\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'data-theme': ("a"),
    'id': ("network-create-name"),
    'valueBinding': ("Mist.networkCreateController.network.name")
  },hashTypes:{'data-theme': "STRING",'id': "STRING",'valueBinding': "STRING"},hashContexts:{'data-theme': depth0,'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </div>\n\n\n        <!--\n            Select Admin State\n        -->\n\n\n        <div id=\"network-create-admin-state-wrapper\">\n            <label>Admin State:</label>\n            <div id=\"network-create-admin-state\"\n                data-role=\"collapsible\"\n                data-iconpos=\"right\"\n                data-collapsed-icon=\"arrow-d\"\n                data-expanded-icon=\"arrow-u\"\n                data-theme=\"a\"\n                class=\"mist-select\">\n\n                <h4>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.networkCreateController.adminStateUpToText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </h4>\n\n                <ul data-role=\"listview\" data-theme=\"a\">\n                    <li data-icon=\"false\">\n                        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "adminStateSelected", true, {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","BOOLEAN"],data:data})));
  data.buffer.push(">\n                            UP\n                        </a>\n                    </li>\n                    <li data-icon=\"false\">\n                        <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "adminStateSelected", false, {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","BOOLEAN"],data:data})));
  data.buffer.push(">\n                            DOWN\n                        </a>\n                    </li>\n                </ul> <!-- list -->\n            </div><!-- collapsible -->\n        </div><!-- wrapper -->\n\n\n        <!--\n            Create Subnet\n        -->\n\n\n        <div id=\"network-create-subnet-wrapper\">\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'data-theme': ("a"),
    'id': ("network-create-subnet-create"),
    'checkedBinding': ("Mist.networkCreateController.network.createSubnet")
  },hashTypes:{'data-theme': "STRING",'id': "STRING",'checkedBinding': "STRING"},hashContexts:{'data-theme': depth0,'id': depth0,'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            <label for=\"network-create-subnet-create\">\n                Create Subnet\n            </label>\n\n\n            <div id=\"network-create-subnet-form\">\n\n\n                <!--\n                    Select Subnet Name\n                -->\n                <div id=\"network-create-subnet-name-wrapper\">\n                    <label for=\"network-create-subnet-name\">Subnet Name:</label>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'data-theme': ("a"),
    'id': ("network-create-subnet-name"),
    'valueBinding': ("Mist.networkCreateController.network.subnet.name")
  },hashTypes:{'data-theme': "STRING",'id': "STRING",'valueBinding': "STRING"},hashContexts:{'data-theme': depth0,'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n\n\n                <!--\n                    Select Network Address\n                -->\n                <div id=\"network-create-subnet-address-wrapper\">\n                    <label for=\"network-create-subnet-address\">Network Address (CIDR):</label>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'data-theme': ("a"),
    'id': ("network-create-subnet-address"),
    'valueBinding': ("Mist.networkCreateController.network.subnet.address")
  },hashTypes:{'data-theme': "STRING",'id': "STRING",'valueBinding': "STRING"},hashContexts:{'data-theme': depth0,'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n\n\n                <div id=\"network-create-subnet-other-wrapper\">\n                    <!--\n                        Select IP Version\n                    -->\n                    <div id=\"network-create-subnet-ipv-wrapper\">\n                        <label>IP Version:</label>\n                        <div id=\"network-create-subnet-ipv\"\n                            data-role=\"collapsible\"\n                            data-iconpos=\"right\"\n                            data-collapsed-icon=\"arrow-d\"\n                            data-expanded-icon=\"arrow-u\"\n                            data-theme=\"a\"\n                            class=\"mist-select\">\n\n                            <h4>\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "Mist.networkCreateController.network.subnet.ipv", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </h4>\n\n                            <ul data-role=\"listview\" data-theme=\"a\">\n                                <li data-icon=\"false\">\n                                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "ipvSelected", "IPv4", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                        IPv4\n                                    </a>\n                                </li>\n                                <li data-icon=\"false\">\n                                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "ipvSelected", "IPv6", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                                        IPv6\n                                    </a>\n                                </li>\n                            </ul> <!-- list -->\n                        </div><!-- collapsible -->\n                    </div><!-- wrapper -->\n\n\n                    <!--\n                        Enable Gateway\n                    -->\n                    <div>\n                        <div id=\"network-create-subnet-gateway-ip-wrapper\">\n                            <label for=\"network-create-subnet-gateway-ip\">Gateway IP:</label>\n                            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'data-theme': ("a"),
    'id': ("network-create-subnet-gateway-ip"),
    'valueBinding': ("Mist.networkCreateController.network.subnet.gatewayIP")
  },hashTypes:{'data-theme': "STRING",'id': "STRING",'valueBinding': "STRING"},hashContexts:{'data-theme': depth0,'id': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        </div>\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'data-theme': ("a"),
    'id': ("network-create-subnet-gateway"),
    'checkedBinding': ("Mist.networkCreateController.network.subnet.disableGateway")
  },hashTypes:{'data-theme': "STRING",'id': "STRING",'checkedBinding': "STRING"},hashContexts:{'data-theme': depth0,'id': depth0,'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                        <label for=\"network-create-subnet-gateway\">\n                            Disable Gateway\n                        </label>\n                    </div>\n\n\n                    <!--\n                        Enable DHCP\n                    -->\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'data-theme': ("a"),
    'id': ("network-create-subnet-dhcp"),
    'checkedBinding': ("Mist.networkCreateController.network.subnet.enableDHCP")
  },hashTypes:{'data-theme': "STRING",'id': "STRING",'checkedBinding': "STRING"},hashContexts:{'data-theme': depth0,'id': depth0,'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    <label for=\"network-create-subnet-dhcp\">\n                        Enable DHCP\n                    </label>\n\n\n                    <!--\n                        Allocation Pools\n                    -->\n                    <label for=\"network-create-subnet-allocation-pools\">\n                        Allocation Pools:\n                    </label>\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextArea", {hash:{
    'id': ("network-create-subnet-allocation-pools"),
    'data-theme': ("a"),
    'valueBinding': ("Mist.networkCreateController.network.subnet.allocationPools")
  },hashTypes:{'id': "STRING",'data-theme': "STRING",'valueBinding': "STRING"},hashContexts:{'id': depth0,'data-theme': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.networkCreateController.creatingNetwork", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"ok-cancel\" data-role=\"controlgroup\" data-type=\"horizontal\">\n            <a class=\"ui-btn ui-btn-a\"\n               ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n            <a class=\"ui-btn ui-btn-d\" id=\"network-create-ok\"\n                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Create</a>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["network/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <tr>\n                    <td>Status</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div id=\"single-network-subnets\" data-role=\"collapsible\" data-collapsed=\"false\">\n            <h4>Subnets (");
  stack1 = helpers._triageMustache.call(depth0, "subnets.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</h4>\n\n            ");
  stack1 = helpers.each.call(depth0, "subnets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "subnetListItem", {hash:{
    'model': ("")
  },hashTypes:{'model': "ID"},hashContexts:{'model': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li data-icon=\"false\">\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "assignMachine", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </a>\n            </li>\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"single-action-footer\" data-role=\"footer\" data-theme=\"b\">\n        <a class=\"ui-btn ui-corner-all ui-btn-icon-right ui-icon-delete\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                Delete\n        </a>\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"single-network-page\" data-role=\"page\" class=\"ui-page-active\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n\n        <a href=\"#/networks\" class=\"responsive-button\" data-icon=\"arrow-l\">Networks</a>\n\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n\n        <div id=\"single-network-info\" data-role=\"collapsible\" data-collapsed=\"false\">\n\n            <h4>Network Information</h4>\n\n            <table class=\"info-table\">\n                <tr>\n                    <td>Name</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n                <tr>\n                    <td>Id</td>\n                    <td>");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                </tr>\n                ");
  stack1 = helpers['if'].call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </table>\n\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "subnets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"mid-padding\"></div>\n\n    </div>\n\n    <div id=\"assign-machine\"\n        class=\"tiny-popup\"\n        data-role=\"popup\"\n        data-overlay-theme=\"b\"\n        data-transition=\"flip\">\n\n        <ul data-role=\"listview\">\n            ");
  stack1 = helpers.each.call(depth0, "view.network.backend.machines.content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.confirmationDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "backend.isOpenStack", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["network_list/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "enabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  ");
  stack1 = helpers.each.call(depth0, "networks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.networkListItemView", {hash:{
    'networkBinding': (""),
    'class': ("checkbox-link")
  },hashTypes:{'networkBinding': "ID",'class': "STRING"},hashContexts:{'networkBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                  ");
  return buffer;
  }

  data.buffer.push("<div id=\"network-list-page\" data-role=\"page\" class=\"ui-page-active\">\n\n    <div data-role=\"header\" data-theme=\"b\">\n\n        <a href=\"#\" class=\"responsive-button\" data-icon=\"home\">Home</a>\n\n        <h1>Networks</h1>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.userMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n\n    <div data-role=\"content\" data-theme=\"a\">\n        <a id=\"network-create-btn\"\n            ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("Mist.backendsController.hasOpenStack::ui-disabled\n                :responsive-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n            data-role=\"button\"\n            data-icon=\"plus\"\n            data-iconpos=\"right\"\n            data-theme=\"d\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Create</a>\n        <ul id=\"networks\"\n            data-role=\"listview\"\n            data-inset=\"true\"\n            data-filter=\"true\"\n            data-filter-placeholder=\"Filter...\"\n            data-theme=\"c\"\n            class=\"checkbox-list\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.backendsController", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n\n        <div class=\"mid-padding\"></div>\n\n    </div>\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.networkCreateView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.confirmationDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    <div class=\"single-action-footer\" data-role=\"footer\" data-theme=\"b\">\n        <a class=\"ui-btn ui-corner-all ui-btn-icon-right ui-icon-delete\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                Delete\n        </a>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["network_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'checkedBinding': ("view.network.selected")
  },hashTypes:{'checkedBinding': "STRING"},hashContexts:{'checkedBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.Checkbox", {hash:{
    'checkedBinding': ("view.network.selected"),
    'data-disabled': ("true")
  },hashTypes:{'checkedBinding': "STRING",'data-disabled': "STRING"},hashContexts:{'checkedBinding': depth0,'data-disabled': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n    <div class=\"ui-grid-b\">\n        <div class=\"ui-block-a network-name\">");
  stack1 = helpers._triageMustache.call(depth0, "view.network.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"ui-block-b\">");
  stack1 = helpers._triageMustache.call(depth0, "view.network.status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"ui-block-c key-tags\">\n            <span class=\"tag\">");
  stack1 = helpers._triageMustache.call(depth0, "view.network.backend.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        </div>\n    </div>\n\n");
  return buffer;
  }

  data.buffer.push("<label>\n    ");
  stack1 = helpers['if'].call(depth0, "view.network.backend.isOpenStack", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</label>\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "network", "view.network", options) : helperMissing.call(depth0, "link-to", "network", "view.network", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["rule_edit/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li data-icon=\"false\">\n                <a class=\"ui-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "metricClicked", "id", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </a>\n            </li>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <li data-icon=\"false\">\n                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "operatorClicked", "title", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "symbol", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </a>\n                </li>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <li data-icon=\"false\">\n                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "actionClicked", "", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </a>\n                </li>\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <li data-icon=\"false\">\n                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "aggregateClicked", "value", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </a>\n                </li>\n            ");
  return buffer;
  }

  data.buffer.push("<div id=\"rule-metric-screen\" class=\"ui-popup-screen ui-screen-hidden ui-overlay-b\"></div>\n<div id=\"rule-metric-popup\"\n     class=\"ui-popup-container ui-popup-hidden ui-body-inherit ui-overlay-shadow\">\n\n    <div id=\"rule-metric\"\n         class=\"ui-popup\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\">\n\n        <ul data-role=\"listview\">\n            ");
  stack1 = helpers.each.call(depth0, "view.metrics", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n</div>\n\n\n<div id=\"rule-operator-screen\" class=\"ui-popup-screen ui-screen-hidden ui-overlay-b\"></div>\n<div id=\"rule-operator-popup\"\n     class=\"ui-popup-container ui-popup-hidden ui-body-inherit ui-overlay-shadow\">\n\n    <div id=\"rule-operator\"\n         class=\"ui-popup\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\">\n\n        <ul data-role=\"listview\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.rulesController.operatorList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n</div>\n\n\n<div id=\"rule-action-screen\" class=\"ui-popup-screen ui-screen-hidden ui-overlay-b\"></div>\n<div id=\"rule-action-popup\"\n     class=\"ui-popup-container ui-popup-hidden ui-body-inherit ui-overlay-shadow\">\n\n    <div id=\"rule-action\"\n         class=\"ui-popup\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\">\n\n        <ul data-role=\"listview\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.rulesController.actionList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <li class=\"ui-state-disabled\" data-icon=\"false\">\n                <a>launch</a>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\n<div id=\"rule-command-screen\" class=\"ui-popup-screen ui-screen-hidden ui-overlay-b\"></div>\n<div id=\"rule-command-popup\"\n     class=\"ui-popup-container ui-popup-hidden ui-body-inherit ui-overlay-shadow ui-corner-all large-popup\">\n\n    <div id=\"rule-command\"\n         class=\"ui-popup ui-corner-all\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\">\n\n        <div class=\"ui-header ui-bar-b\">\n            <h1 class=\"ui-title\">Command</h1>\n        </div>\n\n        <div data-role=\"content\">\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("view.newCommand"),
    'name': ("rule-command-content")
  },hashTypes:{'valueBinding': "STRING",'name': "STRING"},hashContexts:{'valueBinding': depth0,'name': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <div data-role=\"controlgroup\" class=\"btn-full ok-cancel\" data-type=\"horizontal\">\n                <a class=\"ui-btn ui-btn-a\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "backClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Back</a>\n                <a class=\"ui-btn ui-btn-d\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div id=\"rule-aggregate-screen\" class=\"ui-popup-screen ui-screen-hidden ui-overlay-b\"></div>\n<div id=\"rule-aggregate-popup\"\n     class=\"ui-popup-container ui-popup-hidden ui-body-inherit ui-overlay-shadow\">\n\n    <div id=\"rule-aggregate\"\n         class=\"ui-popup\"\n         data-role=\"popup\"\n         data-enhanced=\"true\"\n         data-transition=\"flip\">\n\n        <ul data-role=\"listview\">\n            ");
  stack1 = helpers.each.call(depth0, "Mist.rulesController.aggregateList", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["rule/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n            <div class=\"rule-within rule-text\">within</div>\n\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'class': ("rule-time-window"),
    'type': ("number"),
    'valueBinding': ("view.newRuleTimeWindow")
  },hashTypes:{'class': "STRING",'type': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'type': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n            <div class=\"rule-mins rule-text\">min(s)</div>\n\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"ajax-loader\"></div>\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"delete-rule-container\">\n            <a class=\"delete-rule-button ui-btn ui-btn-icon-notext ui-icon-delete ui-corner-all\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRuleClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">&nbsp;</a>\n        </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"rule-box\">\n\n    <div id=\"basic-condition\">\n        <div class=\"rule-if rule-text\">if</div>\n\n        <a class=\"rule-button rule-metric ui-btn ui-btn-inline ui-shadow ui-corner-all\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openMetricPopup", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "metric.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n\n        <a class=\"rule-button rule-operator ui-btn ui-btn-inline ui-shadow ui-corner-all\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openOperatorPopup", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "operator.symbol", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.TextField", {hash:{
    'class': ("rule-value"),
    'type': ("number"),
    'valueBinding': ("view.newRuleValue")
  },hashTypes:{'class': "STRING",'type': "STRING",'valueBinding': "STRING"},hashContexts:{'class': depth0,'type': depth0,'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n        <div class=\"rule-unit rule-text\">");
  stack1 = helpers._triageMustache.call(depth0, "metric.unit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </div>\n\n    <a class=\"rule-button rule-more ui-btn ui-btn-inline ui-shadow ui-corner-all\"\n        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openAdvancedCondition", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        ...\n    </a>\n\n    <div class=\"advanced-condition\">\n\n        <div class=\"rule-for rule-text\">for</div>\n\n        <a class=\"rule-button rule-aggregate ui-btn ui-btn-inline ui-shadow ui-corner-all\"\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openAggregatePopup", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "aggregate.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n\n        <div class=\"rule-for rule-text\">value</div>\n\n        ");
  stack1 = helpers.unless.call(depth0, "view.aggregateIsAny", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n    <div class=\"rule-then rule-text\">then</div>\n\n    <a class=\"rule-button rule-action ui-btn ui-btn-inline ui-shadow ui-corner-all\"\n        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openActionPopup", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "actionToTake", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </a>\n\n    ");
  stack1 = helpers['if'].call(depth0, "pendingAction", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["rule_list/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.ruleView", {hash:{
    'ruleBinding': ("this")
  },hashTypes:{'ruleBinding': "STRING"},hashContexts:{'ruleBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"rule-box\" id=\"creation-rule\">\n            <div class=\"ajax-loader\"></div>\n        </div>\n    ");
  }

  data.buffer.push("<div class=\"rules-container\" data-role=\"listview\">\n\n    ");
  stack1 = helpers.each.call(depth0, "view.rules", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "Mist.rulesController.creationPending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["subnet_list_item/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <tr>\n        <td class=\"subnet-name\">Name</td>\n        <td class=\"subnet-name\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <tr>\n        <td>Id</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <tr>\n        <td>Zone</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "zone.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <tr>\n        <td>Cidr</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "cidr", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <tr>\n        <td>DHCP Enabled</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "enable_dhcp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <tr>\n        <td>Gateway IP</td>\n        <td>");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "gateway_ip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </tr>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <tr>\n            <td>DNS Nameservers</td>\n            <td>\n                ");
  stack1 = helpers.each.call(depth0, "dns_nameservers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </td>\n        </tr>\n        ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <div class=\"ip\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n                ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <tr>\n            <td>Allocation pools</td>\n            <td>\n                ");
  stack1 = helpers.each.call(depth0, "allocation_pools", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </td>\n        </tr>\n        ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <div class=\"ip\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "start", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div> -\n                <div class=\"ip\">");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "end", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>\n                ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <tr>\n            <td class=\"usable-ips\" colspan=\"2\">\n                <h4>Usable ip addresses (");
  stack1 = helpers._triageMustache.call(depth0, "ipAddresses.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</h4>\n                <table>\n                    ");
  stack1 = helpers.each.call(depth0, "ipAddresses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </table>\n        </td>\n    </tr>\n    ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "ipAddressListItem", {hash:{
    'model': ("")
  },hashTypes:{'model': "ID"},hashContexts:{'model': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n                    ");
  return buffer;
  }

  data.buffer.push("<table class=\"info-table\">\n    ");
  stack1 = helpers['if'].call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "zone", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "cidr", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "enable_dhcp", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "gateway_ip", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "dns_nameservers.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "allocation_pools.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "ipAddresses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>\n");
  return buffer;
  
});
Ember.TEMPLATES["user_menu/html"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img class=\"gravatar-image\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.gravatarURL")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"gravatar-image user\"></div>\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n            <a data-role=\"button\" data-mini=\"true\" data-theme=\"b\"\n               ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("view.accountUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n               ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'target': ("view.isNotCore")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Account</a>\n\n\n            ");
  stack1 = helpers['if'].call(depth0, "Mist.isCore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <a data-role=\"button\" data-theme=\"b\" data-mini=\"true\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logoutClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Logout</a>\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.unless.call(depth0, "Mist.isCore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <a data-role=\"button\" data-theme=\"b\" data-mini=\"true\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loginClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Login</a>\n            ");
  return buffer;
  }

  data.buffer.push("<a id=\"me-btn\"\n   class=\"ui-btn-right\"\n   data-role=\"button\"\n   ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "meClicked", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "view.gravatarURL", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    &nbsp;</a>\n\n<div id=\"user-menu-popup\" class=\"ui-mini\" data-role=\"popup\" data-position-to=\"#me-btn\" data-theme=\"c\" data-overlay-theme=\"b\" data-transition=\"flip\">\n\n    <div data-role=\"content\">\n\n        <div id=\"user-email\">");
  stack1 = helpers._triageMustache.call(depth0, "EMAIL", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n        <a href=\"https://mistio.zendesk.com/access/login\"\n           target=\"_blank\"\n           data-role=\"button\"\n           data-theme=\"b\"\n           data-mini=\"true\">Support</a>\n\n        ");
  stack1 = helpers['if'].call(depth0, "Mist.authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n\n</div>\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.loginView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Mist.messageboxView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});
    callback();
  }
});
