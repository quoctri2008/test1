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