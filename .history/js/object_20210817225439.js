// Object litteral 
const newObj = {};

// Object constructor 
const objConstructor = new Object();
const student = {
    name: "tri",
    age: 33,
    male: true,
    hi: function() {
        console.log("javascipt"); // method
    },
};
console.log(student.name); // tri -> cách 1 lấy value
console.log(student["age"]); // 33 -> cách 2 lấy value

//thay đổi giá trị, thêm giá trị, xóa giá trị
student.name = "vuong"; // thay đổi value
student.work = "it"; //thêm mới
delete student.male;

console.log(student);