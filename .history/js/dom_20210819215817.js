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

// document.getElementById("id") -> trả về 1 node
const idNode = document.getElementById("spiner");
console.log(idNode);

// Selector.getAttribute("attribute"): id, href, class, src, style
const link = document.querySelector(".link");
if (link) {
  console.log(link.getAttribute("href"));
}

const li = document.querySelectorAll(".item");
if (li) {
  li.forEach((item) => {
    console.log(item.getAttribute("class"));
  });
}
console.log(li);

// Selector.setAttribute("attribute", value): -> set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");
const listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => item.setAttribute("target", "_blank"));

// selector.remoteAttribute("attribute")
const p = document.querySelector("p");
p.removeAttribute("color");
