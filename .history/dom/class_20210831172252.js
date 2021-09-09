// selector.classList.add("class"): thêm class vào
const container = document.querySelector(".container1");
container.classList.add("is-active");

// selector.classList.removeclass: xóa class đi
container.classList.remove("container1");

// selector.classList.contains("class"): kiểm tra có chứa class không
console.log(container.classList.contains("container1"));

// selector.classList.toogle("class"): nếu có class ->remove ; chưa có -> add vào
container.classList.toggle("is-active");

// querySelector.className -> trả ra chuỗi các class của selector
const title = document.querySelector(".title");
console.log(title.className);

const card = document.createElement("div"); // tạo div
card.classList.add("card"); // add class card
body.appendChild(card); // hiển thị ra ngoài
const cardImg = document.createElement("img"); // tạo img
cardImg.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1629227314568-1625d48d4ac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=364&q=80"
); // tạo src
cardImg.setAttribute("class", "card-img"); // add class card-img vào img
card.appendChild(cardImg); //hien thi  cardImg trong card
