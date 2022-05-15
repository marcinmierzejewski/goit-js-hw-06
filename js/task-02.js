const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

function addListItem(listItem) {
  for (let i of listItem) {
    const firstElement = document.createElement("li");
    firstElement.textContent = i;
    firstElement.classList.add("item");
    list.append(firstElement);
  }
}

addListItem(ingredients);
