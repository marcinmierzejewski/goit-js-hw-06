const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (let i of ingredients) {
  const firstElement = document.createElement("li");
  firstElement.textContent = i;
  firstElement.classList.add("item");
  list.append(firstElement);
}
