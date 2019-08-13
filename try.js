var Sequelize = require('sequelize');

var connection = new Sequelize('user', 'root', 'masterkey',{
    host:'localhost',
    dialect: 'mysql'
});

var conexao = connection.authenticate()
    .then(function(){
        console.log("Tudo Certo!");
    })
    .catch(function(){
        console.log("FAIL");
    })
    .done();
/*
var numbers = connection.define('numbers', {
    cod: Sequelize.INTEGER,
    number : Sequelize.INTEGER
});
*/
var clientes = connection.define('clientes', {
    user: Sequelize.STRING,
    senha: Sequelize.INTEGER,
    email: Sequelize.STRING

})
/*
function randNumber(){
    var codigo = Math.floor(Math.random() * 5000);
    var numero = Math.floor(Math.random() * 11000);
    var lista = [codigo,numero];
    return lista;
}
*/
function makeusu() {
    var usu = '';
    var gambi = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var gambiTam = gambi.length;
    for ( var i = 0; i < 8; i++ ) {
       usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
    }
    var senha =Math.floor(Math.random() * 99999999);
    var email = usu.toLowerCase() + '@gmail.com';
    var lista = [usu,senha,email];

    return lista;
 }
/*
function insert(codigo, numero){
    connection.sync().then(function(){
        numbers.create({
            cod: codigo,
            number: numero
        });
    });
}
*/
function insert(usuario, key, mail){
    connection.sync().then(function(){
        clientes.create({
            user: usuario,
            senha: key,
            email: mail
        });
    });
}
/*
for(var i = 0; i<100 ; i++){
    var list = makeusu();
    console.log('usu: ' + list[0]+ '\tsenha: '+list[1]+'\t\temail: '+list[2]+'\n'); 
    insert(list[0],list[1],list[2]);
}

*/


connection.sync().then(function(){
   /* clientes.findAll({attributes: ['user', 'senha']}).then(function(clientes){
        console.log(clientes.data());
    });*/
    sequelize.query('SELECT name FROM clientes')
    //console.log(sequelize.query('SELECT name FROM clientes'));
});
