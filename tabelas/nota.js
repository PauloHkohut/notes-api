const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json(['Método nota GET']);
});

router.post('/', (req, res) => {
    res.json(['Método nota POST']);
});

router.put('/', (req, res) => {
    res.json(['Método nota PUT']);
});

router.delete('/', (req, res) => {
    res.json(['Método nota DELETE']);
});

module.exports = router;