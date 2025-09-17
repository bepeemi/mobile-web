const form = document.getElementById("newForm");
const messageDiv = document.getElementById("message")

form.addEventListener("submit", function(event) {
    // Impede envio automático
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    messageDiv.textContent = "";
    // Condição de valição 
    if (email === "") {
        messageDiv.textContent = "Por favor, insira um e-mail";
        return false;
    }

    // Validação simples: tem @ e .
    if (!email.includes("@") || !email.includes(".")) {
        messageDiv.textContent = "Email inválido. Tente novamente.";
        return;
    }

    messageDiv.textContent = "Email cadastrado com sucesso! ✅";

    // Limpa o campo
    form.reset(); 
});