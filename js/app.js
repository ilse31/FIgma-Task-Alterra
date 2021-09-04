var $form = document.querySelector(".form");
var inputFields = document.querySelectorAll(".form-control");
var error = document.querySelector(".error");
var $fullName = document.getElementById("fullName");
var fullnm = document.querySelector(".flnm");
const validate = (e) => {
  e.preventDefault();
  if ($fullName.value == "") {
    addError();
  }
};
const addError = () => {
  var errorr = document.createElement("div");
  errorr.className = "invalid-feedback";
  document.body.appendChild(errorr);
};

$form.addEventListener("submit", validate);
