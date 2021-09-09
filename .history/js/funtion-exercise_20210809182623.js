// BT1: viết funtion so sanh 2 số a và b, tìm ra số lớn hơn
function compare(a = 0, b = 0) {
    if (a > b) {
        console.log(`số ${a} lớn hơn`);
    } else {
        console.log(`số ${b} lớn hơn`);
    }
}
compare(1, 3);

function compare1(c = 0, d = 0) {
    if (typeof c !== "number" || typeof d !== "number") {
        console.log("không phải là số");
        return;
    }
    return Math.max(c, d);
}
console.log(compare1("10"));

// BT2: in hoa chữ cái đầu tiên trong chữ vd: tuấn -> Tuấn, NAM -> Nam
// kiểm tra xem có nhập kí tự nào không
function upper(word = "") {
    if (word.length === 0) {
        return null;
    }
    // chuyển thành chữ in thường
    // let newword = word.toLowerCase();
    // console.log(newword);
    // chuyễn chữ cái đầu tiên in Hoa: charAt(index)
    let newword = word.toLowerCase().charAt(0).toUpperCase();
    console.log(newword);
    // slice(start index, end index) 
}
upper("NAM");