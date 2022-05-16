function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const createDiv = document.querySelector("#boxes");
let currentBoxSize = 30;

const createBoxes = () => {
  console.log(`Create ${Number(inputValue.value)} boxes`);
  for (let index = 0; index < Number(inputValue.value); index++) {
    const newBoxes = document.createElement("div");
    newBoxes.style.width = `${currentBoxSize}px`;
    newBoxes.style.height = `${currentBoxSize}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    createDiv.append(newBoxes);
    currentBoxSize += 10;
  }
};

const destroyBoxes = () => {
  const findCreatedBoxes = createDiv.querySelectorAll("div");
  findCreatedBoxes.forEach((B) => {
    B.remove();
  });
  console.log(`Destroy ${findCreatedBoxes.length} boxes`);
  currentBoxSize = 30;
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
