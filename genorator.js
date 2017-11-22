Blockly.JavaScript['block_definition'] = function(block) {
  var text_block = block.getFieldValue('BLOCK');
  var number_name = block.getFieldValue('NAME');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  // TODO: Assemble JavaScript into code variable.
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var params = "";
  if(number_name > 0){for(var i = 0;i < number_name;i++){params += alpha[i] + ","}};
  params += "callback"
  var code = 'ext.'+text_block+' = function (' + params + '){'+statements_code+'};\n';
  return code;
};

Blockly.JavaScript['block_waitcall'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'callback();\n';
  return code;
};

Blockly.JavaScript['block_reportcall'] = function(block) {
  var value_report = Blockly.JavaScript.valueToCode(block, 'REPORT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'return '+value_report+';\n';
  return code;
};

Blockly.JavaScript['block_waitreportcall'] = function(block) {
  var value_report = Blockly.JavaScript.valueToCode(block, 'REPORT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'callback('+value_report+');\n';
  return code;
};

Blockly.JavaScript['block_hatcall'] = function(block) {
  var value_report = Blockly.JavaScript.valueToCode(block, 'REPORT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'callback('+value_report+');\n';
  return code;
};

Blockly.JavaScript['block_boolcall'] = function(block) {
  var value_report = Blockly.JavaScript.valueToCode(block, 'REPORT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'callback('+value_report+');\n';
  return code;
};

Blockly.JavaScript['block_describe'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_type = block.getFieldValue('TYPE');
  var value_content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '["'+dropdown_type+'","'+value_content+'","'+text_name+'"],';
  return code;
};

Blockly.JavaScript['block_separator'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '["-"],';
  return code;
};

Blockly.JavaScript['content_text'] = function(block) {
  var text_text = block.getFieldValue('TEXT');
  var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' '+text_text + value_next;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['content_string'] = function(block) {
  var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' %s'+value_next;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['content_num'] = function(block) {
  var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' %n' + value_next;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['content_bool'] = function(block) {
  var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' %b' + value_next;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['content_menu'] = function(block) {
  var text_type = block.getFieldValue('TYPE');
  var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' %m.' + text_type + value_next;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_menu'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var text_options = block.getFieldValue('OPTIONS');
  var text = text_options.split(",");
  var options = "";
  for(var i = 0;i < text.length;i++){options += '"' + text[i] + '"'};
  var code = text_name + ': ['+options+']';
  return code;
};

Blockly.JavaScript['js_stack'] = function(block) {
  var text_js = block.getFieldValue('JS');
  // TODO: Assemble JavaScript into code variable.
  var code = text_js + "\n";
  return code;
};

Blockly.JavaScript['js_return'] = function(block) {
  var text_js = block.getFieldValue('JS');
  // TODO: Assemble JavaScript into code variable.
  var code = text_js + "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['base'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_definitions = Blockly.JavaScript.statementToCode(block, 'DEFINITIONS');
  var statements_describe = Blockly.JavaScript.statementToCode(block, 'DESCRIBE');
  var statements_menus = Blockly.JavaScript.statementToCode(block, 'MENUS');
  var text_help = block.getFieldValue('HELP');
  // TODO: Assemble JavaScript into code variable.
  var code = "ext._shutdown = function() {};ext._getStatus = function() {    return {status: 2, msg: 'Ready'};};"+statements_definitions+"  var descriptor = {   blocks: ["+statements_describe+"],menus: {"+statements_menus+"},url: 'https://kyleplo.github.io/scratch-extension-creator/help#'" + text_help + "};ScratchExtensions.register('"+text_name+"', descriptor, ext);";
  return code;
};

Blockly.JavaScript['content_color'] = function(block) {
  var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' %c' + value_next;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_inputvalue'] = function(block) {
  var number_input = block.getFieldValue('INPUT');
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var code = alpha[number_input];
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
