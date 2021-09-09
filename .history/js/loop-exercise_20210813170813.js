// BT1: Cho 1 mảng gồm nhiều giá trị [1, 100, false, null, "tri", null, undefined, "javascript", [1, 2, 3], NaN]
//      viết chương trình loại bỏ falsy ra khoải mảng, chỉ giữ lại giá trị truthy.(gợi ý falsy là 0 , null, undefined, false ,"", NaN)
const array1 = [1, 100, false, null, "tri", null, undefined, "javascript", [1, 2, 3]];
//Boolean
const filterTruthy = array1.filter(Boolean);
console.log(filterTruthy);

// BT2: Cho 1 mảng phức tạp [[1, 2, 3, [false,null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]]
//      và kết quả mong muốn là [1, 2, 3, flase,null, 1, 5, 6, javascript, 888, 666, 90]
const array2 = [
    [1, 2, 3, [false, null]],
    [1, 5, 6, ["javascript"]],
    [888, 666, [90]]
];
const result2 = array2.flat(2);
console.log(result2);

// BT2: đảo ngược số nguyên. vd: 123 -> 321 , -567 -> -765
// 1. chuyển thành string
// 2. split("") -> []
// 3. reverse
// 4. join("")
// 5. chuyển thành number
// 5. Math.sign để giá trị âm cũng thay đổi
function reverseNumber(number) {
    const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(value);
};
reverseNumber(-123);

// BT3: Viết 1 chương trình tên là fizzBuzz với đầu vào là 1 số nguyên, cho chạy từ 1 tới số nguyên đó
//      nếu số chia hết cho 2 thì in ra chữ "fizz", chia hết 3 in ra "Buzz", chia hết 2 và 3 in ra "fizzBuzz"
function fizzBuzz(number) {
    if (!number) return null;
    // if (number !== "number") {
    //     console.log("not a number");
    // }
    for (let i = 1; i < number; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(`${i} fizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} fizz)`;
            }
            else if (i % 2 === 0) {
                console.log(`${i} Buzz`);
            }
        }
    };
    fizzBuzz(12);