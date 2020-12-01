import React, { Component } from 'react';

export class MockApiClient {
    constructor() {
        this.responses = {
            'public': '{"message":"Hello, world!"}',
        };
    }

    httpGet = (requestUrl) => {
        return new promise((resolve, reject) => {
            resolve(this.responses[requestUrl]);
        });
    }

}


