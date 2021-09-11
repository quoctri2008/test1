const loading = document.getElementById("loading");
loading.style.display = "block";
// console.log(loading);
let listUser = [];
fetch("https://tony-json-server.herokuapp.com/api/users")
  .then((response) => response.json())
  .then((res) => {
    loading.style.display = "none";
  })
  .catch((err) => err);
