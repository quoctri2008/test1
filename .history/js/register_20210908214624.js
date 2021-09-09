function Validator(options) {
  console.log(options.rule);
  const formElement = document.querySelector(options.form);
  if (formElement) {
    console.log(formElement);
  }
}
// Validator(option);
// // định nghĩa rule
Validator.isRequired = function (seletor) {
  return seletor;
};
Validator.isEmail = function (seletor) {
  return seletor;
};
