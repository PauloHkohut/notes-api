
const { Tag } = require('../models');
const tag = require('../models/tag');
const controller = {};

controller.getTags = async(id = null) => {
    let result = [];

    if (id) {
        result = await Tag.FindByPk(id);
    } else {
        result = await Tag.findAll();
    }
    return result;
};

controller.save = async (tag) => {
    return await Tag.create(tag);
};

controller.edit = async (id, tag) => {
    await Tag.update(tag, {
        where: { id },
    });
    return await controller.getTags(id);
};

controller.remove = async (id) => {
    try {
        return await Tag.destroy(id);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = controller;