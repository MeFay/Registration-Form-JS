const form = document.getElementById("loginForm");
const name = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let errorMessage = "";

  if (name.value === "") {
    errorMessage += "Nome tem que ser introduzido!";
  }

  if (password.value === "") {
    errorMessage += "\nPassword tem que ser introduzida!";
  }

  if (email.value === "" || !isValidEmail(email.value)) {
    errorMessage += "\nEmail tem que ser introduzido ou ser válido!";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
  } else {
    alert("Obrigado por submeter");
  }
});

function isValidEmail(email) {
  return email.includes("@");
}
