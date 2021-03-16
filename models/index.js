const { Sequelize, DataTypes } = require('sequelize');
const _Usuario = require('./usuario');
const _Nota = require('./nota');
const _Tag = require('./tag');
const _Checklist = require('./checklist');
const database = {};

const options = {
    username: 'postgres',
    password: '123',
    database: 'Notas',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
};

const sequelize = new Sequelize(options);

const Usuario = _Usuario(sequelize, DataTypes);
const Nota = _Nota(sequelize, DataTypes);
const Tag = _Tag(sequelize, DataTypes);
const Checklist = _Checklist(sequelize, DataTypes);

database['Usuario'] = Usuario;
database['Nota'] = Nota;
database['Tag'] = Tag;
database['Checklist'] = Checklist;


for (const key in database) {
    if (database[key].associate) database[key].associate(database); 
}

sequelize.authenticate().then(() => console.log(`Conexão com o banco ${options.database} realizada com sucesso`)).catch((error) => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;
