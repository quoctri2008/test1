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

// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");
// const usernameValue = username.value.trim();
// const emailValue = email.value.trim();
// const passwordValue = password.value.trim();
// const password2Value = password2.value.trim();

// // t???o event tr??n form
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (usernameValue === "") {
//     showError(username, "Username cannot be blank");
//   } else if (usernameValue.length < 5) {
//     showError(username, "Username min 5 characters");
//   }
//   setSuccess(username);

//   if (emailValue === "") {
//     showError(email, "Email cannot be blank");
//   } else if (!isEmail(emailValue)) {
//     showError(email, "Email is not valid");
//   }
//   setSuccess(email);

//   if (passwordValue === "") {
//     showError(password, "Password cannot be blank");
//   } else if (password.length < 8) {
//     showError(password, "Password min 8 characters");
//   }
//   setSuccess(password);

//   if (password2Value === "") {
//     showError(password2, "Password confirm cannot be blank");
//   } else if (password2Value !== passwordValue) {
//     showError(password2, "Passwords does not match");
//   }
//   setSuccess(password2);
// });

// // l???y gi?? tr??? id
// function getValue(id) {
//   return document.getElementById(id).value.trim();
// }

// // hi???n th??? l???i
// function showError(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = message;
// }

// // th??nh c??ng
// function setSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-contrl success";
// }

// // ??i???u ki???n email
// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }
