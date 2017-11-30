const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');
// const Inert = require('inert');
const Vision = require('vision');


server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
    

server.register(Vision, function (err) {
    if (err) throw err;
});

server.route({
    path: '/',
    method:'GET', 
    handler: {
        view: 'index.html'
    }
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.start((err) => {
    if (err) throw err;
});


