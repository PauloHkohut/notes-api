const database = require('../models');
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json(['Método tag GET']);
});

router.post('/', (req, res) => {
    res.json(['Método tag POST']);
});

router.put('/', (req, res) => {
    res.json(['Método tag PUT']);
});

router.delete('/', (req, res) => {
    res.json(['Método tag DELETE']);
});

module.exports = router;