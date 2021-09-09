// BT1: đão ngược 1 chuỗi : vd:" my name is tri" -> "tri is my name"
// 1. kiem tra co nhap gi vao khong
// 2. chuyển string thành mảng
// 3. đảo ngược mảng
// 4. chuyển mảng thành string
function reverseString(str) {
    if (!str) return null;
    const arrStr = str.split(" ").reverse().join(" ");
    return arrStr;
};
console.log(reverseString("my name is tri"));

// BT2: đảo ngược chuỗi, bao gồm các kí tự : vd: "i love" ->" evol i"
// 1. kiem tra co nhap gi vao khong
// 2. chuyển string thành mảng
// 3. chuyển các mảng có nhiều kí tự thành 1 kí tự
// 4. đảo ngược mảng
// 5. chuyển mảng thành string
function reverseWord(str) {
    if (!str) return null;
    const arrStr = str.split(" ").map((item) => item.split("").reverse().join("")).reverse().join(" ");
    return arrStr;
};
console.log(reverseWord("i love"));

// BT3: in hoa chữ cái đầu trong chuỗi: vd: "my name is tri" -> "My Name Is Tri"
function Upper(str) {
    if (!str) return null;
    const upperStr = str.split(" ").map((item => item.to));
};
console.log(Upper("my name is tri"));