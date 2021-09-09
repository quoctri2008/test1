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

//Math.round(value): làm tròn gần nhất
console.log(Math.round(4.3)); // 4

//toFixed(number): lấy giá trị number chữ số sau dấu phẩy
console.log((1/3).toFixed(2));