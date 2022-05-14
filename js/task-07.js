const changeText = document.querySelector("#text");
const sizeControl = document.querySelector("#font-size-control");

sizeControl.addEventListener("input", (e) => {
  changeText.style.fontSize = `${sizeControl.value}px`;
})