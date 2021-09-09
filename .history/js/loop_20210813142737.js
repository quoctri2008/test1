// loop: vòng lặp
const number = [1, 2, 3, 4, 5];
for (let i = 0; i < number.length; i++) {
    console.log(i);
};

// BT1: sao chép mảng dùng for
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const copyNumber = [];
for (let i = 0; i < number1.length; i++) {
    copyNumber.push(number1[i]);
};
console.log(copyNumber);
// BT2: đạo ngược từ: "i love" -> "evol i"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0, i--) {
    console.log(str[i]);
};