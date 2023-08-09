const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
let name = nameInput.value;
function checkName(name) {
  name = nameInput.value;
  if (name === "") {
    nameInput.textContent = "Anonymous";
  } else {
    nameInput.textContent = name;
    nameOutput.textContent = name;
  }
}
nameInput.addEventListener("input", checkName);
