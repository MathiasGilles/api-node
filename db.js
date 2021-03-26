const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('api-node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: "8889"
});

try {
    sequelize.authenticate().then(r => (console.log('ok')));
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports.con = sequelize;