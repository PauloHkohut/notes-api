const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
const { secret } = require('../config/security');
const controller = {};


controller.login = async (email, senha) => {
    try {
        const usuario = await Usuario.scope('login').findOne({ where: { email }});
        const senhaCorreta = bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) return false;

        return jwt.sign({ id: usuario.id }, secret, {
            expiresIn: '24h',
        });
    } catch (error) {
        throw new Error(error);
    }
};


controller.getUsuarios = async(id = null) => {
    let result = [];

    if (id) {
        result = await Usuario.FindByPk(id);
    } else {
        result = await Usuario.findAll();
    }
    return result;
};

controller.save = async (usuario) => {
    return await Usuario.create(usuario);
};

controller.edit = async (id, usuario) => {
    await Usuario.update(usuario, {
        where: { id },
    });
    return await controller.getUsuarios(id);
};

controller.remove = async (id) => {
    try {
        return await Usuario.destroy(id);
    } catch (error) {
        throw new Error(err);
    }
};

module.exports = controller;