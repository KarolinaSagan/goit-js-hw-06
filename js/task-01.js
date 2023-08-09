const categories = document.querySelector("#categories");

const category = categories.querySelectorAll("h2");
const elements = categories.querySelectorAll("ul");
let el;

for (let i = 0; i < category.length; i++) {
  console.log("Category: " + category[i].innerHTML);
  for (let j = 0; j < elements.length; j++) {
    console.log("Elements: " + elements[i].querySelectorAll("li").length);
  }
}
