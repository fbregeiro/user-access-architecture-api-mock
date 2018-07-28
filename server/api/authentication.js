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
        }
    ]
});
