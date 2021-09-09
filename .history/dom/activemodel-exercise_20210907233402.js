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

const modal = document.querySelector(".modal");
// console.log(modal);
if (modal) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 2000);
}
