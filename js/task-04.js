const valuePage = document.querySelector("#value");
const buttonValueDown = document.querySelector('[data-action="decrement"]');
const buttonValueUp = document.querySelector('[data-action="increment"]');
let counterValue = 0;
function updateCounterValue(value) {
  counterValue = value;
  valuePage.textContent = counterValue;
}
function valueUP() {
  counterValue++;
  updateCounterValue(counterValue);
}
function valueDown() {
  counterValue--;
  updateCounterValue(counterValue);
}
buttonValueUp.addEventListener("click", valueUP);
buttonValueDown.addEventListener("click", valueDown);
updateCounterValue(counterValue);
