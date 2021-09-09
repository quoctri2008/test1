// insertAdjacentText
const h3 = document.querySelector("h3");
// h3.insertAdjacentText ("position","text")
h3.insertAdjacentText("beforebegin", "1");
h3.insertAdjacentText("afterbegin", "2");
h3.insertAdjacentText("beforeend", "3");
h3.insertAdjacentText("afterend", "4");

const strong = document.createElement("strong");
strong.classList.add("bold");
