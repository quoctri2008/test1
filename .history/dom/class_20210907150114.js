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

// tạo ra HTML như file minh họa
//  <div class="card">
//  <img src="https://images.unsplash.com/photo-1629227314568-1625d48d4ac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=364&q=80" alt="" class="card-img">
//  </div>
