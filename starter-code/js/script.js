const eMailForm = document.querySelector(".signup__email");

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

eMailForm.addEventListener("invalid", function(e) {
  const error = document.createElement("p");
  error.classList.add("signup__email--error");
  error.innerText = `Oops! Please check your email`;
  insertAfter(error, e.target);
  e.preventDefault();
})