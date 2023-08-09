const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const markup = ingredients
  .map((ingredients) => `<li class="item">${ingredients}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);

//for (let i = 0; i < ingredients.length; i++) {
//let li = document.createElement("li");
//li.innerText = ingredients[i];
//li.classList.add("item");
// list.append(li);
//}
