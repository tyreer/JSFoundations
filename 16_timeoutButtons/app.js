"use strict"

timeOutClick();

function timeOutClick() {
    
    var buttonArray = document.getElementsByClassName("button");
    
    for (var i = 0; i<buttonArray.length; i++) {
        (function (j){
            buttonArray[j].addEventListener("click", function timerDelay() {
                setTimeout(function timerExecute() {
                    buttonArray[j].innerHTML = "Clicked!"}, (j+1)*1000);
                }); 
        })(i);
    };
};
