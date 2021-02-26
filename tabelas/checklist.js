const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json(['Método check GET']);
});

router.post('/', function(req, res) {
    res.json(['Método check POST']);
});

router.put('/', function(req, res) {
    res.json(['Método check PUT']);
});

router.delete('/', function(req, res) {
    res.json(['Método check DELETE']);
});

module.exports = router;