

let display = document.querySelector('.display')
// let displayValue = display.textContent
let num1 = 0
let num2
let solutionVal
/* Display numbers when clicked */
const numBtns = document.querySelectorAll('.digit')
for (let numBtn of numBtns) {
    numBtn.addEventListener('click', () => {
        if (num1 === 0) {
            num1 = parseInt(numBtn.textContent)
        } else { num2 = parseInt(numBtn.textContent) }
        display.textContent = numBtn.textContent
    })
}



/* Operations */
function add(num1, num2) {
    solutionVal = num1 + num2
    display.textContent = num1 + num2
    console.log(num1 + num2)
}
function subtract(num1, num2) {
    display.textContent = num1 - num2
    console.log(num1 - num2)
}
function multiply(num1, num2) {
    display.textContent = num1 * num2
    console.log(num1 * num2)
}
function divide(num1, num2) {
    display.textContent = num1 / num2
    console.log(num1 / num2)
}

//return name of the operator for operate function when clicked 
let tool
let operators = document.querySelectorAll('.operator')
for (let operator of operators) {
    operator.addEventListener('click', () => {
        tool = operator.getAttribute('id');
        console.log(tool)
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
}

//when hit Equals Key=> run operate function
const equal = document.querySelector('.equal')
equal.addEventListener('click', operate)


//reset numbers and operator 
const reset = document.querySelector('.clear')
function resetVal() {
    display.textContent = 0;
    num1 = 0
    num2 = 0
    tool = ''
}
reset.addEventListener('click', resetVal)