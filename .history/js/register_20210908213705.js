function Validator(option) {
  console.log(option);
  var formElement = document.querySelector(option.form);
  if (formElement) {
    console.log(formElement);
  }
}
// Validator(option);
// // định nghĩa rule
Validator.isRequired = function () {};
Validator.isEmail = function () {};
