document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    let isValid = true;

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    const nameValue = nameInput.value.trim();

    if (!nameValue) {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else if (nameValue.length < 3) {
      nameError.textContent = "Name must be at least 3 characters long.";
      isValid = false;
    }

    if (isValid) {
      const subscriberData = {
        email: emailValue,
        name: nameValue,
      };

      try {
        localStorage.setItem("subscriber", JSON.stringify(subscriberData));
        alert("Subscription successful!");
        emailInput.value = "";
        nameInput.value = "";
      } catch (error) {
        alert("An error occurred while saving your data.");
      }
    }
  });

function clearErrorMessage() {
  const emailError = document.getElementById("emailError");
  const nameError = document.getElementById("nameError");
  emailError.textContent = "";
  nameError.textContent = "";
}
