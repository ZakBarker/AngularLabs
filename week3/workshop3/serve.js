var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/practice'));

app.listen(3000, whistle());

function whistle(){
    console.log('Server up and Running');
}

app.get('/', function(req, res){
    res.sendFile(__dirname + '/practice/form.html');
});

app.post('/api/login', function(req, res){
    if(!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    if(req.body.email == 'abc@com.au' && req.body.upwd == '123') {
        customer.valid = true;
    }else{
        customer.valid = false;
    }
    res.send(customer);
});