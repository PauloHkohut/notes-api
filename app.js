const express = require('express');
const bodyParser = require('body-parser');
const usuario = require('./tabelas/usuario');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/usuario', usuario);

app.listen(port, function() {
    console.log(`Aplicação rodando em http://localhost:${port}`);
})