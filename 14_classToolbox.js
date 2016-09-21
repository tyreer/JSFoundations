(function(exports) {
   
    "use strict"
    //Define module-level variables
    var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    //Month functions    
    exports.getMonthName = function(number) {return names[number-1];};
        
    exports.getMonthNumber = function(name) {return names.indexOf(name) + 1;};
   
    //min
    exports.min = function (first, second) {return first<second ? first : second;}
    
    //Prime
    exports.isPrime = function(number) {
        if (number < 2) return false;
        
        for (var i=2; i<number; i++){
                if (number%i === 0) {
                    return false;
                }
            } 
            return true;
    }

    //isEven
    exports.isEven = function(number) {
        number = Math.abs(number);
        
        if (number === 1) return false;
        else if (number === 0) return true;
       
        else {
            number -= 2;
            return this.isEven(number);
        }
    }
        
})(global.classToolbox = {});

console.log(classToolbox.isEven(5));