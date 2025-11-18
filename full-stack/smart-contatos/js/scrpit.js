const form = document.querySelector("form")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit", function (event) {
    event.preventDefault();
if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "" ) {
    message.style.display = "block";
    return false;

}
    console.log("Nome", inputNome.value);
    console.log("Email", inputEmail.value);
    console.log("Telefone", inputTel.value);
});