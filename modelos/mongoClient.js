var mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('BD is connected');
});
*/



var familia = [];

var moonClient = new mongoose.Schema({
    Nome: { type: String},
    InfoID: { type: String},
    Desc: { type: String},
    Custos: { type: Number},
    familiares: familia,
    CriadoEm: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Client', moonClient);