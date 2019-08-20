const mongoose = require('mongoose');
const faker = require('faker');
const client = require('./modelos/mongoClient');
mongoose.connect('mongobd://localhost/test',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log('BD is connected');
});

/*
for(var x = 0; x<(Math.floor(Math.random()*5)); x++){
    familia.push(makeName());
}
*/
function makeName(num) {
    var usu = '';
    var gambi = 'BCDFGHJKLMNPQRSTVWXYZ';
    var gambi2= 'AEIOU'
    var gambiTam = gambi.length;
    var gambiTam2= gambi2.length;
    //usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
    for ( var i = 0; i < Math.ceil(Math.random() * num); i++ ) {
       usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
       usu += gambi2.charAt(Math.floor(Math.random() * gambiTam2));
    }
    return usu;
}
function makeNum(num) {
    var usu = '';
    var gambi = '0123456789';
    //var gambi2= 'AEIOU'
    var gambiTam = gambi.length;
    //var gambiTam2= gambi2.length;
    //usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
    for ( var i = 0; i < Math.ceil(Math.random() * num); i++ ) {
       usu += gambi.charAt(Math.floor(Math.random() * gambiTam));
       //usu += gambi2.charAt(Math.floor(Math.random() * gambiTam2));
    }
    return usu;
}

var fam = []
//function family(){
    fam.push(faker.name.firstName());
    for(var x = 0; x<Math.ceil(Math.random()*5); x++){
        fam.push(faker.name.firstName());
    }   
//}

var cliente = new client({
    
    Nome: faker.name.findName(),
    InfoID: faker.internet.password(),
    Desc:  faker.lorem.sentence(),
    Custos: makeNum(9),
    familia: fam
    
});

cliente.save(function (err, cliente) {
    if (err) return console.error(err);
    else console.log(cliente)
  });