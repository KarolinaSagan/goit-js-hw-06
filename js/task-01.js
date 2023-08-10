const categories = document.querySelector("#categories");

const category = categories.querySelectorAll("h2");
const elements = categories.querySelectorAll("ul");
let el;
console.log("Number of categories: " + category.length);
for (let i = 0; i < category.length; i++) {
  console.log("Category: " + category[i].innerHTML);
  console.log("Elements: " + elements[i].querySelectorAll("li").length);
}
