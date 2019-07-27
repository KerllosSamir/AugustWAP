/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {

    if (JSON.stringify(expected) === JSON.stringify(found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/
function isVowel(char) {
    var vowels = "aeiou";
    if (vowels.indexOf(char.toLowerCase()) >= 0) {
        return true;
    }
    return false;
}

console.log("Expected output of isVowel(\"a\") is true  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel(\"b\") is false  " + myFunctionTest(false, isVowel("b")));

/*sum() is a function that sums all the numbers in an array of numbers*/
function sum(arr) {
   var s=0;
   for(let i=0 ; i<arr.length; i++)
       s+=arr[i];
   return s;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));

/*multiply() is a function that multiplies all the numbers in an array of numbers*/
function multiply(arr) {
    var s=1;
    for(let i=0 ; i<arr.length; i++)
        s*=arr[i];
    return s;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

/* function reverse() that computes the reversal of a string.*/
function reverse(str) {
    var newStr = "";
    for (let i = str.length - 1; i >= 0; i--)
        newStr += str.charAt(i);
    return newStr;
}

console.log("Expected output of reverse(Kerllos) is sollreK  " + myFunctionTest("sollreK", reverse("Kerllos")));

/*a function findLongestWord() that takes an array of words and returns the length of the longest one*/
function findLongestWord(arr) {
    var longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }

    return longest;
}

console.log("Expected output of findLongestWord(['limon','orange']) is 6  " + myFunctionTest(6, findLongestWord(['limon', 'orange'])));

/*a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i*/
function filterLongWords(arr, i) {
   return arr.filter(function (elem) {
        return elem.length > i;
    });

}

console.log("Expected output of filterLongWords(['limon','orange'],5) is ['orange']  " + myFunctionTest(['orange'], filterLongWords(['limon', 'orange'], 5)));

/*a) multiply each element by 10;*/
function multiplyBy10(a) {
    return a.map(function (elem) {
        return elem * 10;
    })
}

console.log("Expected output of multiplyBy10([1,3,5,3,3]) is [10,30,50,30,30]  " + myFunctionTest([10, 30, 50, 30, 30], multiplyBy10([1, 3, 5, 3, 3])));

/*b) return array with all elements equal to 3;*/
function equalTo3(a) {
    return a.filter(function (elem) {
        return elem === 3;
    });
}

console.log("Expected output of equalTo3([1,3,5,3,3]) is [3,3,3]  " + myFunctionTest([3, 3, 3], equalTo3([1, 3, 5, 3, 3])));

/*c) return the product of all elements;*/
function product(a) {
    return a.reduce(function (preVal, elem) {
        return preVal * elem;
    });
}

console.log("Expected output of product([1,3,5,3,3]) is 135 " + myFunctionTest(135, product([1,3,5,3,3])));
