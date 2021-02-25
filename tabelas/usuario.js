const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json([{nome: 'Paulo', email: 'pauloq_henrique@hotmail.com'}]);
});

