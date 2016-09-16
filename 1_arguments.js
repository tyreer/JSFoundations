"use strict"

function accepter() {
    var returnArray=[];
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])){
            console.log(arguments[i]);
        } else {
            returnArray.push(arguments[i]);
        }
    }
    var roots = returnArray.map(Math.sqrt);
    return roots;
}

accepter("a", 25, 16, "b");