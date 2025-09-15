function niverData(){
const hoje = new Date();
const diaSemana = hoje.getDay(); /* const = um valor que não muda // let = um valor que pode mudar */
let diasFaltando = 4 - diaSemana;

if (diasFaltando < 0){
    diasFaltando += 7; 
}
document.getElementById("dias").textContent = diasFaltando
}
function attHora(){
    const horaHtml = document.getElementById("hora");
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, `0`);
    const minutos = agora.getMinutes().toString().padStart(2, `0`);;
    const segundos = agora.getSeconds().toString().padStart(2, `0`);;

    console.log(typeof hora)
    horaHtml.textContent = `${hora}:${minutos}:${segundos}`;
}

niverData();

setInterval(attHora, 1000);

attHora();