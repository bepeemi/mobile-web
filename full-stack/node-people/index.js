const express = require("express");
const app = express();
const port = 4000;
//indicar para express ler body com json
app.use(express.json());
// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];
const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

// Criando funções auxiliares 
// retornar o objeto por id
function buscarNomePorId(id) {
  return nomes.filter((nome) => nome.id == id)
}
//Pegar a posição ou index do elemento do Array por i
function buscarIdNomes(id) {
  return nomes.findIndex((nome) => nome.id == id)
}

app.get('/', (req, res) => {
  res.send('Bem vindo');
});

app.get("/teste", (req, res) => {
  res.send("A Api nodePeople está online kkk");
});

app.get("/listaNomes", (req, res) => {
  res.send(nomes);
});

app.get("/listaNomes/:id", (req, res) => {
  let index = req.params.id;
  res.json(buscarNomePorId(index))
});

app.post("/listaNomes", (req, res) => {
  nomes.push(req.body);
  res.status(201).send('Nomes cadastrados com sucesso!');
});

//Criando rota de exclusão
app.delete("/listaNomes/:id", (req, res) => {
  let index = buscarIdNomes(req.params.id);
  nomes.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluído com sucesso!`);

});

// Rota alterar
// Rota alterar
app.put('/listaNomes/:id', (req, res) => {
  console.log(req.params.id)

  let index = buscarIdNomes(req.params.id);

  console.log(index)
  console.log(req.body)

  if (index === -1) {
    return res.status(404).send(`Nenhum nome com id ${req.params.id} foi encontrado`)
  }

  nomes[index].nome = req.body.nome;
  nomes[index].idade = req.body.idade;

  res.json(nomes);
});

// ROTAS de times
// Buscando nomes (Times)
app.get("/listaTimes", (req, res) => {
  res.send(times);
});

// Criando Rota Excluir
app.delete("/listaTimes/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);
  times.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});