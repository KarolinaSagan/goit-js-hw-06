const button = document.querySelector('[type="button"]');
const span = document.querySelector("span");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBodyColor() {
  let color = getRandomHexColor();
  document.body.style.background = color;
  span.innerText = color;
}

button.addEventListener("click", changeBodyColor);
