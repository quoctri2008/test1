// element.insertAdjacentText ("position","text")
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "1");
h3.insertAdjacentText("afterbegin", "2");
h3.insertAdjacentText("beforeend", "3");
h3.insertAdjacentText("afterend", "4");

// element.insertAdjacentElement("position", element)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// element.insertAdjacentText("beforeend", strong)
