"use strict"

//Pipe method
String.prototype.repeatify = String.prototype.repeatify || function(numberOfRepeats) {
   var output = '';

    for (var i = 0; i < numberOfRepeats; i++) {
      output += this;
    }
    return output;
};

console.log("YES GIVE ME MORE ".repeatify(5));


// ***************************
// My initial logic
// ***************************

// if (String.hasOwnProperty("Repeatify")){
//     console.log("That native method already exists!");
//     } else {
//         String.prototype.Repeatify = function(numberOfRepeats) {
//             var output = this;
//             for(var i = 1; i < numberOfRepeats; i++){
//                 output += this;
//             }
//           console.log(output);
//         }
//         "YES GIVE ME MORE ".Repeatify(5);
//     }