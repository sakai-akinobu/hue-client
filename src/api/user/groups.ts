import Base from '../base';

export default class Groups extends Base {
  async getAll() {
    return await this.getRequest('/groups');
  }

  async getById(id: string) {
    return await this.getRequest(`/groups/${id}`);
  }

  async create(state: any) {
    return await this.postRequest('/groups', state);
  }

  async updateById(id: string, state: any) {
    return await this.putRequest(`/groups/${id}/action`, state);
  }

  async deleteById(id: string) {
    return await this.deleteRequest(`/groups/${id}`);
  }
}
