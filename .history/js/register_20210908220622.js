function validate() {
  const username = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById(
    "password_confirmation"
  ).value;
}

if (username == "") {
  alert("Vui lòng nhập tên!");
  return false;
}
if (email == "") {
  alert("Vui lòng nhập email!");
  return false;
}
if (password == "") {
  alert("Vui lòng nhập password!");
  return false;
}
if (confirmPassword == "") {
  alert("Vui lòng nhập password!");
  return false;
}
