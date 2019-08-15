var Sequelize = require('sequelize');
/*
class cliente extends Sequelize.Model{
  static cadastro(nome, infoid, desc, metas, gastos, data, email, linhagestao, razsoc){
    this.Nome = nome;
    this.InfoId = infoid;
    this.Desc = desc;
    this.Metas = metas;
    this.Gastos = gastos;
    this.DataNasc = data;
    this.Email = email;
    this.LinhaGes = linhagestao;
    this.RazSoc = razsoc;
    this.save().then(function(){
      console.log('funcionou Cliente.js');
    });
  };
  
}
*/

var cliente = {
  CodCli: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  Nome: Sequelize.STRING,
  InfoId: Sequelize.STRING,
  Desc: Sequelize.STRING,
  Metas: Sequelize.INTEGER,
  Gastos: Sequelize.INTEGER,
  DataNasc: Sequelize.STRING,
  Email: Sequelize.STRING,
  LinhaGes: Sequelize.INTEGER,
  RazSoc: Sequelize.STRING
///////////////////////////////////////////////////////////////////////////////////////////////////
}

/*

cliente.init({
  CodCli: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  Nome: Sequelize.STRING,
  InfoId: Sequelize.STRING,
  Desc: Sequelize.STRING,
  Metas: Sequelize.INTEGER,
  Gastos: Sequelize.INTEGER,
  DataNasc: Sequelize.DATEONLY,
  Email: Sequelize.STRING,
  LinhaGes: Sequelize.INTEGER,
  RazSoc: Sequelize.STRING
}),
*/

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