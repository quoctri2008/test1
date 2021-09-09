// parentNode vs parentElement vs removeChild
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentElement);
// span.parentNode.removeChild(span);

// Element.extElementSibling: chọn phần tử dưới đó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);

// Element.previousElementSibling: chọn phần tử trên đó
const previousLink = span.previousElementSibling;
console.log(previousLink);

//childNodes: trả về hết các node bên trong
console.log(span.childNodes);

//children: trả về hết các node bên trong
console.log(span.children);
