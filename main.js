//main object
let calcObj = {
    num1: undefined,
    num2: undefined,
    operator: undefined,
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
//just deletes the text area
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


//function to add number to text area via keyboard press


//function to add operator



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
swapPosNegButton.addEventListener('click',swapPosNeg)

//add event listener for operators

//add event listener for equals

//add event listener for numeric keys

//add event listener for period





//useful snippets for later
//console.log(textBox.textContent.length);