const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json(['Método tag GET']);
});

router.post('/', function(req, res) {
    res.json(['Método tag POST']);
});

router.put('/', function(req, res) {
    res.json(['Método tag PUT']);
});

router.delete('/', function(req, res) {
    res.json(['Método tag DELETE']);
});

module.exports = router;