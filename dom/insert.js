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

// element.insertAdjacentText("position", strong)
const template = `<ul class="menu">
      <li></li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>5</li>
 </ul>`;
document.body.insertAdjacentHTML("beforeend", template);
