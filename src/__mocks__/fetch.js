export default function(requestUrl) {
    const responses = {
        'public': { message: "TEST Hello, world!"},
    };

    const baseUrl = requestUrl.substr(requestUrl.indexOf("/api/") + 5);
    const response = responses[baseUrl];

    return Promise.resolve({
        json: () =>
            Promise.resolve(response)
    })


}
