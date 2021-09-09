function Validator(option) {
  const formElement = document.querySelector(option.form);
  if (formElement) {
    console.log(formElement);
  }
}
// định nghĩa rule
Validator.isRequired = function () {};
Validator.isEmail = function () {};
