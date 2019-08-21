var mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/trabalhoDMongo', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('BD is connected');
});

var Familia = [];

function Famicon(fam){
 //var fam = [];
  for(var x = 0; x < 3/*Math.ceil(Math.random() * 5)*/; x++){
    fam.push(faker.name.findName());

  }
  return fam;
}

var algumSchema = new mongoose.Schema({
  name: Schema.Types.Mixed,
  age: Number,
  dirige: Boolean,
  familia: Familia
});

algumSchema.methods.nome = function () {
    
    console.log('Nome: ' + this.name);
  }

var cidadao = mongoose.model('cidadao', algumSchema);

    algumSchema.methods.nome = function () {
        var greeting =("Nome: " + this.name);
        console.log(greeting);
      }
      
      Familia = Famicon(Familia);
    
    var alguem = new cidadao({ name: makeName(),  age: randNumber(), dirige: trueORfalse(), familia: Familia});
    console.log('Name: '+alguem.name+'\tage: '+alguem.age+'\tDirige: '+alguem.dirige);
    
    alguem.nome();

//algumSchema.add({Motorista: trueORfalse()});

alguem.save(function (err, alguem) {
    if (err) return console.error(err);
    alguem.nome();
  });

  cidadao.find(function (err, cidadao) {
    if (err) return console.error(err);
    console.log(cidadao);
  })

  ///Kitten.find({ name: /^fluff/ }, callback);

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




