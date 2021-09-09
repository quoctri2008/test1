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
const template = `<ul>
      <li class="item item1">item1</li>
      <li class="item item2">item2</li>
      <li class="item item3">item3</li>
      <li class="item item4">item4</li>
      <li class="item item5">item5</li>
    </ul>`;
