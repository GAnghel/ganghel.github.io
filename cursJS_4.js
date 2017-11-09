var numberOfBoxes = 0;
var requiredCredits = 40; //hardcode
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");
var sumOfCredits = 0;

init();

function init(){
    generateButton.addEventListener("click", generate);
    calculateButton.addEventListener("click", calculateCredits);
}


function createInputBox(elementID){
    var inputContainerElement = document.getElementById("inputContainer");

    var inputElement = document.createElement("input");
    inputElement.id = elementID;

    var labelElement = document.createElement("label");
    var text = document.createTextNode("Credit");
    labelElement.appendChild(text);
    labelElement.appendChild(inputElement);
    /*labelElement.htmlFor = elementID;

    document.body.insertBefore(document.createElement("NULL"),inputContainerElement);
    document.body.insertBefore(inputElement, inputContainerElement);
    document.body.insertBefore(labelElement, inputElement);*/

    inputContainerElement.appendChild(labelElement);
}

function createBoxes(numberOfBoxes) {
//console.log(numberOfBoxes);
    for (var i = 1; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBox("input" + i);
    }
}

function generate(){
    numberOfBoxes = document.getElementById("numberOfBoxes").value;
    createBoxes(numberOfBoxes);
}

function calculateCredits() {

    for(var i=1; i<=numberOfBoxes; i++){
        var inputElementValue = document.getElementById("input" + i).value;
        //console.log(inputElementValue);
        sumOfCredits += parseInt(inputElementValue);
    }

    console.log(sumOfCredits);
}