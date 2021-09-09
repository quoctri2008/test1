// document.querySelector("selector")
// selector: .header, p, body, #heading
const singleNode = document.querySelector("h1");
console.log(singleNode);

// document.querySelectorAll -> trả về NodeList chứa danh sách các node, ko có trả về empty
//                              giống array ở chỗ có thể loop (for) và sử dụng forEach nhưng không thể push, pop, shift, unshift
const mutiNode = document.querySelectorAll(".item");
console.log(mutiNode);

// document.getElementsByClassName("class") -> trả về HTMLCollection
const classNode = document.getElementsByClassName("container");
console.log(classNode);

// document.getElementsByTagName("tagname") -> trả về HTMLCollection
const tagNode = document.getElementsByTagName("h1");
console.log(tagNode);

// document.getElementById("id") -> trả về HTMLCollection
const idNode = document.getElementById("spiner");
console.log(idNode);
