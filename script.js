let currentNumber = '';
let operator;
let firstNumber;
let result;

//Target UI Elements
const displayTop = document.querySelector('.display-top');
const displayBottom = document.querySelector('.display-bottom');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        displayTop.textContent += numberButton.id;
        currentNumber += numberButton.id;
    })
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        // to add to firstNumber
        firstNumber = currentNumber;
        currentNumber = '';
        console.log('first number is ${firstNumber}');
        // ---------------------------------
        operator = operatorButton.textContent;
        displayTop.textContent += ` ${operatorButton.textContent} `;
    })
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    result = operate(Number(firstNumber), Number(currentNumber), operator);
    console.log(result);
    displayBottom.textContent = result;
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