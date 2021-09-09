// function funtionName (parameters) {
//     code
// }
function sum(a = 0, b = 0) {
    const total = a + b;
    return total;
}

console.log(sum(10, 24));

// anomymous funtion (funtion expression): không bị Hoisting
const logName = function() {
    console.log("my name is Tri");
}
logName();

// IIFE 
(function() {
    console.log("this is IIFE function");
})();

// Global scope
let myName = "tri";

// function scope 
function logMyName() {
    let myName2 = "quoctri"
    console.log(myName2);
}

logMyName();

// Block scope
if (2 > 1) {
    let message = "hello Tri";
}

// lexical scope 
let learnName = "javascript";

function sayHello() {
    let message = "Hi";
    console.log(`${message} ${learnName}`);
}
sayHello();

// closure : function trong function, function bên trong truy xuất tới function bên ngoài
function sayHello2() {
    let message = "hi";

    function Hi() {
        console.log(message);
    }
    return Hi;
}
let hello = sayHello2();
hello();

function sayHello3(message) {
    return function hiName(name) {
        console.log(`${message} ${name}`);
    }
}
let hello3 = sayHello3("learn javascript");
hello3("HTLM CSS");