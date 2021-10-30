const passvall = () => {
  var fullname = document.getElementById("fName").value;
  var emails = document.getElementById("email").value;
  var phones = document.getElementById("phone").value;
  var nationals = document.getElementById("national").value;
  var messages = document.getElementById("message").value;
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("email", emails);
  localStorage.setItem("phone", phones);
  localStorage.setItem("nationals", nationals);
  localStorage.setItem("messages", messages);
  return false;
};
