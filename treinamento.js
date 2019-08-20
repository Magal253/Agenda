var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/show', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('BD is connected');
});

var algumSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dirige: false
});

algumSchema.methods.nome = function () {
    
    console.log('Nome: ' + this.name);
  }

var cidadao = mongoose.model('cidadao', algumSchema);

    algumSchema.methods.nome = function () {
        var greeting =("Nome: " + this.name);
        console.log(greeting);
      }
    
    var alguem = new cidadao({ name: makeName(),  age: randNumber()});
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
/*
function trueORfalse(){
  var numero = Math.floor(Math.random() * 1);
  if(numero == 0) return false;
  else return true;
}
*/
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

















