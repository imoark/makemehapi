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
    path: '/login',
    method:'POST', 
    config: {
        handler: (request, reply) => {
            reply('login successful');
        },
        validate: {
            payload: Joi.object({
                isGuest: Joi.boolean().required(),
                username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum()
            }).options({ allowUnknown: true }).without('password', 'accessToken')
        }
    }
});

server.start((err) => {
    if (err) throw err;
});


