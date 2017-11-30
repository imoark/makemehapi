const Fs = require('fs');
const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');
// const Inert = require('inert');
// const Vision = require('vision');
// const H2o2 = require('h2o2');
const Rot13 = require('rot13-transform');


server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
    

server.route({
    path: '/',
    method:'GET', 
    config: {
        handler: (request, reply) => {
            var thisfile = Fs.createReadStream(Path.join(__dirname, 'text.txt'));
            reply(thisfile.pipe(Rot13()));
        }
    }
});

server.start((err) => {
    if (err) throw err;
});


