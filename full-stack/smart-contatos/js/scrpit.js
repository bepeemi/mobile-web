const form = document.querySelector("form")
const list = document.querySelector(".lista")
const inputName = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputName.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Digite seus dados")
        return false;

    }
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="contato-nome">${inputName.value}</span>
    <span class="contato-email">${inputEmail.value}</span>
    <span class="contato-telefone">${inputTel.value}</span>
    `;
    console.log(li);

    list.appendChild(li);

    form.reset();
    

});