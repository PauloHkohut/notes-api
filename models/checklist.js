const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Cheklist = sequelize.define('Checklist',
    {
        id: {
            autoIncrement: true,
            autoIncrementIdentity: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        notaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'nota',
                key: 'id',
            },
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        concluida: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
    },

        {
            tableName: 'checklist',
            timestamp: false,
        },
    );

    Cheklist.associate = function(models){
        this.belongsTo(models.Nota, {
            foreignKey: 'notaId',
        });
    };

    return Cheklist;
};