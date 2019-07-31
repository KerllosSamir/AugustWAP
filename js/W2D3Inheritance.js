/*jshint esversion: 6 */
const w2d2module = (function () {
        "use strict";

        /* runs test to see if expected argument is === to value returned by function2test argument */
        function myFunctionTest(expected, found) {
            if (JSON.stringify(expected) === JSON.stringify(found)) {
                return "TEST SUCCEEDED";
            } else {
                return "TEST FAILED.  Expected " + expected + " found " + found;
            }
        }

        /* this function accepts an array of strings that
        specifies a list of banned words. The function returns the string after removing all the
        banned words*/

        function filter(bannedArr) {
            let words = this.split(' ');
            return words.filter(elem => !bannedArr.includes(elem)).join(' ');
        }

        /*this method used to sort calling array using bubble sort algorithm*/
        function bubbleSort() {
            let swapp;
            let n = this.length-1;
            let x=this;
            do {
                swapp = false;
                for (let i=0; i < n; i++)
                {
                    if (x[i] > x[i+1])
                    {
                        var temp = x[i];
                        x[i] = x[i+1];
                        x[i+1] = temp;
                        swapp = true;
                    }
                }
                n--;
            } while (swapp);
            return x;
        }
        return {
            testMethod: myFunctionTest,
            filter: filter,
            bubbleSort:bubbleSort

        };
    }()
);

String.prototype.filter = w2d2module.filter;
console.log("Expected output of \"This house is not nice!\".filter(['not']) is : \"This house is nice!\" " + w2d2module.testMethod("This house is nice!", "This house is not nice!".filter(['not'])));
console.log();

Array.prototype.bubbleSort=w2d2module.bubbleSort;

console.log("Expected output of [6,4,0, 3,-2,1].bubbleSort() is : [-2, 0, 1, 3, 4, 6] " + w2d2module.testMethod([-2, 0, 1, 3, 4, 6], [6,4,0, 3,-2,1].bubbleSort()));
console.log();

