const express = require('express');
const bodyParser = require('body-parser');
const usuario = require('./routes/usuario');
const nota = require('./routes/nota');
const checklist = require('./routes/checklist');
const tag = require('./routes/tag');
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