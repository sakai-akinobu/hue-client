import Base from './base';

export default class Lights extends Base {
  async getAll() {
    return await this.get('/lights');
  }

  async getById(id: string) {
    return await this.get(`/lights/${id}`);
  }

  async discoverNew() {
    return await this.get('/lights/new');
  }

  async updateById(id: string, state: any) {
    return await this.put(`/lights/${id}/state`, state);
  }

  async deleteById(id: string) {
    return await this.delete(`/lights/${id}`);
  }
}
