// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//   // trim to remove the whitespaces
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const password2Value = password2.value.trim();

//   if (usernameValue === "") {
//     setErrorFor(username, "Username cannot be blank");
//   } else {
//     setSuccessFor(username);
//   }

//   if (emailValue === "") {
//     setErrorFor(email, "Email cannot be blank");
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, "Not a valid email");
//   } else {
//     setSuccessFor(email);
//   }

//   if (passwordValue === "") {
//     setErrorFor(password, "Password cannot be blank");
//   } else {
//     setSuccessFor(password);
//   }

//   if (password2Value === "") {
//     setErrorFor(password2, "Password2 cannot be blank");
//   } else if (passwordValue !== password2Value) {
//     setErrorFor(password2, "Passwords does not match");
//   } else {
//     setSuccessFor(password2);
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = message;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

const form = document.getElementById("form");
// const username = getValue(username);
// const email = getValue(email);
// const password = getValue(password);
// const password2 = getValue(password2);
const usernameValue = getValue(username);
const emailValue = getValue(email);
const passwordValue = getValue(password);
const password2Value = getValue(password2);

// tạo event trên form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (usernameValue === "") {
    showError("username", "Username cannot be blank");
  } else if (usernameValue.length > 5) {
    showError("username", "Username min 5 characters");
  }
  setSuccess("username");
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
  formControl.className = "form-contrl success";
}
