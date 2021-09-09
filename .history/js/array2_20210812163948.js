// sort -> sắp xếp mảng
const random = [1, 1000, 10, 5, 09];
console.log(random.sort()); // [1, 10, 1000, 5, 9]
const random2 = random.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(random2); // [1, 5, 9, 10, 1000]
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3); // [1, 5, 9, 10, 1000]
const random4 = random.sort((a, b) => a - b);
console.log(random4); // [1, 5, 9, 10, 1000]

// find -> trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const number = [5, 23, 9, 1, 7, 37];