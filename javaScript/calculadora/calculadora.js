// variavel
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado")

// função
function soma(event){
event.preventDefault();
//Validação de Formulário
if (num1.value == "" || num2.value ==""){
    alert("Preencha o campo");
    return false;
}
resultado.innerHTML = Number(num1.value) + Number(num2.value);
num1.value = "";
num2.value = "";
}