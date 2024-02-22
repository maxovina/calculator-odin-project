const numBtns = document.querySelectorAll('.numBtns');
const opBtns = document.querySelectorAll('.opBtns');
const displayScreen = document.querySelector('#displayScreen');
const evalBtn = document.querySelector('#evalBtn');
const delBtn = document.querySelector('#delBtn');
const clrBtn = document.querySelector('#clrBtn');
const clrEntBtn = document.querySelector('#clrEntBtn');
const floatBtn = document.querySelector('#floatBtn');
const negateBtn = document.querySelector('#negateBtn');
let currentValue = '';
let operator;
let opExists = false;
let previousValue = '';

numBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => handleNumber(e.target.textContent) );
})

opBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => handleOperator(e.target.value));

})

evalBtn.addEventListener('click', () => handleEvaluate());

delBtn.addEventListener('click', () => handleDelBtn());

clrBtn.addEventListener('click', () => handleClrBtn());

clrEntBtn.addEventListener('click', () => handleClrEntBtn());

floatBtn.addEventListener('click', () => handleNumber('.'));

negateBtn.addEventListener('click', () => handleNegateBtn())
       

function handleNumber(num){
    if(currentValue.length < 6){
        currentValue += num;
    }
    displayScreen.textContent = currentValue;
}

function handleOperator(op){
    if (opExists && previousValue) {
        currentValue = evaluate(previousValue, currentValue, operator).toString();
        displayScreen.textContent = currentValue;
    }
    operator = op;
    opExists = true;
    previousValue = currentValue;
    displayScreen.textContent = previousValue;
    currentValue = '';
}

function handleEvaluate(){
    if(currentValue != '' && previousValue != ''){
        let result = evaluate(currentValue, previousValue, operator);
        previousValue = result.toString();
        displayScreen.textContent = previousValue;
        currentValue = '';
    }
}

function evaluate(currNum, prevNum, op){
    switch(op){
        case '+':
            return Number(prevNum) + Number(currNum);

        case '-':
            return Number(prevNum) - Number(currNum);

        case '*':
            return Number(prevNum) * Number(currNum);

        case '/':
            return Number(prevNum) / Number(currNum);
        
    }
}

function handleDelBtn(){
    if(currentValue.length != 0){
        currentValue = currentValue.slice(0, -1);
        displayScreen.textContent = currentValue;

    }
}

function handleClrBtn(){
    currentValue = '';
    displayScreen.textContent = currentValue;
}

function handleClrEntBtn(){
    currentValue = '';
    previousValue = '';
    operator = undefined;
    opExists = false;
    displayScreen.textContent = currentValue;
}

function handleNegateBtn(){
    if(currentValue[0] != '-' && currentValue.length > 0){
        currentValue = '-' + currentValue;
        
    }else {
        currentValue = currentValue.slice(1);
    }
    displayScreen.textContent = currentValue;
}