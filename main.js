//main object
let calcObj = {
    num1: undefined,
    num2: undefined,
    operator: undefined,
    total: undefined,
}



/*
--------------------------------------------------
Calcuator Operation functions
This section holds the mathmatical functions
--------------------------------------------------
*/

//main function to make calc work
//take two numbers and an opertaor 
//run correct calculation and return
function runCalculation(){
    alert("Test");
}

//add function


//subtract function


//multiply function


//divide function


//function for updating logic
function updateObject(){
    const textBox = document.querySelector(".textArea");
    const display = document.querySelector(".display");
    if(calcObj.operator == undefined){
        calcObj.num1 = textBox.textContent;
    }
    else{
        calcObj.num2 = textBox.textContent;
    }

    if(calcObj.operator != undefined){
        display.textContent = calcObj.num1 + " " + calcObj.operator;
    }
}


/*
--------------------------------------------------
Click/Mouse Key Operation functions
This section holds functions for each button
--------------------------------------------------
*/


//All clear function 
//clears operators and all numbers if necessary
function clearAll(){
    const textBox = document.querySelector(".textArea");
    const display = document.querySelector(".display");
    textBox.innerHTML = "";
    display.innerHTML = "";
    calcObj.num1 = undefined;
    calcObj.num2 = undefined;
    calcObj.operator = undefined;
}

//Clear function
function clearTextArea(){
    const textBox = document.querySelector(".textArea");
    textBox.innerHTML = "";
}

//swap positive negative 
function swapPosNeg(){
    const textBox = document.querySelector(".textArea");
    if(textBox.textContent.length>1 && textBox.textContent[0]!="-"){
        textBox.textContent = "-" + textBox.textContent;
    }

    else if(textBox.textContent[0]==="-"){
        textBox.textContent = textBox.textContent.slice(1);
    }

}

//function to add number to text area via mouse click
function addNumberToTextAreaClick(e){
    const textBox = document.querySelector(".textArea");
    switch(e.target.textContent){
        case "0":            
            if(textBox.textContent.length<9 && textBox.textContent.length > 0){
                textBox.textContent = textBox.textContent + e.target.textContent;
            }
            break;
        default:
            if(textBox.textContent.length<9){
                textBox.textContent = textBox.textContent + e.target.textContent;
            }            
}}

//function to add number to text area via keyboard press


//function to add period
function addPeriodToTextAreaClick(){
    let dotExists = false;
    const textBox = document.querySelector(".textArea");

    for (let i = 0; i<textBox.textContent.length; i++){
        if(textBox.textContent[i]=="."){
            dotExists = true;
        }
    }
    
    if(textBox.textContent.length<8 && !dotExists){
        textBox.textContent = textBox.textContent + ".";
    }

}

//function to add period via keyboard


//function to add operator
function updateOperatorClick(e){
    const textBox = document.querySelector(".textArea");
    switch(e.target.textContent){
        case "÷":
            calcObj.operator = "÷";
            break;
        case "x":
            calcObj.operator = "x";
            break;
        case "-":
            calcObj.operator = "-";
            break;
        case "+":
            calcObj.operator = "+";
            break;
    }
    textBox.textContent = "";
}


//function for equal click
function equalsClicked(){
    if(calcObj.num1 != undefined && calcObj.num2 != "" && calcObj.operator!=undefined){
        runCalculation();
    }
}

/*
--------------------------------------------------
Add Event Listeners
This section holds the logic for adding 
eventlisteners
--------------------------------------------------
*/


//Add event listners for All Clear
const allClearButton = document.querySelector("#allClear");
allClearButton.addEventListener('click', clearAll);

//Add event listener for single Clear
const textAreaClearButton = document.querySelector("#clear");
textAreaClearButton.addEventListener('click', clearTextArea);

//Add event listener for swap post/neg
const swapPosNegButton = document.querySelector("#swapPosNeg");
swapPosNegButton.addEventListener('click',swapPosNeg);

//add event listener for numeric click
const numberButtons = document.querySelectorAll(".numberButton");
numberButtons.forEach(numBtn => numBtn.addEventListener('click',addNumberToTextAreaClick));

//add event listener for operator buttons click
const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach(opBtn => opBtn.addEventListener('click', updateOperatorClick));


//add event listener for equals click
const equalButton = document.querySelector(".equalsButton");
equalButton.addEventListener('click', equalsClicked);

//add event listener for numeric keys

//add event listener for period

//add event listener for period
const dotButton = document.querySelector(".dotButton");
dotButton.addEventListener('click', addPeriodToTextAreaClick);


//main window click event listener
document.addEventListener('click', updateObject);
//useful snippets for later
//console.log(textBox.textContent.length);