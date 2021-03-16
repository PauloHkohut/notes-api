const { Usuario } = require('../models');
const controller = {};

controller.getUsuarios = async(id = null) => {
    let result = [];

    if (id) {
        result = await Usuario.FindByPk(id);
    } else {
        result = await Usuario.findAll();
    }
};

module.exports = controller;