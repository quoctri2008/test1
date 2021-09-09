// them xóa sữa Node trong javascript
// document.createElement("element"): tạo ra Element trong javascript
const div = document.createElement("div");
// selector.appendChild : in ra ngoài
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);

div.classList.add("container");
