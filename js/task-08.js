const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const frmUser = {
    email: email.value,
    password: password.value,
  };

  console.log(`Email: ${frmUser.email}, Password: ${frmUser.password}`);
  event.currentTarget.reset();
}