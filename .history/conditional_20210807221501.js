// Điều kiện: if (condition){
//     code
// }
const rich = false;
const money = 100;
if (rich) {
    console.log("i will buy home");
} else if (money > 1000) {
    console.log("i will save money");
} else {
    console.log("i am poor");
}

// alert: hiện thông báo
// alert("hello work");

// prompt: hiện nhập giá trị
// const yourname = prompt("vui long nhap ten cua ban");
// console.log(yourname);

// confirm: form xác nhận -> true hoặc false
const yourMoney = confirm("co phai tien cua ban hay khong");
console.log(yourMoney);

// BT1: nhập vào số tuổi nếu >= 18 thì được coi phim rạp ngược lại không được coi
const age = prompt("nhập vào số tuổi");
if (age >= 18) {
    console.log("được coi film rạp");
} else {
    console.log("không được coi film");
}