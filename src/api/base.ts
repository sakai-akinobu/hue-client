import * as request from 'request-promise-native';

type Options = {
  bridge: string;
  userName?: string;
};

export default class Base {
  options: Options;

  constructor(options: Options) {
    this.options = options;
  }

  protected getBaseUrl() {
    return `http://${this.options.bridge}/api/${this.options.userName}`;
  }

  async getRequest<ResponseBody>(path: string, queryString?: object): Promise<ResponseBody> {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.get({
      uri,
      qs: queryString,
      json: true,
    });
  }

  async postRequest<ResponseBody>(path: string, body?: object): Promise<ResponseBody> {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.post({
      uri,
      body,
      json: true,
    });
  }

  async putRequest<ResponseBody>(path: string, body?: object): Promise<ResponseBody> {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.put({
      uri,
      body,
      json: true,
    });
  }

  async deleteRequest<ResponseBody>(path: string, queryString?: object): Promise<ResponseBody> {
    const uri = `${this.getBaseUrl()}${path}`;
    return await request.delete({
      uri,
      qs: queryString,
      json: true,
    });
  }
}
