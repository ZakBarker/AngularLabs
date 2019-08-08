module.exports = function(app, path){
    app.post('/api/login', function(req, res){
        if(!req.body) {
            return res.sendStatus(400)
        }
        var customer = {};
        customer.name = req.body.name;
        customer.pass = req.body.pass;
        customer.valid = false;
        if(req.body.name == 'Obamo Dank' && req.body.pass == 'lakePacific'){
            customer.valid = true;
        }else if(req.body.name == 'Chad Boom' && req.body.pass == 'Dank'){
            customer.valid = true;
        }
        else if(req.body.name == 'Zee' && req.body.pass == 'Oboe'){
            customer.valid = true;
        }
        else{
            customer.valid = false;
        }
        res.send(customer);
    });
}
