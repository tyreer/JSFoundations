"use strict"

var arrayValue = [1, 2, 3, 4];

function comparer () {
    var testArray = arguments[0];
    for (var x = 1; x < arguments.length; x++){
            if(testArray.indexOf(arguments[x]) !== -1){
                console.log(arguments[x] + " is in this array.");
            }
    }
}

comparer(arrayValue, 2, 3); //HERE HERE because 2 and 3 are in arrayValue

