const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", loginSubmit);

function loginSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Email field and password cannot be empty!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}
