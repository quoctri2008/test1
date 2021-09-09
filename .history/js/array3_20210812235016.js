// by value -> giá trị trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true

// by refereences -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

// JSON.stringify: convert giá trị sang string
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // true

// JSON.parse: convert giá trị từ string sang lại

// clone
const student = ["tri", "nam", "truong", "hung"];
// C1: sử dụng slice()
const sliceStudent = student.slice();
console.log(student);