var Sequelize = require('sequelize');
//var Conta = require('conta');
var cliente = require('cliente');

projeto.init({
    CodProj: {type: Sequelize.INTEGER , primaryKey: true, autoIncrement: true },
    EmAnd: Sequelize.BOOLEAN,
    CodCli: Sequelize.cliente
});

class projeto extends Sequelize.Model{
    static cadastroProj(cod){
      this.EmAnd = true;
      this.CodCli = cod;
      this.save().then(function(){
        console.log('funcionou Cliente.js');
      });
    };
  }


projeto.hasOne(cliente);

module.exports = projeto;  