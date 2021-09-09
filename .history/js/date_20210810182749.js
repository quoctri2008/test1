const date = new Date();
console.log(date);

// Tue Dec 10 2021 18:09:27 GMT+0700 (Indochina Time) -> 10/08/2021
console.log(new Date("Tue Dec 10 2021 18:09:27 GMT+0700 (Indochina Time)").toLocaleDateString("vi-VI"));
const myTime = new Date("Tue Dec 10 2021 18:09:27 GMT+0700 (Indochina Time)");
const myDate = myTime.getDate();
const myMonth = myTime.getMonth() + 1;
const myYear = myTime.getFullYear();
console.log(myDate, myMonth, myYear);


// Cach 1
function newdate() {
    if (myMonth <= 10) {
        console.log(`${myDate}/0${myMonth}/${myYear}`);
    } else {
        console.log(`${myDate}/${myMonth}/${myYear}`);
    }
}

newdate();

// Cach 2
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`)