This is a collection of JavaScript applications from the JavaScript Foundations course at Hack University—the educational branch of Hack Oregon.

1_arguments.js contains a function that accepts any number of arguments, and console.logs anything but numbers when the function is called. It also returns an array of the square roots of any and all numbers that were passed in as arguments. Primarily, this was a way to practice using arguments—a special variable inherent to all JavaScript functions.This exercise uses the map() method to create a new array from any numbers passed into the accepter function while also applying the Math.sqrt() function to those numbers.

2_arrayCompare.js contains a function that determines whether given values are in a given array or not. The function takes in the array to test as it’s first parameter, and then any other parameters passed in are compared to see if they are in the array. This exercise practices passing various arguments into a function and accessing them through the special arguments variable.

3_dataStructures.js is an exercise in writing data structures. One for my simple online media routine and another that loosely mimics how the TriMet API is structured.

4_deepComparison.js contains a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual. This exercise practices the use of the typeof operator as well as a for...in loop to iterate through the properties of the object literal.

5_library.js is a function that prints what books have been read and haven’t been read given data in the form of an array of objects. This practices accessing specific data from a set of key-value pairs and assessing the values with a ternary operator. 

6_reverse.js contains two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method typically does: it modifies the array given as argument in order to reverse its elements. Neither of these methods use the standard reverse method.

7_sumOfaRange.js contains a range function, arrayMaker, that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.  The function also takes an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one. A second function, sumMaker, takes an array of numbers and returns their sum.

8_triMetConstructor.js contains a constructor function for TriMet vehicle objects. The prototype includes a property that gives us some basic information, a method that prints out the type, line, and location any of the vehicles and a method that moves the vehicles by updated their latitude and longitude. This exercise practices writing constructor functions and setting properties using "this" as well as adding prototype methods.

9_vectors.js contains a constructor, Vector, that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it saves to properties of the same name. The Vector prototype has two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ x and y values.

10_nativeMethod.js is an exercise in adding a new native method that any string can use. While this is NOT a good idea in the real world, it is an insightful illustration of inheritance chains leading back to types. The Repeatify function on the String object accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified. The application also tests whether the Repeatify function already exists before creating it to model avoiding overwriting a built-in method like "length". See also: https://www.sitepoint.com/5-typical-javascript-interview-exercises/

11_personStudentInialize.js contains three constructor functions (Person, Student, Teacher) and uses the "call" method to chain the constructors. The initialize method is included to avoid passing name and age paratemers between prototypes. 

12_monthNames.js is an exercise in using a module design pattern. It contains a simple module that can convert month numbers to names and can convert names back to numbers. The module has its own namespace since it needs an internal array of month names and uses plain JavaScript, without any module loader system. Worth noting that the month numbers are not zero-based, as in the Date type.

13_phoneModule.js is another exercise in the module design pattern. I wrapped the code of a previous phone purchasing exercise in a module and exposed the various helper functions as methods to create a basic JavaScript library for this application.

14_classToolbox.js is again a practice in the module design pattern. It contains a little library for some of the various functions created in class, such as isEven, isPrime, and min.

15_ajax contains several files used for AJAX requests practice. app.js is the first iteration. It includes three AJAX requests for text, HTML and JSON data. appHTMLDom.js is the second iteration refactored to breaks out a helper function for the XMLHttpRequest code. While this would all commonly be done using jQuery, the focus of this course was vanilla JavaScript and excluded jQuery.

16_timeoutButtons is an exercise in creating closure by using an IIFE within a for loop to assign each button a timeout value.

17_eloquentJS_Rainbow contains an exercise in content negotiation within an HTTP request. The URL eloquentjavascript.net/author is configured to respond with either plaintext, HTML, or JSON, depending on what the client asks for. This application sends a request to fetch each of the various formats of the resource. It uses the setRequestHeader method of the XMLHttpRequest object to set the header named Accept to one of the media types and includes easter egg media type application/rainbows+unicorns.

18_ReliableMultiply contains two JavaScript apps that wrap an intentionally error prone function, primitiveMultiply, and run it until a call succeeds, after which they return the result. reliableMultiplyCustom is a practice in creating a new type of error rather than throwing a generic error. Both apps utilize try...catch as an error handling technique.

19_flatten uses the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.