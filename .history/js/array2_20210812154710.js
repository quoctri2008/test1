// sort -> sắp xếp mảng
const random = [1, 1000, 10, 5, 09];
console.log(random.sort()); // [1, 10, 1000, 5, 9]
const random2 = random.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(random2); // [1, 5, 9, 10, 1000]