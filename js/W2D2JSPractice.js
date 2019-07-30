/*jshint esversion: 6 */
const module = (function () {
    "use strict";

    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (JSON.stringify(expected) === JSON.stringify(found)) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

    /*this method takes an array as argument and produces a new array that has the same elements in the inverse order. */
    function reverseArray(arr) {
        let newArr = [];
        arr.forEach(ele => newArr.unshift(ele));
        return newArr;
    }

    /*this method modifies the array given as argument by reversing its elements. */
    function reverseArrayInPlace(arr) {
        for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
            let el = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = el;
        }
    }

    /*t this method akes two values and returns true only if they are the same value or are objects with the same properties*/
    function deepEqual(obj1, obj2) {
        if (obj1 && obj2 && typeof obj1 === "object" && typeof obj2 === "object") {
            for (let key in obj1) {
                return true && deepEqual(obj1[key], obj2[key]);
            }
        } else if (obj1 && obj2 && typeof obj1 !== "object" && typeof obj2 !== "object") {
            return obj2 === obj2;
        } else {
            return false;
        }
    }

    return {
        testMethod: myFunctionTest,
        reverseArray: reverseArray,
        reverseArrayInPlace: reverseArrayInPlace,
        deepEqual:deepEqual
    };

})();


const revArr = module.reverseArray(['a', 'b', 'c']);
console.log("Expected output of reverseArray(['a','b','c']) is ['c','b','a']  " + module.testMethod(['c', 'b', 'a'], revArr));

let arrayToRevese = [1, 2, 3, 4, 5, 6];
module.reverseArrayInPlace(arrayToRevese);
console.log("Expected output of reverseArrayInPlace([1, 2, 3, 4, 5, 6]) is [6,5,4,3,2,1]  " + module.testMethod([6, 5, 4, 3, 2, 1], arrayToRevese));

let obj = {here: {is: "an"}, object: 2};
console.log('obj = {here: {is: "an"}, object: 2}');
console.log("Expected output of deepEqual(obj, obj) is true " + module.testMethod(true, module.deepEqual(obj, obj)));
console.log("Expected output of deepEqual(obj, {here: 1, object: 2}) is false " + module.testMethod(false, module.deepEqual(obj, {here: 1, object: 2})));
console.log("Expected output of deepEqual(obj, {here: {is: \"an\"}, object: 2}) is true " + module.testMethod(true, module.deepEqual(obj, {here: {is: "an"}, object: 2})));
