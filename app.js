const express = require('express');
const bodyParser = require('body-parser');
const usuario = require('./routes/usuario');
const nota = require('./routes/nota');
const tag = require('./routes/tag');
const checklist = require('./routes/checklist');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/usuario', usuario);
app.use('/nota', nota);
app.use('/tag', tag);
app.use('/checklist', checklist);

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
})