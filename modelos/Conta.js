var Sequelize = require('sequelize');


var Conta = {
    CodCont: {type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true },
    Nome: Sequelize.STRING,
    ContaAPagar: Sequelize.INTEGER

}
cliente.hasMany(Conta);
Conta.belongsTo(cliente);

module.exports = Conta;  