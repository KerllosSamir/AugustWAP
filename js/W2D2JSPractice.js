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

    /*this method used to build up a list structure from an array  {value: 10, rest: {value: 20, rest: null}}*/
    let list = function () {
        return {
            value: null,
            rest: null,
        };
    };

    function arrayToList(arr) {
        let linkedList = list();
        linkedList.value = arr[0];
        linkedList.rest = list();
        let node = linkedList.rest;
        for (let i = 1; i < arr.length; i++) {
            node.value = arr[i];
            if (i !== arr.length - 1) {
                node.rest = list();
                node = node.rest;
            }
        }
        return linkedList;
    }

    function listToArray(list) {
        let arr = [];

        while (list) {
            arr.push(list.value);
            list = list.rest;
        }
        return arr;
    }

    function nth(list, index) {
        while (index > 0) {
            index--;
            list = list.rest;
        }
        return list.value;
    }

    function prepend(val, next) {
        let linkedList = list();
        linkedList.value = val;
        if (next)
        {
            linkedList.rest = list();
            linkedList.rest = next;
        }

        return linkedList;
    }

    return {
        testMethod: myFunctionTest,
        reverseArray: reverseArray,
        reverseArrayInPlace: reverseArrayInPlace,
        deepEqual: deepEqual,
        arrayToList: arrayToList,
        listToArray: listToArray,
        nth: nth,
        prepend:prepend

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
console.log("Expected output of deepEqual(obj, {here: 1, object: 2}) is false " + module.testMethod(false, module.deepEqual(obj, {
    here: 1,
    object: 2
})));
console.log("Expected output of deepEqual(obj, {here: {is: \"an\"}, object: 2}) is true " + module.testMethod(true, module.deepEqual(obj, {
    here: {is: "an"},
    object: 2
})));
console.log('');
//{"value":1,"rest":{"value":2,"rest":{"value":3,"rest":{"value":4,"rest":{"value":0,"rest":null}}}}}
console.log("Expected output of arrayToList([1, 2, 3, 4]) is {\"value\":1,\"rest\":{\"value\":2,\"rest\":{\"value\":3,\"rest\":{\"value\":4,\"rest\":{\"value\":0,\"rest\":null}}}}} ");
console.log(JSON.stringify(module.arrayToList([1, 2, 3, 4])));

console.log('');
console.log('value of this call : listToArray(arrayToList([10, 20, 30]))');
console.log(module.listToArray(module.arrayToList([10, 20, 30])));

console.log('');
console.log('value of this call : nth(arrayToList([10, 20, 30]), 1)');
console.log(module.nth(module.arrayToList([10, 20, 30]), 1));

console.log('');
console.log('value of this call : prepend(10, prepend(20, null))');
console.log(JSON.stringify(module.prepend(10, module.prepend(20, null))));