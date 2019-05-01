import Base from '../base';

export default class Scenes extends Base {
  async getAll() {
    return await this.getRequest('/scenes');
  }

  async getById(id: string) {
    return await this.getRequest(`/scenes/${id}`);
  }

  async create(state: any) {
    return await this.postRequest('/scenes', state);
  }

  async updateLightStateById(sceneId: string, lightId :string, state: any) {
    return await this.putRequest(`/scenes/${sceneId}/lightstates/${lightId}`, state);
  }

  async deleteById(id: string) {
    return await this.deleteRequest(`/scenes/${id}`);
  }

  async recall(groupId: string, sceneId: string) {
    return await this.putRequest(`/groups/${groupId}/action`, {scene: sceneId});
  }
}
