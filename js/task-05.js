const nameInput = document.querySelector("#name-input");
const nameResult = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  if (e.currentTarget.value !== "") {
    nameResult.textContent = e.currentTarget.value;
  } else {
    nameResult.textContent = "Anonymous";
  }
});
