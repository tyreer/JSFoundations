(function(exports) {
    
    "use strict"
   
    var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    exports.getMonthName = function(number) {
        return names[number-1];
    };
    
    exports.getMonthNumber = function(name) {
        return names.indexOf(name) + 1;
    };

//If loaded in broswer, use "this." or "window." in IIFE's final parenthesis
//If loaded in Node, use "global." 
})(global.monthName = {});

console.log(monthName.getMonthName(4));
console.log(monthName.getMonthNumber("May"));




