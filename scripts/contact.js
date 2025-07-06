document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  let hasError = false;

  // Nome
  if (nome.value.trim().length < 3) {
    document.getElementById("nomeError").innerText =
      "Nome deve ter pelo menos 3 caracteres.";
    hasError = true;
  } else {
    document.getElementById("nomeError").innerText = "";
  }

  // Email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value.trim())) {
    document.getElementById("emailError").innerText = "Email inválido.";
    hasError = true;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Mensagem
  if (mensagem.value.trim().length < 10) {
    document.getElementById("mensagemError").innerText =
      "Mensagem muito curta.";
    hasError = true;
  } else {
    document.getElementById("mensagemError").innerText = "";
  }

  if (!hasError) {
    alert("Mensagem enviada com sucesso!");
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }
});
