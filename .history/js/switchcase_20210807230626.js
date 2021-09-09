// switch, case
const fruit = "orange";
if (fruit === "apple") {
    console.log("i will eat apple");
}
if (fruit === "orange") {
    console.log("i will eat orange");
}
if (fruit === "lemon") {
    console.log("i will eat lemon");
}

switch (fruit) {
    case "apple":
        console.log("i will eat apple");
        break;
    case "orange":
    case "lemon":
        console.log("i will eat orange and lemon");
        break;
    default:
        console.log("i will no eat");
        break;
}

// vi du ve ternary operator: (2 dieu kien )
const age = 18;
let message = "";
if (age >= 18) {
    message = "you are adult";
} else {
    message = "you are children";
}
console.log(message);

// Ternary Operator
// condition ? true : false
const age1 = 17;
let message1 = age1 >= 18 ? "you are a adult" : "you are children";
console.log(message1);

// vi du ve ternary operator: (nhieu dieu kien ) 
const age2 = 15;
let message2 = "you are young boy";
if (age2 >= 18) {
    message2 = "you are adult";
} else if (age2 <= 10) {
    message2 = "you are children";
}
console.log(message2);

// condition ? true : false
const age3 = 19;
let message3 = age3 >= 18 ? "you are adult" : age3 <= 10 ? "you are children" : "you are young boy";
console.log(message3);