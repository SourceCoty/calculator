let firstNumber = '';
let secondNumber = ''; 
let operator = null;
let shouldResetDisplay = false; 


const numberButtons = document.querySelectorAll('.numbers');
const decimalButton = document.querySelector('#decimal')
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const lowerDisplay = document.getElementById('lower');
const upperDisplay = document.getElementById('upper');

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.value)));

decimalButton.addEventListener('click', function(event) {
    appendNumber
    event.target.disabled = true
});

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperator(button.value)));

clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    lowerDisplay.textContent = '0';
    upperDisplay.textContent = operator
    decimalButton.disabled = false;
});

deleteButton.addEventListener('click', () => {
    lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1)
});

equalsButton.addEventListener('click', calculate)
 
function appendNumber(number) {
    if(lowerDisplay.textContent === '0' || shouldResetDisplay ) {
    resetLowerDisplay() }
    lowerDisplay.textContent += number
    if(lowerDisplay.textContent >= 13) {
        lowerDisplay.textContent = lowerDisplay.textContent.substring(0, 13)
    }
};

function resetLowerDisplay() {
    lowerDisplay.textContent = '';
    shouldResetDisplay = false;
}

function setOperator(value) {
    if(operator !== null) calculate()
    firstNumber = lowerDisplay.textContent
    operator = value
    upperDisplay.textContent = `${firstNumber} ${operator}`;
    shouldResetDisplay = true;
};

function calculate() {
    if (operator === null || shouldResetDisplay) return 
    if (operator === "/" && lowerDisplay.textContent === '0') {
        alert("You can't divide by 0!")
        return
    }
    secondNumber = lowerDisplay.textContent
    lowerDisplay.textContent = operate(firstNumber, secondNumber, operator)
    upperDisplay.textContent= `${firstNumber} ${operator} ${secondNumber} =`
    operator = null
    if(lowerDisplay.textContent >= 13) {
        lowerDisplay.textContent = lowerDisplay.textContent.substring(0, 13)
    }
};

function add(a, b) {
    return a + b
};

function subtract(a, b) {
	return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

function operate(a, b, operator) {
    a = Number(a)
    b = Number(b)
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b)
    } else if (operator === "/") {
       return divide(a, b)
    }
};