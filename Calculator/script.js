var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    if (value == '+' || value == '-' || value == '*' || value == '/')
        return true;
}
function calc(value, text){
    if(isOperator(value)){
        operator = value;
        operand1 = parseFloat(text);
        display.textContent = ' ';
    }
    else if(value == 'sign' || value=='!'){
        operand1 = -1 * parseFloat(text);
        display.textContent = operand1;
    }
    else if(value == 'ac' || value=='Backspance'|| value=='Delete' || value=="Escape"){
        display.textContent = "";
    }
    else if(value == '%'){
        operand1 = parseFloat(text);
        display.textContent = operand1 /100;
    }
    else if(value == '.' ){
        if(text.length >=1 && !text.include('.'))
        display.textContent = text + ".";
    }
    else if(value == '=' || value=='Enter'){
        operand2 = parseFloat(text);
        var result = eval(operand1 + ''+ operator + '' + operand2)
        result=result.toPrecision(5);
        display.textContent = result;
        operand1 = result;
        operator = null;
        operand2 = null;
    }
    else if(value >=0&& value<=9){
        display.textContent += value;
    }
    
}

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        calc(value, text);
    });
}