const Client = require('node-rest-client').Client;

module.exports = {
  getJson(url, options) {
    return new Promise(resolve => {
      const client = new Client();
      client.get(url, options, bufferResponse => {
        resolve(bufferResponse);
      });
    }).catch(onError);
  },
  postJson(url, options) {
    return new Promise(resolve => {
      const client = new Client();
      client.post(url, options, response => {
        resolve(response);
      });
    }).catch(onError);
  },
  putJson(url, options) {
    return new Promise(resolve => {
      const client = new Client();
      client.put(url, options, response => {
        resolve(response);
      });
    }).catch(onError);
  }
};

function onError(err) {
  console.error('http failed with error: ', err);
}

function unwrapJson(response) {
  if (response instanceof Buffer) {
    const json = String(response);
    return JSON.parse(json);
  }
  console.log('The account creation actual response is ', String(response));
  return response;
}
