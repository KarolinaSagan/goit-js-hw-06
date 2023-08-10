const resizeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
var size = resizeInput.value;
text.style.fontSize = size + "px";

resizeInput.addEventListener("input", function () {
  size = resizeInput.value;
  text.style.fontSize = size + "px";
});
