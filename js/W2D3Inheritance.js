/*jshint esversion: 6 */
const w2d3module = (function () {
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
            let n = this.length - 1;
            let x = this;
            do {
                swapp = false;
                for (let i = 0; i < n; i++) {
                    if (x[i] > x[i + 1]) {
                        var temp = x[i];
                        x[i] = x[i + 1];
                        x[i + 1] = temp;
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
            bubbleSort: bubbleSort

        };
    }()
);

String.prototype.filter = w2d3module.filter;
console.log("Expected output of \"This house is not nice!\".filter(['not']) is : \"This house is nice!\" " + w2d3module.testMethod("This house is nice!", "This house is not nice!".filter(['not'])));
console.log("");

Array.prototype.bubbleSort = w2d3module.bubbleSort;

console.log("Expected output of [6,4,0, 3,-2,1].bubbleSort() is : [-2, 0, 1, 3, 4, 6] " + w2d3module.testMethod([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort()));
console.log("");

const w2d3FunctionConstructor = (function () {
    "use strict";

    /*Person function constructor*/
    function Person(name, age) {
        this.name = name;
        this.age = age;

    }

    Person.prototype.hobby = "";
    Person.prototype.favoriteHobby = function () {
        return "My name is " + this.name + " and my hobby is " + this.hobby;
    }
    Person.prototype.species = "homosapien";

    function Teacher(name, age, subject) {
        this.subject = subject;
        return Person.call(this, name, age);
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.teach = function () {
        return this.name + " is now teaching " + this.subject;
    };

    function testInheritance() {
        let t1 = new Teacher("Prof. Kerllos", 45, "WAP");
        let t2 = new Teacher("Prof. Samir", 40, "MWA");
        t1.hobby = "Walking";
        t2.hobby = "Biking";
        console.log(t1.teach());
        console.log(t2.teach());
        console.log("");
        console.log(t1.favoriteHobby());
        console.log(t2.favoriteHobby());
    }

    return {
        testInheritance: testInheritance
    };
})();
console.log("=====Function Constructor=================================");
w2d3FunctionConstructor.testInheritance();
console.log("");

const w2d3CreateObjects = (function () {
    "use strict";
    const person = {
        name: "",
        age: 0,
        hobby: "",
        species: "homosapien",
        favoriteHobby: function () {
            return "My name is " + this.name + " and my hobby is " + this.hobby;
        }
    };

    function testInheritance() {
        const teacher1 = Object.create(person);
        teacher1.subject = "WAP";
        teacher1.name = "Prof. Kerllos";
        teacher1.teach = function () {
            return this.name + " is now teaching " + this.subject;
        };
        teacher1.hobby = "Walking";

        //==========================================
        const teacher2 = Object.create(person);
        teacher2.subject = "MWA";
        teacher2.name = "Prof. Samir";
        teacher2.teach = function () {
            return this.name + " is now teaching " + this.subject;
        };
        teacher2.hobby = "Biking";
        console.log(teacher1.teach());
        console.log(teacher2.teach());
        console.log("");
        console.log(teacher1.favoriteHobby());
        console.log(teacher2.favoriteHobby());
    }

    return {
        testInheritance: testInheritance
    };
})();
console.log("=====Create Objects=================================");
w2d3CreateObjects.testInheritance();
console.log("");

const w2d3ES6 = (function () {
    "use strict";

    class Person {
        constructor(name, age, hobby) {
            this.name = name;
            this.age = age;
            this.hobby = hobby;
            this.species = "homosapien";
        }

        favoriteHobby() {
            return "My name is " + this.name + " and my hobby is " + this.hobby;
        }
    }

    class Teacher extends Person {
        constructor(name, age, hobby, subject) {
            super(name, age, hobby);
            this.subject = subject;
        }

        teach() {
            return this.name + " is now teaching " + this.subject;
        }
    }

    function testInheritance() {
        const t1 = new Teacher("Prof. Kerllos", 45, "Walking", "WAP");
        const t2 = new Teacher("Prof. Samir", 40, "Biking", "MWA");
        console.log(t1.teach());
        console.log(t2.teach());
        console.log("");
        console.log(t1.favoriteHobby());
        console.log(t2.favoriteHobby());
    }

    return {
        testInheritance: testInheritance
    };
})();
console.log("=====ES6 class inheritance=================================");
w2d3ES6.testInheritance();
console.log("");