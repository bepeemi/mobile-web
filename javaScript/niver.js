function niverData(){
const hoje = new Date();
const diaSemana = hoje.getDay(); /* const = um valor que não muda // let = um valor que pode mudar */
let diasFaltando = 4 - diaSemana;

if (diasFaltando < 0){
    diasFaltando += 7; 
}
document.getElementById("dias").textContent = diasFaltando
}
niverData();