//Necessário instalação e requisição do pacote express para iniciar o servidor
const express = require ('express');
const app = express();

const vendas = require("./routes/route.controller");
app.use("/vendas",vendas);

//Necessário definir uma porta para iniciar o servidor
const port = 8000;

//Inicia e Retorna uma mensagem no console informando a execução do servidor
app.listen(8000, (res) => {
    console.log('Servidor em execução na porta ' + port);
});

// Retorna um arquivo json na página informando a execução do servidor
app.get('/', function(req, res) {
    res.json({status: 'Servidor em execução na porta ' + port});
});
