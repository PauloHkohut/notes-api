const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Nota = sequelize.define('Nota', 
    {
        id: {
            autoIncrement: true,
            autoIncrementIdentity: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usuario',
                key: 'id',
            },
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        criadoEm: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        atualizadoEm: {
            type: DataTypes.DATE,
            allowNull: true,
        }, 
    },
        {
            tableName: 'nota',
            timestamp: false,
        },
    );

        Nota.associate = function(models){
            this.belongsTo(models.Usuario, {
                foreignKey: 'usuarioId',
            });
        };

        Nota.associate = function(models){
            this.hasMany(models.Tag, {
                foreignKey: 'notaId',
            });
        };

        Nota.associate = function(models){
            this.hasMany(models.Checklist, {
                foreignKey: 'notaId',
            });
        };

    return Nota;
};