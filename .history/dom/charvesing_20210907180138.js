// parentNode vs parentElement vs removeChild
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentElement);
// span.parentNode.removeChild(span);

const nextspn = span.nextElementSibling;
console.log(nextspn);
