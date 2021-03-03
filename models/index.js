const { Sequelize } = require('sequelize');
const database = {};

const options = {
    username: 'postgres',
    password: '123',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
};

const sequelize = new Sequelize(options);

sequelize.authenticate().then(() => console.log(`Conexão com o banco ${options.database} realizada com sucesso`)).catch((error) => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;
