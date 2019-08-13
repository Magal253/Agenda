var Sequelize = require('sequelize');
var cliente = require('./cliente');


var Conta = {
    CodCont: {type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true },
    Nome: Sequelize.STRING,
    ContaAPagar: Sequelize.INTEGER,
    CodCli: Sequelize.INTEGER

}
cliente.hasMany(Conta);
Conta.belongsTo(cliente);

module.exports = Conta;  