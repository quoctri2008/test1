// parentNode vs parentElement vs removeChild
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentElement);
// span.parentNode.removeChild(span);

const nextSpan = span.nextElementSibling;
console.log(nextSpan);
