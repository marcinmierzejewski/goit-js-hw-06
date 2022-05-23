const textInput = document.querySelector("#validation-input");

const checkInputText = () => {
  console.log("checking....");
  if (textInput.value.length === Number(textInput.getAttribute("data-length"))) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
};

textInput.addEventListener("blur", checkInputText);
