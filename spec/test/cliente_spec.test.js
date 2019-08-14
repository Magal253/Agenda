var client = require('../../modelos/cliente');
var Sequelize = require('sequelize');

it('nome esta vazio?', function(){
    client.DataNasc ='2019/08/23';
    client.Desc     ='nenhuma';
    client.Email    ='oi@algum.coin';
    client.Gastos   =123456;
    client.InfoID   ='alguma info';
    client.LinhaGes =35320000;
    client.Metas    =10000000;
    client.Nome     ='magal';
    client.RazSoc   ='magal123';
}).expect(client.nome).toBe('');


it('o nome é magal?', function(){
    client.DataNasc ='2019/08/23';
    client.Desc     ='nenhuma';
    client.Email    ='oi@algum.coin';
    client.Gastos   =123456;
    client.InfoID   ='alguma info';
    client.LinhaGes =35320000;
    client.Metas    =10000000;
    client.Nome     ='magal';
    client.RazSoc   ='magal123';
}).expect(client.nome).toBe('magal');