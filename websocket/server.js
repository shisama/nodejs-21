var server = require('ws').Server;
var s = new server({port:9000});

s.on('connection',function(ws){

    ws.on('message',function(message){
        console.log("Received: "+message);
    });

    ws.on('close',function(){
        console.log('Closed');
    });

});