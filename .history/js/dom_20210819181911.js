// document.querySelector("selector")
// selector: .header, p, body, #heading
const singleNode = document.querySelector("h1");
console.log(singleNode);

// document.querySelectorAll -> trả về NodeList chứa danh sách các node, ko có trả về empty
//                              giống array ở chỗ có thể loop nhưng không thể push, pop, shift, unshift
const mutiNode = document.querySelectorAll(".item");
console.log(mutiNode);
