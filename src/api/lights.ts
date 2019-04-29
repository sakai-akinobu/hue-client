import Base from './base';

export default class Lights extends Base {
  async getAll() {
    return await this.get('/lights');
  }

  async getById(id: string) {
    return await this.get(`/lights/${id}`);
  }

  async updateById(id: string, state: any) {
    return await this.put(`/lights/${id}/state`, state);
  }
}
