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

// Criando funções auxiliares 
// retornar o objeto por id
function buscarNomePorId(id) {
  return nomes.filter((nome) => nome.id == id)
}
//Pegar a posi
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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});