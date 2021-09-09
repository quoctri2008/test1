const date = new Date();
console.log(date);

// Tue Aug 10 2021 18:09:27 GMT+0700 (Indochina Time) -> 10/08/2021
console.log(new Date("Tue Aug 10 2021 18:09:27 GMT+0700 (Indochina Time)").toLocaleDateString("vi-VI"));
const myTime = new Date("Tue Aug 10 2021 18:09:27 GMT+0700 (Indochina Time)");
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

// setTimeout vs setInterval
setTimeout(function() {
    console.log("2 giây sau xuất hiện");
}, 2000);

const timer = setInterval(function() {
    console.log("call me");
}, 1000);

clearInterval(timer);

// BT1: viết 1 chương trình nhập vào năm sinh, in ra số tuổi
const toYear = prompt("vui lòng nhập vào năm sinh");
const Year = parseInt(toYear);
// const nowDate = new Date();
// const nowYear = nowDate.getFullYear();
// console.log(nowYear);
console.log(Year);


// function toAge() {
//     if (Year !== "number") {
//         console.log("nhập vào không phải là số");
//         return;
//     } else {
//         console.log(` Số tuổi là ${nowYear} - ${Year}`);
//     }
// };
// toAge();
// BT2: viết 1 chương trình đêm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. Ví dụ thời gian
//      làm bài là 30phút nếu chạy về 0 là thông báo hết thời gian
// BT3: viết chương trình có tên là timeSince, đầu vào là thờ gian và tính thời gian đầu vào so với thời gian hiện tại
//      vd: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A `offline 3 phút`
//          `3 ngày trước`, `3 tháng`, `1 năm trước`

// BT1:
function getAge(Year) {

};