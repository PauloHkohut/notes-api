
const { Nota } = require('../models');
const nota = require('../models/nota');
const controller = {};

controller.getNotas = async(id = null) => {
    let result = [];

    if (id) {
        result = await Nota.FindByPk(id);
    } else {
        result = await Nota.findAll();
    }
    return result;
};

controller.save = async (nota) => {
    return await Nota.create(nota);
};

controller.edit = async (id, nota) => {
    await Nota.update(nota, {
        where: { id },
    });
    return await controller.getNotas(id);
};

controller.remove = async (id) => {
    try {
        return await Nota.destroy(id);
    } catch (error) {
        throw new Error(err);
    }
};

module.exports = controller;