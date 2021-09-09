//const & let: const: giá trị duy nhất - let: có thể thay đổ giá trị

const number = 100;
console.log(number);
// number = 200;
// console.log(number);

let otherNumber = 300;
console.log(otherNumber);
otherNumber = 500;
console.log(otherNumber);

//Hoisting: khai báo biến chuyển lên trên cùng, const & let không bị hoisting

const title = "Hoc Javascript căn bản";
console.log(title);

var a = 300;
console.log(a);

//Data type: các kiểu dữ liệu: Number, string, Boolean, Undefined, Null


