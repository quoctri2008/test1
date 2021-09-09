function Validator(option) {
  //   console.log(option);
  const formElement = document.querySelector(option.form);
  if (formElement) {
    console.log(formElement);
  }
}
// Validator(option);
// // định nghĩa rule
Validator.isRequired = function () {};
Validator.isEmail = function () {};
