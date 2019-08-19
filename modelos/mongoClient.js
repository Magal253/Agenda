var mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('BD is connected');
});
*/
var moonClient = new mongoose.Schema({
    Nome: { type: String},
    InfoID: { type: String},
    Desc: { type: String},
    Custos: { type: Number}
});

module.exports = mongoose.model('Client', moonClient);