// loop: vòng lặp
//for
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
for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    result = result + str[i];
};
console.log(result);

// while(condition){}
// let numb = 1;
// while (numb < 10) {
//     console.log(`${numb} is less than 10`);
//     numb++;
// }

// do{

// }
// while(condition)
// let numb2 = 1;
// do {
//     console.log(`${numb2} is less than 10`);
//     numb2++;
// } while (numb2 < 10);

//for of:
// for (value of array) {}
let a = [];
for (let value of number) {
    value += 10;
    a.push(value);
};