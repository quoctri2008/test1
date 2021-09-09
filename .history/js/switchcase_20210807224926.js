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