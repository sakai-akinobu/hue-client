import Base from './base';

export default class Lights extends Base {
  async getAll() {
    return await this.getRequest('/lights');
  }

  async getById(id: string) {
    return await this.getRequest(`/lights/${id}`);
  }

  async discoverNew() {
    return await this.getRequest('/lights/new');
  }

  async renameById(id: string, newName: string) {
    return await this.putRequest(`/lights/${id}`, {name: newName});
  }

  async updateById(id: string, state: any) {
    return await this.putRequest(`/lights/${id}/state`, state);
  }

  async deleteById(id: string) {
    return await this.deleteRequest(`/lights/${id}`);
  }
}
