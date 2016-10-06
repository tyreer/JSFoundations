"use strict"

function reliableMultiply(a, b) {
  var e = new Error("Don't play youself");
  e.name = 'dontEverPlayYourself';

    function primitiveMultiply(a, b) {
      if (Math.random() < 0.5) {
        return (a * b);
      } else {
        throw e;
      }
    }
    
    try {
        return primitiveMultiply(a, b);
    } catch(error) {
        if (error.name === 'dontEverPlayYourself') {
          console.log("Error: " + error.message);
          return reliableMultiply(a, b);
        } else {
          console.log("This dumb error named " + error.name + " is not accepted.");
        }
  }
}

console.log(reliableMultiply(7, 8));

