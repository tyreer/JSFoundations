'use strict'

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log("Here's a running display of the accumulating sum: ");

var flattenedArrays = arrays.reduce(function(previousSum, currentlyReducing){
    console.log(previousSum);
    return previousSum.concat(currentlyReducing);
}, []);

console.log("And here's our flattened array:");
console.log(flattenedArrays);