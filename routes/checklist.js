const database = require('../models');
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json(['Método check GET']);
});

router.post('/', (req, res) => {
    res.json(['Método check POST']);
});

router.put('/', (req, res) => {
    res.json(['Método check PUT']);
});

router.delete('/', (req, res) => {
    res.json(['Método check DELETE']);
});

module.exports = router;