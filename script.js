let currentNumber = '';
let operator;
let firstNumber;
let secondNumber;
let result;

//Target UI Elements
const displayTop = document.querySelector('.display-top');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        displayTop.textContent += numberButton.id;
        currentNumber += numberButton.id;
        console.log(currentNumber);
    })
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        operator = operatorButton.textContent;
        console.log(operator);        
    })
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    result = operate(firstNumber, secondNumber, operator);
})










function operate (num1, num2, opt) {
    switch (opt) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        }
}