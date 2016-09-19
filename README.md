This is a collection of JavaScript applications from the JavaScript Foundations course at Hack University—the educational branch of Hack Oregon.

1_arguments.js contains a function that accepts any number of arguments, and console.logs anything but numbers when the function is called. It also returns an array of the square roots of any and all numbers that were passed in as arguments. Primarily, this was a way to practice using arguments—a special variable inherent to all JavaScript functions.This exercise uses the map() method to create a new array from any numbers passed into the accepter function while also applying the Math.sqrt() function to those numbers.

2_arrayCompare.js contains a function that determines whether given values are in a given array or not. The function takes in the array to test as it’s first parameter, and then any other parameters passed in are compared to see if they are in the array. This exercise practices passing various arguments into a function and accessing them through the special arguments variable.

3_dataStructures.js is an exercise in writing data structures. One for my simple online media routine and another that loosley mimics how the TriMet API is structured.

4_deepComparison.js contains a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual. This exercise practices the use of the typeof operator as well as a for...in loop to iterate through the properties of the object literal.

5_library.js is a function that prints what books have been read and haven’t been read given data in the form of an array of objects. This practices accessing specific data from a set of key-value pairs and assessing the values with a ternary operator. 

6_reverse.js contains two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method typically does: it modifies the array given as argument in order to reverse its elements. Neither of these methods use the standard reverse method.

7_sumOfaRange.js contains a range function, arrayMaker, that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.  The function also takes an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one. A second function, sumMaker, takes an array of numbers and returns their sum.

8_triMetConstructor.js contains a constructor function for TriMet vehicle objects. The prototype includes a property that gives us some basic information, a method that prints out the type, line, and location any of the vehicles and a method that moves the vehicles by updated their latitude and longitude. This exercise practices writing constructor functions and setting properties using "this" as well as additng prototype methods.

9_vectors.js contains a constructor, Vector, that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it saves to properties of the same name. The Vector prototype has two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ x and y values.

