module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag',
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
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            tableName: 'tag',
            timestamp: false,
        },
    );

    Tag.associate= function(models){
        this.belongsTo(models.Tag, {
            foreignKey: 'notaId',
        });
    };
    return Tag;
};