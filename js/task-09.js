function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const btnChange = document.querySelector(".change-color");
const currentBgColor = document.querySelector(".color");

const changeBgColor = () => {
  body.style.backgroundColor = getRandomHexColor()
  currentBgColor.textContent = body.style.backgroundColor;
}

btnChange.addEventListener("click", changeBgColor);