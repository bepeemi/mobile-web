const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");

function idadeClick(event) {
event.preventDefault();

if (inputIdade.value == "") {
message.style.display = "block";
return false;
}  
message.style.display = "none";

if (inputIdade.value >= 18) {
resultado.innerHTML = "Você pode ir à festa";
} else {
resultado.innerHTML = "Você não pode ir à festa";
}
inputIdade.value = "";
}