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
// 1-kiểm tra xem có nhập kí tự nào không : word.length === 0
// 2-lấy kí tự đầu chuyển thành chữ in Hoa : .charAt(0).toUpperCase
// 3-lấy các kí tự sau: slice(1)
function upper(word = "") {
    if (word.length === 0) {
        return null;
    }
    let newword = word.toLowerCase().charAt(0).toUpperCase();
    let otherword = word.toLowerCase().slice(1);
    return `${newword}${otherword}`
}
console.log(upper("tri"));

// BT3: viết hàm có sử dụng callback (function là parameter của function khác)
// in ra kết quả của hàm compare đã viết sẵn