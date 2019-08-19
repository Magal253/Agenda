var mongoose = require('mongoose');

var moonConta = new mongoose.Schema({
    Nome: {type: String},
    Conta: {type: Number},
    ClientID: mongoose.Schema.Types.ObjectID

});

module.exports = mongoose.model('Conta', moonConta)