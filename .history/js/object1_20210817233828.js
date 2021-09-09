const student = {
    name: "tri",
    age: 33,
    gender: "male",
};

// Object.keys() -> trả về 1 mảng chứa tất cả các keys của object
console.log(Object.keys(student)); // ["name", "age", "gender"]

// Object.values() -> trả về 1 mảng chứa các values của object
console.log(Object.values(student)); // ["tri", 33, "male"]

// Object.entries() -> trả về 1 mảng nested gồm keys, values vủa object
console.log(Object.entries(student)); // [["name", "tri"], ["age", 33], ["gender", "male"]]

// Object.assign() -> gộp nhiều object
const a = {
    firstName: "trương",
}
const b = {
    lastName: "tri",
}
console.log(Object.assign(a, b)); //{firstName: "trương", lastName: "tri"}
const c = {...a, ...b };
console.log(c); //{firstName: "trương", lastName: "tri"}

// Object.freeze -> đóng băng, ngăn chặn chỉnh sửa object ban đầu
const car = {
    brand: "BMW",
}