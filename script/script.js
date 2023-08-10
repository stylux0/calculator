let displayText = '';
let firstDigit = 0;
let secondDigit =0;
let operator = '';
let globalResult = 0;


//html variables
let display = document.getElementById("display");
let miniDisplay = document.getElementById("mini-display");
let numbersButtons = document.getElementsByClassName("number");
let operatorButtons = document.getElementsByClassName("operator");
let equalButton = document.getElementById("equal");
let clearButton = document.getElementById("clear");


clearButton.addEventListener('click', e =>{
    operator = '';
    firstDigit = 0;
    secondDigit = 0;
    display.innerText = '0';
    miniDisplay.innerText = '';
})

equalButton.addEventListener('click',e => {
    secondDigit = parseInt(display.innerText);
    console.log(firstDigit);
    console.log(operator);
    console.log(secondDigit);
    console.log(displayText);
    globalResult = operate(operator,firstDigit,secondDigit);
    display.innerText = globalResult;
    miniDisplay.innerText = displayText;
})


loadEventListenerToButtons();
loadEventListenerToButtonsOperator();




function operate(operator,num1,num2){
    let result = 0;
    switch (operator) {
        case "+":
            result = add(num1,num2);
            break;
        case "-":
            result = subtract(num1,num2);
            break;
        case "X":
            result = multiply(num1,num2);
            break;
        case "/":
            result = divide(num1,num2);
            break;
        default:
            break;
    }
    return result;
}

//load evenlistener

function loadEventListenerToButtonsOperator(){
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener('click',e =>{
            firstDigit = parseInt(display.innerText);
            operator = e.target.innerText;
            display.innerText = operator;
            displayText = `${firstDigit}${operator}`;
            miniDisplay.innerText = `${firstDigit}${operator}`;
            display.innerText = '';
            //doMath();
        })
        
    }
}

function loadEventListenerToButtons(){
    for (let i = 0; i < numbersButtons.length; i++) {
        numbersButtons[i].addEventListener('click',e =>{
            
            console.log(e.target.innerText);
            display.innerText += e.target.innerText;
            displayText += e.target.innerText;
            
        })
    }
}

//operation functions

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}