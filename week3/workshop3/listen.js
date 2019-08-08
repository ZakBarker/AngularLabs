module.exports = function(app, path){
    
    var http = require('http').Server(app);
    let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server -.-');
    console.log('Server listening on: ' + host + 'port:' + port);
});
}