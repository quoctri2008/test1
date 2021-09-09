// selector.classList.add("class"): thêm class vào
const container = document.querySelector(".container1");
container.classList.add("is-active");

// selector.classList.removeclass: xáo class đi
container.classList.remove("container1");

// selector.classList.contains("class"): kiểm tra có chứa class không
console.log(container.classList.contains("container1"));

// selector.classList.toogle("class"): nếu có class ->remove ; chưa có -> add vào
container.classList.toggle("is-active");

// querySelector.className
