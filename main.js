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


//add function


//subtract function


//multiply function


//divide function




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
    textBox.innerHTML = "";
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


//add event listener for equals

//add event listener for numeric keys

//add event listener for period

//add event listener for period
const dotButton = document.querySelector(".dotButton");
dotButton.addEventListener('click', addPeriodToTextAreaClick);


//main window click event listener
document.addEventListener('click', updateObject);
//useful snippets for later
//console.log(textBox.textContent.length);