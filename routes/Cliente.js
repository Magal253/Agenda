var client = require('../modelos/mongoClient');

module.exports = function (router){
    router.get('/cliente', function (req,res){

    })

    router.post('/cliente', function(req,res){
        let cli = new client(req.body)
        cli.save(function (err, cli){
            if(err){
                return res.status(400).json(err);
            }
            res.status(200).json(cli);
        })
    })

}