// parentNode vs parentElement vs removeChild
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentElement);
// span.parentNode.removeChild(span);

// Element.extElementSibling: chọn phần tử sau đó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);

// Element.previousElementSibling: chọn phần tử trước đó
const previousLink = span.previousElementSibling;
console.log(previousLink);
