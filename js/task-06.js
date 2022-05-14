const textInput = document.querySelector("#validation-input");

//zliczanie liczby wprowadzonych znaków do input
let counter = 0
textInput.addEventListener("input", (event) => {
  counter = event.currentTarget.value.length;
});

const checkInputText = () => {
  console.log('checking....');
  if (counter < Number(textInput.getAttribute("data-length"))){
    console.log('za mało znaków');
    textInput.classList.remove('valid')
    textInput.classList.add('invalid')

  } else {
    console.log('wszystko ok');
    textInput.classList.remove('invalid')
    textInput.classList.add('valid')
  }
}

textInput.addEventListener("blur", checkInputText);