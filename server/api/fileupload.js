'use strict';

const SetupEndpoint = require('./setup/');

module.exports = SetupEndpoint({
    name: 'file-upload',
    urls: [
        {
            requests: [{
                method: 'POST',
                response: '/response-files/iFileUploadResponse.json'
            }]
        }
    ]
});
