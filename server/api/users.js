'use strict';

const SetupEndpoint = require('./setup/');

module.exports = SetupEndpoint({
    name: 'users',
    urls: [
        {
            params: '/status/{is_active?}',
            requests: [{
                method: 'GET',
                response: '/response-files/iUsers.json'
            }]
        },
        {
            params: '/{id}',
            requests: [{
                method: 'GET',
                response: '/response-files/iUser.json'
            }]
        },
        {
            params: '/invitation',
            requests: [{
                method: 'POST',
                response: '/response-files/iUser.json'
            }]
        },
        {
            requests: [{
                method: 'PUT',
                response: '/response-files/iUser.json'
            }]
        },
        {
            params: '/activation',
            requests: [{
                method: 'PUT',
                response: {}
            }]
        }
    ]
});
