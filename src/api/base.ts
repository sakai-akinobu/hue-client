import * as request from 'request-promise-native';

type Options = {
  bridge: string;
  userName: string;
};

export default class Base {
  options: Options;

  constructor(options: Options) {
    this.options = options;
  }

  private getBaseUrl() {
    return `http://${this.options.bridge}/api/${this.options.userName}`;
  }

  async get(path: string, queryString?: object) {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.get({
      uri,
      qs: queryString,
      json: true,
    });
  }

  async post(path: string, body?: object) {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.post({
      uri,
      body,
      json: true,
    });
  }

  async put(path: string, body?: object) {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.put({
      uri,
      body,
      json: true,
    });
  }

  async delete(path: string, queryString?: object) {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.delete({
      uri,
      qs: queryString,
      json: true,
    });
  }
}
