var CodeHelper = {
  getFunctionDeclarationCode: function(block, statementInput, funcName){
    funcName = funcName || statementInput;
    var statements = Blockly.JavaScript.statementToCode(block, statementInput);
    return 'public void '+ funcName +'(){\n'+ statements +'\n};\n';
  },
  getFunctionInvocationCode: function(block, valueInputName, funcName){
    var value = '';
    var values = [];
    if (Array.isArray(valueInputName)){
      valueInputName.forEach(function(aValueName){
        values.push(Blockly.JavaScript.valueToCode(block, aValueName, Blockly.JavaScript.ORDER_ATOMIC));
      });
      value = values.join(',');
    }
    else {

      value = Blockly.JavaScript.valueToCode(block, valueInputName, Blockly.JavaScript.ORDER_ATOMIC);
      funcName = funcName || valueInputName;
    }
    return code =  funcName +'(' + value + ');\n';
  },
  getSimpleFunctionInvocationCode: function(block, funcName){
    return code =  funcName +'();\n';
  }
}

  Blockly.Blocks['fn_onhitrobot'] = {
    init: function() {
      this.appendStatementInput("onHitRobot")
          .setCheck(null)
          .appendField("onHitRobot");
      this.setColour(0);
   this.setTooltip("Funcion para definir que hacer en caso de recibir un disparo");
   this.setHelpUrl("");
    }
  };

  
  Blockly.JavaScript['fn_onhitrobot'] = function(block) {
    var statements_run = Blockly.JavaScript.statementToCode(block, 'onHitRobot');
    // TODO: Assemble JavaScript into code variable.
    var code = 'public void onHitRobot(){\n'+ statements_run +'\n};\n';
    return code;
  };
  
  Blockly.Blocks['fn_run'] = {
    init: function() {
      this.appendStatementInput("run")
          .setCheck(null)
          .appendField("run");
      this.setColour(0);
   this.setTooltip("Funcion principal");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['fn_ahead'] = {
    init: function() {
      this.appendValueInput("ahead")
          .setCheck("Number")
          .appendField("ahead")
          .appendField("steps");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("El robot se mueve la cantidad especificada de pasos hacia adelante ");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['fn_ahead'] = function(block) {
    return CodeHelper.getFunctionInvocationCode(block, 'ahead');
  };

  Blockly.Blocks['fn_back'] = {
    init: function() {
      this.appendValueInput("back")
          .setCheck("Number")
          .appendField("back")
          .appendField("steps");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("El robot se mueve la cantidad especificada de pasos hacia atrás ");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['fn_back'] = function(block) {
    return CodeHelper.getFunctionInvocationCode(block, 'back');
  };
  
  Blockly.Blocks['fn_fire'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("fire");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("Dispara una bala con poder default de 1");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['fn_fire'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    return CodeHelper.getSimpleFunctionInvocationCode(block, 'fire');
  };

  Blockly.Blocks['fn_setcolors'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("setColors");
      this.appendValueInput("bodyColor")
          .setCheck(null)
          .appendField("bodyColor");
      this.appendValueInput("gunColor")
          .setCheck(null)
          .appendField("gunColor");
      this.appendValueInput("radarColor")
          .setCheck(null)
          .appendField("radarColor");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
   this.setTooltip("Asigna los colores");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['fn_turngunright'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("turnGunRight");
      this.appendValueInput("degrees")
          .setCheck("Number")
          .appendField("degrees");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("Gira el arma a la derecha la cantidad de grados especificados");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['fn_turngunleft'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("turnGunLeft");
      this.appendValueInput("degrees")
          .setCheck("Number")
          .appendField("degrees");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("Gira el arma a la izquierda la cantidad de grados especificados");
   this.setHelpUrl("");
    }
  };


  
  
  Blockly.JavaScript['fn_run'] = function(block) {
    return CodeHelper.getFunctionDeclarationCode(block, 'run');
  };

  
  
  
  
  
  Blockly.JavaScript['fn_setcolors'] = function(block) {
    return CodeHelper.getFunctionInvocationCode(block, ['bodyColor','gunColor', 'radarColor'], 'setColors');
  };
  
  Blockly.JavaScript['fn_turngunright'] = function(block) {
    return CodeHelper.getFunctionInvocationCode(block, 'degrees', 'turnGunRight');
  };
  
  Blockly.JavaScript['fn_turngunleft'] = function(block) {
    return CodeHelper.getFunctionInvocationCode(block, 'degrees', 'turnGunLeft');

  };