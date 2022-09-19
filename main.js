//main object
let calcObj = {
    num1: undefined,
    num2: undefined,
    operator: undefined,
    total: undefined,
    totalRetured: false,
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
    const textBox = document.querySelector(".textArea");
    const history = document.querySelector(".history")
    const display = document.querySelector(".display");

    switch(calcObj.operator){
    case "+":
        calcObj.total=add(parseCorrectly(calcObj.num1),parseCorrectly(calcObj.num2));
        textBox.textContent=calcObj.total;
        history.innerHTML= history.innerHTML + "<br />" + display.textContent + " " + "=" + " " + textBox.textContent;
        calcObj.operator=undefined;
        calcObj.totalRetured = true;
        break;
    case "-":
        calcObj.total=subtract(parseCorrectly(calcObj.num1),parseCorrectly(calcObj.num2));
        textBox.textContent=calcObj.total;
        history.innerHTML= history.innerHTML + "<br />" + display.textContent + " " + "=" + " " + textBox.textContent;
        calcObj.operator=undefined;
        calcObj.totalRetured = true;
        break;
    case "x":
        calcObj.total=multiply(parseCorrectly(calcObj.num1),parseCorrectly(calcObj.num2));
        textBox.textContent=calcObj.total;
        history.innerHTML= history.innerHTML + "<br />" + display.textContent + " " + "=" + " " + textBox.textContent;
        calcObj.operator=undefined;
        calcObj.totalRetured = true;
        break;
    case "÷":
        calcObj.total=divide(parseCorrectly(calcObj.num1),parseCorrectly(calcObj.num2));
        textBox.textContent=calcObj.total;
        history.innerHTML= history.innerHTML + "<br />" + display.textContent + " " + "=" + " " + textBox.textContent;
        console.log(history.textContent);
        calcObj.operator=undefined;
        calcObj.totalRetured = true;
        break;
    }
}

//add function
function add(a,b){
    return a + b;
}

//subtract function
function subtract(a,b){
    return a-b;
}

//multiply function
function multiply(a,b){
    return a*b;
}

//divide function
function divide(a,b){
    return a/b;
}

//function for updating logic
function updateObject(){
    const textBox = document.querySelector(".textArea");
    if(calcObj.operator == undefined){
        calcObj.num1 = textBox.textContent;
    }
    else{
        calcObj.num2 = textBox.textContent;
    }
    
}


//function for parsing correctly
function parseCorrectly(toBeParsed){
    if(toBeParsed==""){
        return 0;
    }
    
    for (let i =0;i<toBeParsed.length;i++){
        if(toBeParsed[i]=="."){
            return parseFloat(toBeParsed);
        }
    }

    return parseInt(toBeParsed);
}

/*
--------------------------------------------------
Click/Key Press Key Operation functions
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
    if(textBox.textContent.length>0 && textBox.textContent[0]!="-"){
        textBox.textContent = "-" + textBox.textContent;
    }

    else if(textBox.textContent[0]==="-"){
        textBox.textContent = textBox.textContent.slice(1);
    }

}

//function to add number to text area via mouse click
function addNumberToTextAreaClick(e){
    const textBox = document.querySelector(".textArea");
    if(calcObj.totalRetured){
        textBox.textContent= "";
        calcObj.totalRetured = false;
    }
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
function addNumberToTextAreaKeyPress(numToAdd){
    const textBox = document.querySelector(".textArea");
    if(calcObj.totalRetured){
        textBox.textContent= "";
        calcObj.totalRetured = false;
    }
    switch(numToAdd){
        case "0":            
            if(textBox.textContent.length<9 && textBox.textContent.length > 0){
                textBox.textContent = textBox.textContent + numToAdd;
            }
            break;
        default:
            if(textBox.textContent.length<9){
                textBox.textContent = textBox.textContent + numToAdd;
            }            
}};

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


//function to add operator click
function updateOperatorClick(e){
    if(calcObj.num1!="" && calcObj.num1!= undefined){
    const textBox = document.querySelector(".textArea");
    const display = document.querySelector(".display");
    switch(e.target.textContent){
        case "÷":
            calcObj.operator = "÷";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
        case "x":
            calcObj.operator = "x";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
        case "-":
            calcObj.operator = "-";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
        case "+":
            calcObj.operator = "+";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
    }
    textBox.textContent = "";
}}

//function to add operator via keyboard
function updateOperatorKeyPress(keyPressed){
    if(calcObj.num1!=""&&calcObj.num1!=undefined){
    const textBox = document.querySelector(".textArea");
    const display = document.querySelector(".display");
    switch(keyPressed){       
        case "/":
            calcObj.operator = "÷";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
        case "*":
            calcObj.operator = "x";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
        case "-":
            calcObj.operator = "-";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
        case "+":
            calcObj.operator = "+";
            display.textContent = calcObj.num1 + " " + calcObj.operator;
            break;
    }
}
    textBox.textContent = "";
}


//function for equal click
function equalsClicked(){
    const display = document.querySelector(".display");
    if(calcObj.num1 != undefined && calcObj.num2 != "" && calcObj.operator!=undefined){
        display.textContent = display.textContent + " " + calcObj.num2;
        runCalculation();
    }
}


//Check Key Function
function checkKey(e){
    if (parseInt(e.key)>=0&&parseInt(e.key)<=9){
        addNumberToTextAreaKeyPress(e.key);
        updateObject();
    }
    if(e.key=="."){
        addPeriodToTextAreaClick();
        updateObject();
    }
    if(e.key==="+"||e.key==="-"||e.key==="/"||e.key==="*"){
        updateObject();
        updateOperatorKeyPress(e.key);
    }
    if(e.key==="Enter"||e.key==="="){
        equalsClicked();
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

//add event listener for period
const dotButton = document.querySelector(".dotButton");
dotButton.addEventListener('click', addPeriodToTextAreaClick);

//main window click event listener
document.addEventListener('click', updateObject);

//event listener for key strokes
window.addEventListener('keydown', checkKey)