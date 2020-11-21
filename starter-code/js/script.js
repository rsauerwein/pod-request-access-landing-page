const eMailForm = document.querySelector(".signup__email");
const errorMessage = document.querySelector(".signup__email--error")

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

eMailForm.addEventListener("invalid", function(e) {
  errorMessage.style.display = "block";
  console.log(errorMessage);
  e.preventDefault();
})