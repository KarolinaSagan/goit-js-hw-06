const resizeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

resizeInput.addEventListener("input", function () {
  var size = resizeInput.value;
  text.style.fontSize = size + "px";
});
