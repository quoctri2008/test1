// BT1: đão ngược 1 chuỗi : vd:" my name is tri" -> "tri is my name"
//1.kiem tra co nhap gi vao khong
function reverseString(str) {
    if (str !== "string") {
        console.log("not a string");
        return;
    } else {
        str.reverse();
    }
};
console.log(reverseString("my name is tri"));