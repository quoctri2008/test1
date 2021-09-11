const loading = document.getElementById("loading");
loading.style.display = "block";
// console.log(loading);
let listUser = [];
fetch("https://tony-json-server.herokuapp.com/api/users")
  .then((response) => response.json())
  .then((res) => {
    localStorage.setItem("email", JSON.stringify(res.data));
    listUser = res.data;
    loading.style.display = "none";
  })
  .catch((err) => err);
console.log(listUser);
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
