const { Sequelize, DataTypes } = require('sequelize');
let { NODE_ENV } = process.env;
let options = require('../config/database')
const _Usuario = require('./usuario');
const _Nota = require('./nota');
const _Tag = require('./tag');
const _Checklist = require('./checklist');
let database = {};

/*const options = {
    username: 'postgres',
    password: '123',
    database: 'Notas',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
};*/

NODE_ENV = NODE_ENV || 'production';

options = options[NODE_ENV];

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

sequelize.authenticate().then(() => console.log(`Conexão com o banco ${options.database} no ambiente ${NODE_ENV} realizada com sucesso`)).catch((error) => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;
