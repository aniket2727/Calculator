let display = document.getElementById('display');

let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    try {
        display.style.color = 'red';
        currentInput = eval(currentInput);
        display.textContent ="ans="+ currentInput;
        
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
