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

// // SOCIAL PANEL JS
// const floating_btn = document.querySelector(".floating-btn");
// const close_btn = document.querySelector(".close-btn");
// const social_panel_container = document.querySelector(
//   ".social-panel-container"
// );

// floating_btn.addEventListener("click", () => {
//   social_panel_container.classList.toggle("visible");
// });

// close_btn.addEventListener("click", () => {
//   social_panel_container.classList.remove("visible");
// });

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let listUser = JSON.parse(localStorage.getItem("data"));
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const password2 = document.getElementById("password2").value.trim();
  // get value input
  for (const index in listUsers) {
  }
  if (username === "") {
    return alert("user can not a blank");
  } else if (listUsers[index].username === username) {
    return alert("user is used");
  }

  if (email === "") {
    return alert("Email can not a blank");
  } else if (!isEmail(emailValue)) {
    return setErrowFor(email, "Email is not valid");
  } else if (listUsers[index].email === email) {
    return alert("email is used");
  }

  if (emailValue === "") {
    return setErrowFor(email, "Email can not a blank");
  } else if (!isEmail(emailValue)) {
    return setErrowFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
  //   for (const index in listUser) {

  //   }

  if (passwordValue === "") {
    // show error, add error class
    return setErrowFor(password, "Password can not a blank");
  } else {
    // add sucess class
    setSuccessFor(password);
  }

  if (password2Value === "") {
    // show error, add error class
    return setErrowFor(password2, "Password can not a blank");
  } else if (password2Value !== passwordValue) {
    return setErrowFor(password2, "Password not match");
  } else {
    // add sucess class
    setSuccessFor(password2);
  }

  localStorage.setItem("data", JSON.stringify(listUser));
  if (
    setSuccessFor(username) == true &&
    setSuccessFor(email) == true &&
    setSuccessFor(password) == true &&
    setSuccessFor(password2) == true
  ) {
    return alert("Ban da dang ky thanh cong");
  }
});

function setErrowFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
