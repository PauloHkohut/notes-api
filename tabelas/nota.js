const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json(['Método nota GET']);
});

router.post('/', function(req, res) {
    res.json(['Método nota POST']);
});

router.put('/', function(req, res) {
    res.json(['Método nota PUT']);
});

router.delete('/', function(req, res) {
    res.json(['Método nota DELETE']);
});

module.exports = router;