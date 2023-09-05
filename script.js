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
    console.log(result);
    displayBottom.textContent = result;
})

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => reset())









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
    let resettedArray = [currentNumber, operator, firstNumber, result];
    console.log(resettedArray);
    equalButtonClicked = false;
}