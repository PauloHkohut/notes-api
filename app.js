const express = require('express');
const bodyParser = require('body-parser');
const usuario = require('./tabelas/usuario');
const nota = require('./tabelas/nota');
const checklist = require('./tabelas/checklist');
const tag = require('./tabelas/tag');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/usuario', usuario);
app.use('/nota', nota);
app.use('/checklist', checklist);
app.use('/tag', tag);

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
})