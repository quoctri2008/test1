// offset
const boxed = document.querySelector(".boxed");
console.log(boxed.offsetWidth); // độ rộng phần tử
console.log(boxed.offsetHeight); // chiều cao phần tử
console.log(boxed.offsetLeft); // vị trí của nó so với bên trái
console.log(boxed.offsetTop); // vị trí của nó so với phía trên
console.log(boxed.offsetParent); // lấy ra phần tử cha

// client
console.log(boxed.clientWidth); // độ rộng phần tử trừ đi border
console.log(boxed.clientHeight); // chiều cao phần tử trừ đi border
console.log(boxed.clientLeft); // vị trí nó so với bên trái border
console.log(boxed.clientTop); // vị trí nó so với phía trên border

//window
console.log(window.innerWidth);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
