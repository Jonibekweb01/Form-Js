let form = document.querySelector(".js-form"),
  email = document.querySelector(".js-inputEmail"),
  password = document.querySelector(".js-inputPassword"),
  labelEmail = document.querySelector(".js-labelEmail"),
  labelPassword = document.querySelector(".js-labelPassword"),
  length = document.querySelector(".length");
(select = document.querySelector(".js-select")),
  (check = document.querySelector(".js-check"));

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let emailVal = email.value.trim(),
    passwordVal = password.value.trim(),
    selectVal = select.value.trim(),
    checkVal = check.value.trim();

  if (passwordVal.length < 8) {
    password.classList.add("form-controlErr");
    password.classList.remove("form-controlSuc");
    labelPassword.classList.add("js-labelPasswordErr");
    labelPassword.classList.remove("js-labelPasswordSuc");
    length.classList.add("lengthErr");
    length.classList.remove("lengthSuc");
    return;
  }

  email.classList.add("form-controlSuc");
  password.classList.add("form-controlSuc");
  email.classList.remove("form-controlErr");
  select.classList.add("form-selectSuc");
  select.classList.remove("form-selectErr");
  labelPassword.classList.remove("js-labelPasswordErr");
  length.classList.remove("lengthErr");
});
