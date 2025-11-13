
const vitorias = Number(prompt("Jogos Vencidos"));
const empates = Number(prompt("Jogos Empatados"));

const pontos = (vitorias * 3 + empates);

function pointer(mensagem) {
  document.write(mensagem + `${pontos}`);
}

if (pontos >= 10) {
  pointer("Voando alto! ");
} else if (pontos <= 5) {
  pointer("Em direção a zona de rebaixamento!");
} else {
  pointer("Fora da zona de rebaixamento, mas ainda está longe de ganhar");
}

