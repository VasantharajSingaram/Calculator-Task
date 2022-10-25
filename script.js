// whatever user enter in the calculater we want to collect and store it in the variable so we can calculate

var result = document.getElementById('result');


// every time when the buttons are clicked this function will be called and number is the argument 
function calculate(number) {
    document.getElementById('result').innerHTML = result.value += number;

}


function keyboardInput(key) {

    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        alert("Only numbers are allowed");
    } else {
        key.preventDefault();
        if (key.which === 48) {
            document.getElementById('result').innerHTML = result.value += "0";
        } else if (key.which === 49) {
            document.getElementById('result').innerHTML = result.value += "1";
        } else if (key.which === 50) {
            document.getElementById('result').innerHTML = result.value += "2";
        } else if (key.which === 51) {
            document.getElementById('result').innerHTML = result.value += "3";
        } else if (key.which === 52) {
            document.getElementById('result').innerHTML = result.value += "4";
        } else if (key.which === 53) {
            document.getElementById('result').innerHTML = result.value += "5";
        } else if (key.which === 54) {
            document.getElementById('result').innerHTML = result.value += "6";
        } else if (key.which === 55) {
            document.getElementById('result').innerHTML = result.value += "7";
        } else if (key.which === 56) {
            document.getElementById('result').innerHTML = result.value += "8";
        } else if (key.which === 57) {
            document.getElementById('result').innerHTML = result.value += "9";
        } else if (key.which === 46) {
            document.getElementById('result').innerHTML = result.value += ".";
        } else if (key.which === 40) {
            document.getElementById('result').innerHTML = result.value += "(";
        } else if (key.which === 41) {
            document.getElementById('result').innerHTML = result.value += ")";
        } else if (key.which === 42) {
            document.getElementById('result').innerHTML = result.value += "*";
        } else if (key.which === 47) {
            document.getElementById('result').innerHTML = result.value += "/";
        } else if (key.which === 43) {
            document.getElementById('result').innerHTML = result.value += "+";
        } else if (key.which === 45) {
            document.getElementById('result').innerHTML = result.value += "-";
        } else if (key.which === 13) {
            sum();
        } else if (key.which === 32) {
            clearOutput();
        }

    }
}


//this is to calculate the numbers which is in the result variable
function sum() {
    result.value = eval(result.value);
}

function backspaceKeyEvent(event) {
    if (event.which === 8) {
        del();
    }
}

function clearOutput() {
    document.getElementsByClassName('clear').innerHTML = result.value = " ";
}

function del() {
    document.getElementsByClassName('dl').innerHTML = result.value = result.value.slice(0, -1);
}

function sq() {
    result.value = Math.sqrt(result.value);
}

function percent() {
    result.value = result.value / 100;
}

window.onload = function () {

    document.onkeydown = backspaceKeyEvent;
    document.onkeypress = keyboardInput;

}