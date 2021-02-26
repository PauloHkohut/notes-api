const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json([{nome: 'Paulo', email: 'pauloq_henrique@hotmail.com'},
    {nome: 'Henrique', email: 'pauloq_henrique@hotmail.com'}]);
});

router.post('/', function(req, res) {
    res.json(['Método POST']);
});

router.put('/', function(req, res) {
    res.json(['Método PUT']);
});

router.delete('/', function(req, res) {
    res.json(['Método DELETE']);
});


module.exports = router;