// them xóa sữa Node trong javascript
// document.createElement("element"): tạo ra Element trong javascript
const div = document.createElement("div");
// selector.appendChild : in ra ngoài
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);

div.classList.add("container");
div.className = "container wrapper";
div.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iusto velit fuga in molestiae perferendis porro quisquam tempora nostrum adipisci odit dignissimos rem expedita quam, explicabo sequi provident, aut saepe!";
div.innerHTML = `<div class="content"><h3></h3></div>`;
