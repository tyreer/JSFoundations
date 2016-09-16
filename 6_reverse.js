"use strict"

var arrayValue = [1, 2, 3, 4];

function reverseArray(inputArray) {
   var outputArray=[];
    for (var i = 0; i < inputArray.length; i++){
        outputArray[i] = inputArray[(inputArray.length-1-i)];
    }
    return outputArray;
}

function reverseArrayInPlace(inputArray) {
    for (var i = 0; i < inputArray.length/2; i++){
        var holdBegin = inputArray[i];
        var holdEnd = inputArray[inputArray.length-1-i];
        
        inputArray[i] = holdEnd;
        inputArray[inputArray.length-1-i] = holdBegin;
    }
    return inputArray;
}

console.log(reverseArrayInPlace(arrayValue));