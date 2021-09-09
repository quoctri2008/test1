const student = ["tri", "nam", "tuan", "truong", "tuan"];
// lấy giá trị index của mảng
console.log(student[0]); // tri

// chiều dài của mảng
console.log(student.length); // 4

// đảo ngược mảng
// console.log(student.reverse()); // ["tuan, "truong", "tuan", "nam", "tri"]

// nối các phần tử trong mảng thành chuỗi
console.log(student.join()); // tri,nam,tuan,truong,tuan
console.log(student.join("")); // trinamtuantruongtuan

//kiểm tra phần tử có trong chuỗi không, trả về true, false
console.log(student.includes("tri")); //true
console.log(student.includes("duy")); //false

// trả về vị trí đầu tiên tìm thấy trong mảng
console.log(student.indexOf("tuan")); //2

// trả về vị trí cuối cùng tìm thấy trong mảng
console.log(student.lastIndexOf("tuan")); //4