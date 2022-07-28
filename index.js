
let display = document.querySelector('.display')
let num1 = ''
let num2 = ''
let solutionVal
let tool;
let isCalculating = false;
let operators = document.querySelectorAll('.operator');


/* Display numbers when clicked */
const numBtns = document.querySelectorAll('.digit')
for (let numBtn of numBtns) {
    let integer = numBtn.textContent //to convert string to integer
    numBtn.addEventListener('click', () => {
        appendNum(integer)
    })
}

function appendNum(num) {
    if (isCalculating == false) {
        resetDisplay()
        num1 += num
        display.textContent += num1
    } else if (isCalculating == true) {
        resetDisplay()
        num2 += num
        display.textContent += num2
    }
}

function resetDisplay() {
    display.textContent = ''

}

/* Operations */
function add(num1, num2) {
    solutionVal = parseInt(num1) + parseInt(num2)
}
function subtract(num1, num2) {
    solutionVal = parseInt(num1) - parseInt(num2)
}
function multiply(num1, num2) {
    solutionVal = parseInt(num1) * parseInt(num2)
}
function divide(num1, num2) {
    solutionVal = parseInt(num1) / parseInt(num2)
}

//return name of the operator for operate function when clicked 
for (let operator of operators) {
    operator.addEventListener('click', () => {
        isCalculating = true;
        display.textContent = ''
        tool = operator.getAttribute('id');

    })
}
function operate() {
    switch (tool) {
        case 'plus': add(num1, num2);
            break;
        case 'minus': subtract(num1, num2);
            break;
        case 'multiply': multiply(num1, num2);
            break;
        case 'divide': divide(num1, num2);
            break;
    }
    display.textContent = solutionVal
}

//when hit Equals Key=> run operate function
const equal = document.querySelector('.equal')
equal.addEventListener('click', operate)


//reset numbers and operator 
const reset = document.querySelector('.clear')
function resetOperation() {
    isCalculating = false;
    display.textContent = 0;
    num1 = 0;
    num2 = 0;
    tool = '';
}
reset.addEventListener('click', resetOperation)


//to do
//odin 5-b