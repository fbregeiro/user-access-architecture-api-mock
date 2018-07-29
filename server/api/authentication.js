'use strict';

const SetupEndpoint = require('./setup/');

module.exports = SetupEndpoint({
    name: 'authentication',
    urls: [
        {
            params: '/login',
            requests: [{
                method: 'POST',
                response: '/response-files/iLoginResponse.json'
            }]
        },
        {
            params: '/reset-password',
            requests: [{
                method: 'POST',
                response: {},
                statusCode: 200
            }]
        },
        {
            params: '/new-password',
            requests: [{
                method: 'PUT',
                response: {},
                statusCode: 200
            }]
        }
    ]
});
