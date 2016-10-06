"use strict"

function reliableMultiply(a, b) {

    function primitiveMultiply(a, b) {
      if (Math.random() < 0.5) {
        return (a * b);
      } else {
        throw new Error();
      }
    }
    
    try {
        return primitiveMultiply(a, b);
    } catch(error) {
       return reliableMultiply(a, b);
  }
}

console.log(reliableMultiply(7, 8));

