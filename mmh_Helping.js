const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');
// const Inert = require('inert');
const Vision = require('vision');
// const H2o2 = require('h2o2');


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
        view: 'template.html'
    }
});

server.views({
    path: Path.join(__dirname, 'templates'),
    engines: {
        html: require('handlebars')
    },
    helpersPath:  Path.join(__dirname, 'helpers')
});


server.start((err) => {
    if (err) throw err;
});


