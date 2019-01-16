/*********************************************
                FORM VERIF
*********************************************/

/////////////////////////////////////////////
//                 SETUP                   //
/////////////////////////////////////////////

let inputEmail = document.getElementById("email");
let inputPass = document.getElementById("password");
let btn = document.getElementById("button");
let errorsSpace = document.getElementById("errors");
let regexEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/; 
let regexPassNum = /[0-9]+/;
let regexPassUpper = /[A-Z]+/;
let regexPassLower = /[a-z]+/;
let errorsArray = [];
let errorAlreadyExist = false;
let baseUrl = "http://localhost:8888/deck_mtg/dist/";

const displayErrors = function (e) {
    if (document.getElementsByTagName("p").length) 
        while (errorsSpace.firstChild) errorsSpace.removeChild(errorsSpace.firstChild);
    if (errorsArray.length) {
        e.preventDefault();
        errorsArray.forEach(function(error) {
            let newRowError = document.createElement("p");
            let newError    = document.createTextNode(error);
            newRowError.appendChild(newError);
            errorsSpace.appendChild(newRowError);
        });
        let newRowError = document.createElement("p");
        let newError    = document.createTextNode("¯\\_(ツ)_/¯");
        newRowError.appendChild(newError);
        errorsSpace.appendChild(newRowError);
    }
}

const verifEmail = function (inputEmail) {
    let inputValue = inputEmail.value;
    if (!regexEmail.test(inputValue))     errorsArray.push("Email not valid.");
};

const verifPass = function (inputPass) {
    let inputValue = inputPass.value;
    if (!regexPassLower.test(inputValue)) errorsArray.push("Password must contain lowercase.");
    if (!regexPassUpper.test(inputValue)) errorsArray.push("Password must contain uppercase.");
    if (!regexPassNum.test(inputValue))   errorsArray.push("Password must contain number.");
};


/////////////////////////////////////////////
//             CODE EXECUTED               //
/////////////////////////////////////////////

btn.addEventListener("click", (e) => {
    console.log(e);
    errorsArray.length = 0;
    verifEmail(inputEmail);
    verifPass(inputPass);
    displayErrors(e);
});