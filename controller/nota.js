const { Nota, Checklist, Tag, sequelize } = require('../models');
const checklist = require('../models/checklist');
const usuario = require('../models/usuario');
const controller = {};

controller.getById = async (id) => {
    return await Nota.findOne({
        where: {
            id,
        },
        include: [
            {
                model: Checklist,
                as: 'checklists',
            },
            {
                model: Tag,
                as: 'tags',
            }
        ]
    });

};

controller.getUsuarioById = async (usuarioId, tagName = null) => {
    const where = null;
    let required = false;

    if (tagName) {
        where = { nome: tagName };
        required = true;
    }

    return await Nota.findAll({
        where: {
            usuarioId,
        },
        include: [
            {
                model: checklist,
                as: 'checklists',
            },
            {
                model: Tag,
                as: 'tags',
                where,
                required,
            },
        ],
    });
};


controller.getNotas = async (id = null) => {
    let result = [];

    if (id) {
        result = await Nota.FindByPk(id);
    } else {
        result = await Nota.findAll();
    }
    return result;
};

controller.save = async ({ usuarioId, titulo = null, descricao = null, checklists = [], tags = [] }) => {
    const transaction = await sequelize.transaction();

    try {
        let { dataValues } = await Nota.create(
            {
                usuarioId,
                titulo,
                descricao,
            },
            {
                transaction,
            }
        );

        let notaSalva = dataValues;

        let checklistsSalvos = [];

        if (checklists > 0) {
            for (let checklist of checklists) {
                checklist = { ... checklist, notaId: notaSalva.id };

                const checklistSalvo = await Checklist.create(checklist, {
                    transaction,
                });
                checklistsSalvos.push(checklistSalvo);
            }
        }

        let tagsSalvas = [];

        if (tags > 0) {
            for (let tag of tags) {
                tag = { ... tag, notaId: notaSalva.id };

                const tagSalva = await Tag.create(tag, {
                    transaction,
                });
                tagsSalvas = [... tagsSalvas, tagSalva];
            }
        }

        notaSalva = { ... notaSalva, checklists: checklistsSalvos, tags: tagsSalvas };

        await transaction.commit();

        return notaSalva;

    } catch (error) {
        await transaction.rollback();
    }
};

controller.edit = async ({ titulo = null, descricao = null, checklists = [], tags = [] }) => {
    const transaction = await sequelize.transaction();

    try {
        let { dataValues } = await Nota.update(
            {
                titulo,
                descricao,
            },
            {
                transaction,
            }
        );

        let notaSalva = dataValues;

        let checklistsSalvos = [];

        if (checklists > 0) {
            for (let checklist of checklists) {
                checklist = { ... checklist, notaId: notaSalva.id };

                const checklistSalvo = await Checklist.update(checklist, {
                    transaction,
                });
                checklistsSalvos.push(checklistSalvo);
            }
        }

        let tagsSalvas = [];

        if (tags > 0) {
            for (let tag of tags) {
                tag = { ... tag, notaId: notaSalva.id };

                const tagSalva = await Tag.update(tag, {
                    transaction,
                });
                tagsSalvas = [... tagsSalvas, tagSalva];
            }
        }

        notaSalva = { ... notaSalva, checklists: checklistsSalvos, tags: tagsSalvas };

        await transaction.commit();

        return notaSalva;

    } catch (error) {
        await transaction.rollback();
    }
    
};

controller.remove = async (id) => {
    try {
        return await Nota.destroy(id);
    } catch (error) {
        throw new Error(err);
    }
};


module.exports = controller;