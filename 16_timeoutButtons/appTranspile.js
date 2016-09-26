// *
// ES2015 test
// *
"use strict"
function timeOutClick() {
    
    var buttonArray = document.getElementsByClassName("button");
    
    for (let i = 0; i<buttonArray.length; i++) {
            buttonArray[i].addEventListener("click", function() {
                setTimeout(function() {buttonArray[i].innerHTML = "Clicked!"}, (i+1)*1000);
            }) 
        }
};

timeOutClick();

