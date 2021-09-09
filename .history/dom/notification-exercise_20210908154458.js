// Viết 1 function tạo ra thông báo
function createNotifiction() {
  const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-img" />
    <div class="noti-content">
      <h3 class="noti-title">Welcome to notification</h3>
      <p class="noti-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eos
        temporibus ea accusamus
      </p>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
// createNotifiction();
const timer = setInterval(() => {
  const item = document.querySelector(".noti");
  if (item) {
    item.parentNode.removeChild(item);
  }
  createNotifiction();
}, 8000);
