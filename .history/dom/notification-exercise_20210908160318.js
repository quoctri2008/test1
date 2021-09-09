// Viết 1 function tạo ra thông báo
function createNotifiction(title = "Welcome to notification") {
  const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-img" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eos
        temporibus ea accusamus
      </p>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
const randomData = [
  "Welcome to JavaScript",
  "My name is Tri",
  "I am Frontend Developer",
  "Today is good day",
];
const timer = setInterval(() => {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  //   const randomTitle = randomData[Math.floor(Math.random() * randomData.length)];
  createNotifiction();
}, 5000);
