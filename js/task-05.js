const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
let name = nameInput.value;
function checkName(event) {
  nameOutput.textContent = "Anonymous";
  event.text = nameInput.value;
  if (event.text != "") {
    nameOutput.textContent = event.text;
  }
}
nameInput.addEventListener("input", checkName);
