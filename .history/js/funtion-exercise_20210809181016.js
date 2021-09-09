// BT1: viết funtion so sanh 2 số a và b, tìm ra số lớn hơn
function compare(a, b) {
    if (a > b) {
        console.log(`số ${a} lớn hơn`);
    } else {
        console.log(`số ${b} lớn hơn`);
    }
}
compare(1, 3);

function compare1(c, d) {
    return Map.max(c, d);
}
compare1(1, 100);