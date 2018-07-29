'use strict';

const SetupEndpoint = require('./setup/');

module.exports = SetupEndpoint({
    name: 'sitemaps',
    urls: [
        {
            params: '/options',
            requests: [{
                method: 'GET',
                response: '/response-files/iSitemaps.json'
            }]
        }
    ]
});
