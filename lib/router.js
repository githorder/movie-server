module.exports = class Router {
  constructor() {
    this.endpoints = {};
  }

  _request(method = 'GET', path = '/', handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }

    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`${method} to ${path} already exists`);
    }

    endpoint[method] = handler;
  }

  get(path, handler) {
    this._request('GET', path, handler);
  }

  post(path, handler) {
    this._request('POST', path, handler);
  }

  put(path, handler) {
    this._request('PUT', path, handler);
  }

  delete(path, handler) {
    this._request('DELETE', path, handler);
  }
};
