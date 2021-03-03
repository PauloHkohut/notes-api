const database = require('../models')
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json([{nome: 'Paulo', email: 'pauloq_henrique@hotmail.com'},
    {nome: 'Henrique K.', email: 'pauloq_henrique@hotmail.com'}]);
});

router.post('/', (req, res) => {
    res.json(['Método POST']);
});

router.put('/', (req, res) => {
    res.json(['Método PUT']);
});

router.delete('/', (req, res) => {
    res.json(['Método DELETE']);
});


module.exports = router;