//chuyển từ string thành number
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); // 5
console.log(parseFloat(number2));  //4.8

// Math.abs: giá trị tuyệt đối
console.log(Math.abs(-10)); // 10

// Math.floor(value): làm tròn xuống
console.log(Math.floor(4.3)); // 4

// Math.ceil(value): làm tròn lên
console.log(Math.ceil(4.3)); // 5

// Math.round(value): làm tròn gần nhất
console.log(Math.round(4.3)); // 4

// Math.random : giá trị ngẫu nhiên từ 0-1
console.log(Math.random()); // 0.xxxx

// Math.max(): trả ra con số lớn nhất
console.log(Math.max(1, -5, 7, -2)); // 7

// Math.min(): trả ra con số bé nhất
console.log(Math.min(1, -5, 7, -2)); // -5

//Math.pow(a, b): a ^ b -> c 
console.log(Math.pow(3, 2)); // 9

// toFixed(number): lấy giá trị number chữ số sau dấu phẩy
console.log(parseFloat((1/3).toFixed(2)));

//NaN -> Not a Number
console.log(isNaN("this is number")); // true
console.log(isNaN("12345")); // false

//Number.isNaN
console.log(Number.isNaN("1435")) // false
console.log(Number.isNaN(NaN)) // true