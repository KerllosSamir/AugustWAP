/*jshint esversion: 6 */

window.onload = function () {
    "use strict";
    console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
    console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));
    console.log("Expected output of reverse('Kerllos') is sollreK  " + myFunctionTest("sollreK", reverse("Kerllos")));
    console.log("Expected output of findLongestWord(['limon','orange']) is 6  " + myFunctionTest(6, findLongestWord(['limon', 'orange'])));
};

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    "use strict";
    if (JSON.stringify(expected) === JSON.stringify(found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/*sum() is a function that sums all the numbers in an array of numbers*/
function sum(arr) {
    "use strict";
    return arr.reduce(function (preVal, elem, i, array) {
        return preVal + elem;
    });
}


/*multiply() is a function that multiplies all the numbers in an array of numbers*/
function multiply(arr) {
    "use strict";
    return arr.reduce(function (preVal, elem, i, array) {
        return preVal * elem;
    });
}


/* function reverse() that computes the reversal of a string.*/
function reverse(str) {
    "use strict";
    let newStr;
    newStr = [];
    str.split('').forEach(function (char) {
        newStr.unshift(char);
    });
    return newStr.join('');
}


/*a function findLongestWord() that takes an array of words and returns the length of the longest one*/
function findLongestWord(arr) {
    "use strict";
    let longest = 0;
    arr.forEach(function (elem) {
        if (elem.length > longest) {
            longest = elem.length;
        }
    });
    return longest;
}


