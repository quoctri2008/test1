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

// unshift -> thêm phần tử vào đầu mảng
console.log(student.unshift("long")); // 7
console.log(student); // ["long, "tri", "nam", "tuan", "truong", "tuan", "nhi"]

// pop -> xóa phần tử vào cuối mảng
console.log(student.pop()); // nhi
console.log(student); // ["long", "tri", "nam", "tuan", "truong", "tuan"]

// shift -> xóa phần tử vào đầu mảng
console.log(student.shift()); // long
console.log(student); // ["tri", "nam", "tuan", "truong", "tuan"]

//slice -> tạo ra mảng mới
const animals = ["tiger", "lion", "horse", "elephant"];
const animals2 = animals.splice(1); // 1 chạy đến end
const animals3 = animals.splice(2) // 1 chạy đến (3-1)
console.log(animals2); // ["lion", "horse", "elephant"]
// console.log(animals3); // ["lion", "horse"]