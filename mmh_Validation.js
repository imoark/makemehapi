// const Fs = require('fs');
const Hapi = require('hapi');
const server = new Hapi.Server();
// const Path = require('path');
// const Inert = require('inert');
// const Vision = require('vision');
// const H2o2 = require('h2o2');
// const Rot13 = require('rot13-transform');

const Joi = require('joi');



server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
    

server.route({
    path: '/chickens/{breed}',
    method:'GET', 
    config: {
        handler: (request, reply) => {
            reply('You asked for the chicken ' + request.params.breed);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

server.start((err) => {
    if (err) throw err;
});


