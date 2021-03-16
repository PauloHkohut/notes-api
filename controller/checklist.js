
const { Checklist } = require('../models');
const checklist = require('../models/checklist');
const controller = {};

controller.getChecklists = async(id = null) => {
    let result = [];

    if (id) {
        result = await Checklist.FindByPk(id);
    } else {
        result = await Checklist.findAll();
    }
    return result;
};

controller.save = async (checklist) => {
    return await Usuario.create(checklist);
};

controller.edit = async (id, checklist) => {
    await Checklist.update(checklist, {
        where: { id },
    });
    return await controller.getChecklists(id);
};

controller.remove = async (id) => {
    try {
        return await Checklist.destroy(id);
    } catch (error) {
        throw new Error(err);
    }
};

module.exports = controller;