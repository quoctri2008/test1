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
// setTimeout(function() {
//     console.log("2 giây sau xuất hiện");
// }, 2000);

// const timer = setInterval(function() {
//     console.log("call me");
// }, 1000);

// clearInterval(timer);

// BT1: viết 1 chương trình nhập vào năm sinh, in ra số tuổi
// const Year = prompt("vui lòng nhập vào năm sinh");

function toAge(Year = 0) {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const age = nowYear - Year;
    if (typeof Year !== "number") {
        console.log("nhập vào không phải là số");
    } else {
        console.log(`Số tuổi là ${age}`);
    }
};
toAge(2000);
// BT2: viết 1 chương trình đêm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. Ví dụ thời gian
//      làm bài là 0.1 phút nếu chạy về 0 là thông báo hết thời gian

// console.log(new Date());

// function countdown(minute = 0.1) {
//     let second = minute * 60;
//     let counter = 0;
//     const timer = setInterval(function() {
//         counter += 1;
//         console.log(counter);
//         if (counter === second) {
//             clearInterval(timer);
//             console.log("thời gian đã hết")
//         }
//     }, 1000);
// }
// countdown();

// BT3: viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại
//      vd: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A `offline 3 phút`
//          `3 ngày trước`, `3 tháng`, `1 năm trước`

console.log(new Date());

function timeSince(date) {
    // current time - date
    const now = new Date();
    const yourDate = new Date(date);
    const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
    console.log(seconds);
    let timer = seconds / 31536000; // 1 năm = 31536000
    if (timer > 1) {
        console.log(`${Math.floor(timer)} năm trước`);
        return;
    }
    timer = seconds / 2678400; // 1 tháng = 2678400
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tháng trước`);
        return;
    }
    timer = seconds / 604800; //1 tuần = 604800
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tuần trước`);
        return;
    }
    timer = seconds / 86400; // 1 ngày = 86400
    if (timer > 1) {
        console.log(`${Math.floor(timer)} ngày trước`);
        return;
    }
    timer = seconds / 3600; // 1 giờ = 3600
    if (timer > 1) {
        console.log(`${Math.floor(timer)} giờ trước`);
        return;
    }
    timer = seconds / 60; // 1 phút = 60
    if (timer > 1) {
        console.log(`${Math.floor(timer)} phút trước`);
        return;
    }
    timer = seconds;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} giây trước`);
    }
    return;
};
timeSince("Wed Aug 11 2021 16:55:36 GMT+0700 (Indochina Time)");