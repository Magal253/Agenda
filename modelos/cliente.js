var Sequelize = require('sequelize');

/*
function setClient(){
    connection.define('cliente',{
    usuario: Sequelize.STRING, 
    senha : Sequelize.STRING,
    email: Sequelize.STRING
  });
}
*/

var clienteM = {
  usuario: Sequelize.STRING ,
  senha: Sequelize.STRING,
  email: Sequelize.STRING
}

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

module.exports = clienteM;