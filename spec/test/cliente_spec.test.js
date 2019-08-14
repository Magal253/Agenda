var client = require('../../modelos/cliente');
var Sequelize = require('sequelize');

var connection1 = new Sequelize('user', 'root', 'masterkey',{
    host:'localhost',
    dialect: 'mysql'
    });;

it('nome esta vazio?', function(){

  var cliente = connection1.define('cliente', {
    DataNasc =client.DataNasc,
    Desc     =client.Desc,
    Email    =client.Email,
    Gastos   =client.Gastos,
    InfoID   =client.InfoID,
    LinhaGes =client.LinhaGes,
    Metas    =client.Metas,
    Nome     =client.Nome,
    RazSoc   =client.RazSoc      

});
    cliente.DataNasc ='2019/08/23';
    cliente.Desc     ='nenhuma';
    cliente.Email    ='oi@algum.coin';
    cliente.Gastos   =123456;
    cliente.InfoID   ='alguma info';
    cliente.LinhaGes =35320000;
    cliente.Metas    =10000000;
    cliente.Nome     ='magal';
    cliente.RazSoc   ='magal123';
}).expect(cliente.nome).toBe('');


it('o nome é magal?', function(){
 
    var cliente = connection1.define('cliente', {
        DataNasc =client.DataNasc,
        Desc     =client.Desc,
        Email    =client.Email,
        Gastos   =client.Gastos,
        InfoID   =client.InfoID,
        LinhaGes =client.LinhaGes,
        Metas    =client.Metas,
        Nome     =client.Nome,
        RazSoc   =client.RazSoc      
    
    });
        cliente.DataNasc ='2019/08/23';
        cliente.Desc     ='nenhuma';
        cliente.Email    ='oi@algum.coin';
        cliente.Gastos   =123456;
        cliente.InfoID   ='alguma info';
        cliente.LinhaGes =35320000;
        cliente.Metas    =10000000;
        cliente.Nome     ='magal';
        cliente.RazSoc   ='magal123';
}).expect(client.nome).toBe('magal');