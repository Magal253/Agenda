var mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/trabalhoDMongo', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('BD is connected');
});
///////////////////////////////////////suport of the user/////////////////////////
var Familia = [];

function Famicon(fam){
 //var fam = [];
  for(var x = 0; x < 3/*Math.ceil(Math.random() * 5)*/; x++){
    fam.push(faker.name.findName());

  }
  return fam;
}
///////////////////////////////////end of suport of user ////////////////////
///////////////////////usuario//////////////////////////////////////////////
var algumSchema = new mongoose.Schema({
  name: Schema.Types.Mixed,
  age: Number,
  dirige: Boolean,
  familia: Familia
});
//////////////////end usuario//////////////////////////////////////////////
//algumSchema.methods.nome = function () {
    
  //  console.log('Nome: ' + this.name);
  //}
/////////////////////////set the user///////////////////////////////////////
var cidadao = mongoose.model('cidadao', algumSchema);

    algumSchema.methods.nome = function () {
        var greeting =("Nome: " + this.name);
        console.log(greeting);
      }
      
      Familia = Famicon(Familia);
    
    var alguem = new cidadao({ name: makeName(),  age: randNumber(), dirige: trueORfalse(), familia: Familia});

    console.log('Name: '+alguem.name+'\tage: '+alguem.age+'\tDirige: '+alguem.dirige);
    
    alguem.nome();
///////////////////////////end set the user/////////////////////////////////
//algumSchema.add({Motorista: trueORfalse()});
/////////////////////integração/////////////////////////////////////////////
alguem.save(function (err, alguem) {
    if (err) return console.error(err);
    alguem.nome();
  });

  cidadao.find(function (err, cidadao) {
    if (err) return console.error(err);
    console.log(cidadao);
  })
///////////////////end integração////////////////////////////////////////////////
//Kitten.find({ name: /^fluff/ }, callback);
//////////////////////////////////////////rand insert/////////////////////////
function trueORfalse(){
  var numero = Math.floor(Math.random() * 1);
  if(numero == 0) return false;
  else return true;
}

function makeName() {
    var usu = '';
    var gambi = 'BCDFGHJKLMNPQRSTVWXYZ';
    var gambi2= 'AEIOU'
    var gambiTam = gambi.length;
    var gambiTam2= gambi2.length;
    //usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
    for ( var i = 0; i < Math.ceil(Math.random() * 4); i++ ) {
       usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
       usu += gambi2.charAt(Math.floor(Math.random() * gambiTam2));
    }



    return usu;
 }

function randNumber(){
   // var codigo = Math.floor(Math.random() * 5000);
    var numero = Math.floor(Math.random() * 8);
    //var lista = [codigo,numero];
    return numero;
}
////////////////////////////////////////////end rand insert///////////////////////////////////



