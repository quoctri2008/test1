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

// tạo ra HTML như file minh họa
const card = document.createElement("div");
card.classList.add("card");
const cardImg = document.createElement("img");
cardImg.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1629227314568-1625d48d4ac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=364&q=80"
);
card.appendChild(cardImg);
body.appendChild(card);
