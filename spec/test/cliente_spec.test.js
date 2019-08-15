

var Sequelize = require('sequelize');
/*
var connection1 = new Sequelize('user', 'root', 'masterkey',{
    host:'localhost',
    dialect: 'mysql'
    });
*/

it('nome esta vazio?', function(){
    var cliente = require('../../modelos/cliente');
    let client ={
        Nome     :cliente.Nome,
        InfoID   :cliente.InfoID,
        Desc     :cliente.Desc,
        Metas    :cliente.Metas,
        Gastos   :cliente.Gastos,
        DataNasc :cliente.DataNasc,
        Email    :cliente.Email,
        LinhaGes :cliente.LinhaGes,
        RazSoc   :cliente.RazSoc
    } 
    client.Nome     ='magal';
    client.InfoID   ='alguma info';
    client.Desc     ='nenhuma';
    client.Metas    =10000000;
    client.Gastos   =123456;
    client.DataNasc ='2019/08/23';
    client.Email    ='oi@algum.coin';
    client.LinhaGes =35320000;
    client.RazSoc   ='magal123';

    expect((client.Nome=='')).toBe(false);

})

/*roger that
it('nome esta vazio?', function(){

var client= cliente.build({
    DataNasc :'2019/08/23',
    Desc     :'nenhuma',
    Email    :'oi@algum.coin',
    Gastos   :123456,
    InfoID   :'alguma info',
    LinhaGes :35320000,
    Metas    :10000000,
    Nome     :'magal',
    RazSoc   :'magal123'
})
expect((client.nome=='')).toBe(true);
});
*/

it('nome esta vazio?', function(){
    var cliente = require('../../modelos/cliente');
    let client ={
        Nome     :cliente.Nome,
        InfoID   :cliente.InfoID,
        Desc     :cliente.Desc,
        Metas    :cliente.Metas,
        Gastos   :cliente.Gastos,
        DataNasc :cliente.DataNasc,
        Email    :cliente.Email,
        LinhaGes :cliente.LinhaGes,
        RazSoc   :cliente.RazSoc
    } 
    client.Nome     ='magal';
    client.InfoID   ='alguma info';
    client.Desc     ='nenhuma';
    client.Metas    =10000000;
    client.Gastos   =123456;
    client.DataNasc ='2019/08/23';
    client.Email    ='oi@algum.coin';
    client.LinhaGes =35320000;
    client.RazSoc   ='magal123';

    expect((client.Nome=='magal')).toBe(true);

})
