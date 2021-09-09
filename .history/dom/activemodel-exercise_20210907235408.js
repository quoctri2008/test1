/*
<div class="modal">
    <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
        <div class="modal-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          temporibus quis facere eius omnis asperiores, dolore eaque possimus
          totam ducimus alias assumenda, aspernatur quia saepe culpa illum,
          laudantium odio similique.
        </div>
        <div class="modal-action">
          <button class="modal-confirm">Confirm</button>
          <button class="modal-cancel">Cancel</button>
        </div>
    </div>
</div>
*/

// const template = `<div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
//   <div class="modal-desc">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
//     temporibus quis facere eius omnis asperiores, dolore eaque possimus
//     totam ducimus alias assumenda, aspernatur quia saepe culpa illum,
//     laudantium odio similique.
//   </div>
//   <div class="modal-action">
//     <button class="modal-confirm">Confirm</button>
//     <button class="modal-cancel">Cancel</button>
//   </div>
// </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

// const modal = document.querySelector(".modal");
// // console.log(modal);
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 2000);
// }

const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
const modalDesc = document.createElement("div");
modalDesc.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus reprehenderit placeat ea. Consequatur, facere maxime ex distinctio amet unde ad ducimus vero dicta deserunt sapiente, aliquam dolor expedita dolore.";
modalDesc.classList.add("modal-desc");
modalContent.appendChild(modalClose);
modalContent.appendChild(modalDesc);
modal.appendChild(modalContent);
document.body.appendChild(modal);
