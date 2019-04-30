import Base from './base';

export default class Users extends Base {
  protected getBaseUrl() {
    return `http://${this.options.bridge}/api`;
  }

  async create(deviceType: string) {
    return await this.postRequest('/', {devicetype: deviceType});
  }
}
