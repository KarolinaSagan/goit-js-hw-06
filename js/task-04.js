const valuePage = document.querySelector("#value");
const buttonValueDown = document.querySelector('[data-action="decrement"]');
const buttonValueUp = document.querySelector('[data-action="increment"]');
let counterValue = 0;
let newValue;
function updateCounterValue(value) {
  counterValue = value;
  valuePage.textContent = counterValue;
}
function valueUP() {
  newValue = counterValue + 1;
  updateCounterValue(newValue);
}
function valueDown() {
  newValue = counterValue - 1;
  updateCounterValue(newValue);
}
buttonValueUp.addEventListener("click", valueUP);
buttonValueDown.addEventListener("click", valueDown);
updateCounterValue(counterValue);
