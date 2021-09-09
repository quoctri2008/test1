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
function upper(word = "") {

}