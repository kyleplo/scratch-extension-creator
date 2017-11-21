Blockly.Blocks['block_definition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("block")
        .appendField(new Blockly.FieldTextInput("myBlock"), "BLOCK")
        .appendField("with")
        .appendField(new Blockly.FieldNumber(0, 0, 25, 1), "NAME")
        .appendField("inputs");
    this.appendStatementInput("CODE")
        .setCheck(null);
    this.setPreviousStatement(true, "define");
    this.setNextStatement(true, "define");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_waitcall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stack wait callback");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_reportcall'] = {
  init: function() {
    this.appendValueInput("REPORT")
        .setCheck(null)
        .appendField(" non-wait report");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_waitreportcall'] = {
  init: function() {
    this.appendValueInput("REPORT")
        .setCheck(null)
        .appendField("wait report");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_hatcall'] = {
  init: function() {
    this.appendValueInput("REPORT")
        .setCheck(null)
        .appendField("hat run?");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_boolcall'] = {
  init: function() {
    this.appendValueInput("REPORT")
        .setCheck("Boolean")
        .appendField("boolean report");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_describe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("myBlock"), "NAME");
    this.appendDummyInput()
        .appendField("type")
        .appendField(new Blockly.FieldDropdown([["stack"," "], ["stack wait","W"], ["reporter","r"], ["reporter wait","R"], ["hat","h"], ["boolean","b"]]), "TYPE");
    this.appendValueInput("CONTENT")
        .setCheck("content")
        .appendField("content");
    this.setPreviousStatement(true, "describe");
    this.setNextStatement(true, "describe");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_separator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("block separator");
    this.setPreviousStatement(true, "describe");
    this.setNextStatement(true, "describe");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['content_text'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck("content")
        .appendField("text")
        .appendField(new Blockly.FieldTextInput("hello"), "TEXT");
    this.setInputsInline(false);
    this.setOutput(true, "content");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['content_string'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck("content")
        .appendField("string input");
    this.setInputsInline(false);
    this.setOutput(true, "content");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['content_num'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck("content")
        .appendField("number input");
    this.setInputsInline(false);
    this.setOutput(true, "content");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['content_bool'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck("content")
        .appendField("boolean input");
    this.setInputsInline(false);
    this.setOutput(true, "content");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['content_menu'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck("content")
        .appendField("menu")
        .appendField(new Blockly.FieldTextInput("var"), "TYPE");
    this.setInputsInline(false);
    this.setOutput(true, "content");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("menu")
        .appendField(new Blockly.FieldTextInput("myMenu"), "NAME");
    this.appendDummyInput()
        .appendField("with options")
        .appendField(new Blockly.FieldTextInput("option1, option2"), "OPTIONS");
    this.setPreviousStatement(true, "menus");
    this.setNextStatement(true, "menus");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['js_stack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("javscript")
        .appendField(new Blockly.FieldTextInput("alert(\"Hello!\")"), "JS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['js_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("javscript")
        .appendField(new Blockly.FieldTextInput("prompt(\"What's your name?\")"), "JS");
    this.setOutput(true, ["String", "Array", "Number", "Boolean"]);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['base'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("extension name")
        .appendField(new Blockly.FieldTextInput("My Extension"), "NAME");
    this.appendDummyInput()
        .appendField("block definitions");
    this.appendStatementInput("DEFINITIONS")
        .setCheck("define");
    this.appendDummyInput()
        .appendField("descriptions");
    this.appendStatementInput("DESCRIBE")
        .setCheck("describe");
    this.appendDummyInput()
        .appendField("menus (optional)");
    this.appendStatementInput("MENUS")
        .setCheck("menus");
    this.appendDummyInput()
        .appendField("help text")
        .appendField(new Blockly.FieldTextInput("Hello!"), "HELP");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['content_color'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck("content")
        .appendField("color input");
    this.setInputsInline(false);
    this.setOutput(true, "content");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_inputvalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("value of input")
        .appendField(new Blockly.FieldNumber(1, 1, 25), "INPUT");
    this.setInputsInline(false);
    this.setOutput(true, "content");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};