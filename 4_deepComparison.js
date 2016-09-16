"use strict"

var obj = {here: {is: "an"}, object: 2};

function deepEqual (compareA, compareB) {
    if (typeof compareA !== typeof compareB || typeof compareA !== "object") {
        return false;
    } else {
        for (var prop in compareA) {
            if (typeof compareA[prop] === "object" && typeof compareB[prop] === "object") {
                deepEqual(compareA[prop], compareB[prop]);
            } else if (compareA[prop] !== compareB[prop]) {
                return false;
            }
        }
    }
    return true;
}

console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, {here: 1, object: 2})); // false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // true

console.log(deepEqual({a:1, b:2, c:3}, {a:1, b:2, c:3}));
