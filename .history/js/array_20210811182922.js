const student = ["tri", "nam", "tuan", "truong", "tuan"];
// lấy giá trị index của mảng
console.log(student[0]); // tri

// chiều dài của mảng
console.log(student.length); // 5

// reverse -> đảo ngược mảng
// console.log(student.reverse()); // ["tuan, "truong", "tuan", "nam", "tri"]

// join -> nối các phần tử trong mảng thành chuỗi
console.log(student.join()); // tri,nam,tuan,truong,tuan
console.log(student.join("")); // trinamtuantruongtuan

// includes -> kiểm tra phần tử có trong chuỗi không, trả về true, false
console.log(student.includes("tri")); //true
console.log(student.includes("duy")); //false

// indexOf -> trả về vị trí đầu tiên tìm thấy trong mảng
console.log(student.indexOf("tuan")); //2

// lastIndexOf -> trả về vị trí cuối cùng tìm thấy trong mảng
console.log(student.lastIndexOf("tuan")); //4

// push -> thêm phần tử vào cuối mảng
console.log(student.push("nhi")); // 6
console.log(student); // ["tri", "nam", "tuan", "truong", "tuan", "nhi"]

// unshift -> thêm phần tử vào cuối mảng
console.log(student.unshift("long")); // 7
console.log(student); // ["long, "tri", "nam", "tuan", "truong", "tuan", "nhi"]