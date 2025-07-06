document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    const passwordValue = passwordInput.value.trim();

    if (!passwordValue) {
      passwordError.textContent = "Password is required.";
      isValid = false;
    } else if (passwordValue.length < 6) {
      passwordError.textContent =
        "Password must be at least 6 characters long.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (isValid) {
      const loginData = {
        email: emailValue,
        password: passwordValue,
      };

      try {
        localStorage.setItem("loginData", JSON.stringify(loginData));
        alert("Login successful!");
        window.location.href = "kanban.html";
      } catch (error) {
        alert("An error occurred while saving your data.");
      }
    }
  });

function clearLoginErrorMessages() {
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  emailError.textContent = "";
  passwordError.textContent = "";
}
