const textInput = document.querySelector("#validation-input");

const checkInputText = () => {
  console.log("checking....");
  if (textInput.value.length < Number(textInput.getAttribute("data-length"))) {
    console.log("za mało znaków");
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    console.log("wszystko ok");
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
};

textInput.addEventListener("blur", checkInputText);
