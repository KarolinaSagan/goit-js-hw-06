const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const name = nameOutput.textContent;
function checkName(event) {
  if (event.currentTarget.value == "") {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
nameInput.addEventListener("input", checkName);
