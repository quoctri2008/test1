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

// Ternary Operator
const age = 18;
let message = "";
if (age >= 18) {
    console.log("you are a adult");
} else {
    console.log("you are children");
}

// condition ? true : false

let message2 = yourage >= 18 ? "you are a adult" : "you are children";