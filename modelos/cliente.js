var Sequelize = require('sequelize');

class cliente extends Sequelize.Model{}

cliente.init({
  CodCli: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  Nome: Sequelize.STRING,
  CNPJ: Sequelize.STRING,
  Desc: Sequelize.STRING,
  Metas: Sequelize.INTEGER,
  Gastos: Sequelize.INTEGER,


  static cadastro(nome, cnpj, desc, metas, gastos){
    this.Nome = nome;
    this.CNPJ = cnpj;
    this.Desc = desc;
    this.Metas = metas;
    this.Gastos = gastos;
    this.save().then(function(){
      console.log('funcionou');
    });
  },
  static metaAtingida(Continue){
    
  }
}),

/*
function setClient(){
    connection.define('cliente',{
    id_usu: {type: Sequelize.INTEGER, primaryKey: true},
    usuario: {type: Sequelize.STRING, unique: true, validate: { 
      notNull: true
    }},
    senha : {type: Sequelize.STRING, validate: { 
      notNull: true
    }},
    email: {type: Sequelize.STRING, validate: { 
      isEmail: true,
      notNull: true
    }}

  });
}
*/

module.exports = cliente;