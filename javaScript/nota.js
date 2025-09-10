// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
// Função
function notaClick(event) {
    event.preventDefault();
    // Lógica
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }
    inputNota.value = "";
}
