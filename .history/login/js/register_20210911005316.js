const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// tạo event trên form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (usernameValue === "") {
    showError(username, "Username cannot be blank");
  } else if (usernameValue !== "" && usernameValue.length < 5) {
    showError(username, "Username min 5 characters");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    showError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    showError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    showError(password, "Password cannot be blank");
  } else if (passwordValue !== "" && password.length < 8) {
    showError(password, "Password min 8 characters");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    showError(password2, "Password confirm cannot be blank");
  } else if (password2Value !== passwordValue) {
    showError(password2, "Passwords does not match");
  } else {
    setSuccess(password2);
  }
  localStorage.setItem("data", JSON.stringify(listUsers));
});

// lấy giá trị id
function getValue(id) {
  return document.getElementById(id).value.trim();
}

// hiển thị lỗi
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

// thành công
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// điều kiện email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
