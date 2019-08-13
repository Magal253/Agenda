var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

/*function conn(){
  new Sequelize('user', 'root', 'masterkey',{
  host:'localhost',
  dialect: 'mysql'
  });
}*/

//router.post('/login', passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' }));
///////////////////////////////////////////////////////////////////////////
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//////////////////////////////////////////////////////////////////////
router.post('/', function(req, res, next) {
  //////////////////////////////////////////////////////////////////////

  var connection1 = new Sequelize('user', 'root', 'masterkey',{
    host:'localhost',
    dialect: 'mysql'
    });;
  ///////////////////////////////////////////////////////////////////////

  var clienteM = require('../modelos/cliente');

  var cliente = connection1.define('cliente', {
    user: clienteM.usuario,
    senha: clienteM.senha,
    email: clienteM.email

});

  console.log('Usuario: '+ req.body.username +'\nSenha: '+ req.body.key +'\nEmail: '+ req.body.email+'/');
  connection1.sync().then(function(){
    cliente.create({
      user: req.body.username,
      senha: req.body.key,
      email: req.body.email
    });
  }).then(  console.log('////////////////////////////////////////////////////////////////// \n' +typeof cliente.user+'\n///////////////////////////////////////////////////'));

  res.send('V');

/////////////////////////////////////////////////////////////////////////////
});


router.post('/attSenha', function(req, res, next) {
  var users = require('../modelos/users');
  console.log(users);
  console.log("body\n"+JSON.stringify(req.body));
  var name = req.body.username;
  console.log(" Para a atualização da conta foi recebido o: "+name);
  console.log("==========nomes no array============");
  var encontrado = false;
  var index;
  for(let i in users){
    var nome = users[i].nome;
    console.log(nome);
    if(name==nome){
      encontrado = true;
      index = i;
      break;
    }
  }

  if(encontrado == false){
    console.log("============usuario não encontrado==================");
    console.log(users);
    //users.push(user);
    res.send('X');
  }else{
    console.log("index");
    users[index].senha = req.body.key;
      //////////////////////////////////////////////////////////////////////////////////
      res.send('V');
  }
  
});


router.post('/login', function(req, res, next){
  
  var users = require('../modelos/users');
  //console.log(users);
  //console.log("body\n"+JSON.stringify(req.body));
  var name = req.body.user;
  //console.log("recebido: "+name);
  console.log("==========gritos do array============");
  var encontrado = false;
  var index;
  for(let i in users){
    var nome = users[i].nome;

    console.log("Nome dentro do array= "+nome +" recebido da tela= "+name+
    "\nsenha d'conta: "+users[i].senha)+" Senha Informada: "+req.body.senha;
     
    if((name==nome)&&(req.body.senha==users[i].senha)){
      encontrado = true;
      index = i;
      break;
    }
  }

  if(encontrado == true){
    console.log("usuario e senha validos");
    
    res.send({nome: oi, URL: 'http://localhost:3000/index'});

  }else{
    console.log("usuario e senha incompativeis ou não existente");
    res.send('X');

  }
  
});

module.exports = router;
