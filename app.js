const express = require('express');
const bodyParser = require('body-parser');
const usuario = require('./routes/usuario');
const nota = require('./routes/nota');
const tag = require('./routes/tag');
const checklist = require('./routes/checklist');
const app = express();
const port = 3000;
const login = require('./routes/login');
const auth = require('./middlewares/auth');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const portaHttps = 443;

app.use(cors({
    origin: [
        'http://localhost:8080',
    ]
}));

app.use(bodyParser.json());

app.use('/login', login);
app.use(auth);
app.use('/usuario', usuario);
app.use('/nota', nota);
app.use('/tag', tag);
app.use('/checklist', checklist);

const key = fs.readFileSync('certs/localhost-key.pem');
const cert = fs.readFileSync('certs/localhost.pem');

const credencials = { key, cert};
const httpsServer = https.createServer(credencials, app);

httpsServer.listen(portaHttps, () => {
    console.log(`API rodando seguramente na porta ${portaHttps}`);
});

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});