const date = new Date();
console.log(date);

// Tue Aug 10 2021 18:09:27 GMT+0700 (Indochina Time) -> 10/08/2021
console.log(new Date("Tue Aug 10 2021 18:09:27 GMT+0700 (Indochina Time)").toLocaleDateString("vi-VI"));
const myTime = new Date("Tue Aug 10 2021 18:09:27 GMT+0700 (Indochina Time)");
const myDate = myTime.getDate();
const myMonth = myTime.getMonth();
const myYear = myTime.getFullYear();