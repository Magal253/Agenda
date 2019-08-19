var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('BD is connected');
});

var kittySchema = new mongoose.Schema({
    name: String,
    age: Number
});

kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

var Kitten = mongoose.model('Kitten', kittySchema);
/*
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
*/
//for(var x = 0; x < 10;x++){
//function criar(){
    kittySchema.methods.speak = function () {
        var greeting = this.name
          ? "Meow name is " + this.name
          : "I don't have a name";
        console.log(greeting);
      }
    
    var fluffy = new Kitten({ name: makeName(),  age: randNumber()});
    
    fluffy.speak();   
//}


fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

  ///Kitten.find({ name: /^fluff/ }, callback);



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

















