"use strict"

function arrayMaker(start, end) {
    var arrayMade =[];
    
    //Set default step value
    var step = 1;
    
    //Reasign step value if the optional third argument is present
    if (arguments[2]) {
        step = Math.abs(arguments[2]);
    }
    
    if (start < end){
        for (var i=start; i<=end ; i+=step){
            arrayMade.push(i);
        }
    } else {
        for (var i=start; i>=end ; i-=step){
            arrayMade.push(i);
        }
    }
    return arrayMade;
}

function sumMaker(arrayToSum){
    var sum=0;
    for(var i = 0; i<arrayToSum.length; i++) {
       sum += arrayToSum[i]; 
    }
    return sum;
}

console.log(sumMaker(arrayMaker(1,10)));
console.log(arrayMaker(10, 2));