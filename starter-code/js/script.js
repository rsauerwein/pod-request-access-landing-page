const eMailForm = document.querySelector(".signup__email");
const errorMessage = document.querySelector(".signup__email--error")

eMailForm.addEventListener("invalid", function(e) {
  errorMessage.style.display = "block";
  console.log(errorMessage);
  e.preventDefault();
})