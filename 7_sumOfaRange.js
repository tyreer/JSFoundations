"use strict"

function arrayMaker(start, end, step) {
    var arrayMade =[];
    if (start < end){
        for (var i=start; i<=end ; i += step){
            arrayMade.push(i);
        }
    } else {
        for (var i=start; i>=end ; i += step){
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

// console.log(sumMaker(arrayMaker(1,10)));
console.log(arrayMaker(5, 2, -1));