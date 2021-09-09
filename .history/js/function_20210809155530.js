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
}

logMyName();