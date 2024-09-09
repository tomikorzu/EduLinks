// Obtener elementos del DOM
const registerForm = document.getElementById("registerForm");
const registerName = document.getElementById("register-name");
const registerSurname = document.getElementById("register-surname");
const registerUsername = document.getElementById("register-username");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerPassword2 = document.getElementById("register-password2");
const registerSubmit = document.getElementById("register-submit");

console.log("JavaScript para registro cargado.");

// Función para mostrar errores en el formulario
function showError(id, message) {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Función para validar el formato del email
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

registerForm.addEventListener("submit", submitRegisterForm);

function showLogin() {
  console.log("Redirigiendo al usuario a la página de inicio de sesión.");
  window.location.href = "./user-auth/login.html";
}

function submitRegisterForm(e) {
  e.preventDefault();

  console.log("Formulario de registro enviado.");

  // Limpia los errores anteriores
  showError("name-error", "");
  showError("surname-error", "");
  showError("username-error", "");
  showError("email-error", "");
  showError("password-error", "");
  showError("password2-error", "");

  // Validaciones
  if (!registerName.value.trim()) {
    showError("name-error", "El nombre es obligatorio");
    return;
  }

  if (!registerSurname.value.trim()) {
    showError("surname-error", "El apellido es obligatorio");
    return;
  }

  if (!registerUsername.value.trim()) {
    showError("username-error", "El nombre de usuario es obligatorio");
    return;
  }

  if (!emailIsValid(registerEmail.value)) {
    showError("email-error", "El email no es válido");
    return;
  }

  const password = registerPassword.value;
  const password2 = registerPassword2.value;

  if (password !== password2) {
    showError("password2-error", "Las contraseñas no coinciden");
    return;
  }

  if (password.length < 8) {
    showError(
      "password-error",
      "La contraseña debe tener al menos 8 caracteres"
    );
    return;
  }

  // Enviar datos al servidor
  console.log("Enviando datos al servidor...");
  fetch("/auth/register", {
    method: "POST",
    body: new FormData(registerForm),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        showLogin();
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
