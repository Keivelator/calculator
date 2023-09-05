let currentNumber = '';
let operator;
let firstNumber;
let result;
let equalButtonClicked = false;


//Target UI Elements
const displayTop = document.querySelector('.display-top');
const displayBottom = document.querySelector('.display-bottom');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if (equalButtonClicked) reset();
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
        // ---------------------------------
        operator = operatorButton.textContent;
        displayTop.textContent += ` ${operatorButton.textContent} `;
    })
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    equalButtonClicked = true;
    result = operate(Number(firstNumber), Number(currentNumber), operator);
    displayBottom.textContent = result;
})

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => reset())

const backSpaceButton = document.querySelector('.back-space');
backSpaceButton.addEventListener('click', () =>{
    displayTop.textContent = displayTop.textContent.slice(0, -1);
    currentNumber = currentNumber.slice(0, -1);
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

function reset () {
    currentNumber = '';
    operator = '';
    firstNumber = '';
    result = '';
    displayBottom.textContent = '';
    displayTop.textContent = '';
    equalButtonClicked = false;
}