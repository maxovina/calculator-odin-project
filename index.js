const inputButtons = document.querySelectorAll('.inputButtons');
const displayContent = document.querySelector('#displayContent');
const deleteButton = document.querySelector('#deleteButton');
let calculation = "";

inputButtons.forEach((button) => {
    button.addEventListener('click', (event) => buttonAction(event))
})

function buttonAction(e){
    if(e.target.value > 0 && e.target.value < 10){
        displayContent.textContent += e.target.value;
        calculation += e.target.value
        console.log(calculation);
    }else if(e.target.value === "C"){
        clearCalc()
    }else if(e.target.value === "+" ||
    e.target.value === "-" ||
    e.target.value === "*" ||
    e.target.value === "/"){
        displayContent.textContent += e.target.value;
        calculation += ` ${e.target.value} `;
        console.log(calculation);
       }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a , b){
    return a / b;
}

function operate(firstNum, operator, secondNum){
    switch(operator){
        case '+' :
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

function clearCalc(){
    displayContent.textContent = "";
    console.log('cleared')
}