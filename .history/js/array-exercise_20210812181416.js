// BT1: đão ngược 1 chuỗi : vd:" my name is tri" -> "tri is my name"
// 1. kiem tra co nhap gi vao khong
// 2. chuyển string thành mảng
// 3. đảo ngược mảng
// 4. chuyển mảng thành string
function reverseString(str) {
    if (!str) return null;
    const arrStr = str.split(" ").reverse().join("");
    console.log(arrStr);
};
console.log(reverseString("my name is tri"));