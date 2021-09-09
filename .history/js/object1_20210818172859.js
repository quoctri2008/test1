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
};
const b = {
  lastName: "tri",
};
console.log(Object.assign(a, b)); //{firstName: "trương", lastName: "tri"}
const c = { ...a, ...b };
console.log(c); //{firstName: "trương", lastName: "tri"}

// Object.freeze() -> đóng băng, ngăn chặn chỉnh sửa object ban đầu
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "audi";
console.log(newCar); // {brand: "BMW"}

// Object.seal() -> cho phép chỉnh sửa nhưng không được thêm key value mới
const study = {
  learn: "javascript",
};
const newStudy = Object.seal(study);
newStudy.learn = "HTML&CSS";
newStudy.name = "tri";
console.log(newStudy); // {learn: "HTML&CSS"}

// sao chép Object đơn giản: C1
const user = {
  userName: "tri",
};
const newUser = { ...user };
newUser.userName = "vuong";
console.log(user); // {userName: "tri"}
console.log(newUser); // {userName: "vuong"}

// sao chép Object đơn giản: C2
const newUser2 = Object.assign({}, user);
newUser2.userName = "truong";
console.log(newUser2); // {userName: "truong"}

//sao chép Object phức tạp
const profile = {
  userName: "tri",
  school: {
    name: "Arena",
    year: 2021,
    learn: {
      subject1: "photoshop",
      subject2: "AI",
      subject3: "indesign",
    },
  },
  // fullName: {
  //     name: "truong le quoc tri",
  // },
};

const newProfile = JSON.parse(JSON.stringify(profile));
newProfile.school.learn.subject3 = "javscipt";
console.log(profile);

// optional chaining
// nếu không có fullname
console.log(profile.fullName); // undefined
// console.log(profile.fullName.name) // undefined.name -> báo lỗi
// Cách 1: sử dụng if
if (profile.fullName) {
  if (profile.fullName.name) {
    console.log(profile.fullName.name);
  }
} // nếu không có fullname -> không ra      // nếu có full name.name -> "truong le quoc tri"

//Cách 2: sử dụng optional chaining
console.log(profile.fullName?.name);

// Destructuring
