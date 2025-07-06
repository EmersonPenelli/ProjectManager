document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters";
    isValid = false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  if (isValid) {
    showToast("Message sent successfully!");
    document.getElementById("contactForm").reset();
  }
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
