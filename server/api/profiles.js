'use strict';

const SetupEndpoint = require('./setup/');

module.exports = SetupEndpoint({
    name: 'profiles',
    urls: [
        {
            params: '/status/{is_active?}',
            requests: [{
                method: 'GET',
                response: '/response-files/iProfiles.json'
            }]
        },
        {
            params: '/{id}',
            requests: [{
                method: 'GET',
                response: '/response-files/iProfile.json'
            }]
        },
        {
            requests: [{
                method: ['POST', 'PUT'],
                response: '/response-files/iProfile.json'
            }]
        }
    ]
});
