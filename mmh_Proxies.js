const Hapi = require('hapi');
const server = new Hapi.Server();
// const Path = require('path');
// const Inert = require('inert');
// const Vision = require('vision');
const H2o2 = require('h2o2');


server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
    

server.register(H2o2, function (err) {
    if (err) throw err;
});

server.route({
    path: '/proxy',
    method:'GET', 
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
});


server.start((err) => {
    if (err) throw err;
});


