import nock from 'nock';

import Scenes from '../scenes';

describe('src/scenes.ts', () => {
  const apiHost = /.*/;
  const userName = 'userName';

  const api = new Scenes({
    bridge: 'bridge',
    userName,
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('getAll', () => {
    beforeEach(() => {
      nock(apiHost)
        .get(`/api/${userName}/scenes`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.getAll();
      expect(res).toEqual({});
    });
  });

  describe('getById', () => {
    const id = '1';

    beforeEach(() => {
      nock(apiHost)
        .get(`/api/${userName}/scenes/${id}`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.getById(id);
      expect(res).toEqual({});
    });
  });

  describe('create', () => {
    beforeEach(() => {
      nock(apiHost)
        .post(`/api/${userName}/scenes`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.create({});
      expect(res).toEqual({});
    });
  });

  describe('updateLightStateById', () => {
    const sceneId = '1';
    const lightId = '2';

    beforeEach(() => {
      nock(apiHost)
        .put(`/api/${userName}/scenes/${sceneId}/lightstates/${lightId}`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.updateLightStateById(sceneId, lightId, {});
      expect(res).toEqual({});
    });
  });

  describe('deleteById', () => {
    const id = '1';

    beforeEach(() => {
      nock(apiHost)
        .delete(`/api/${userName}/scenes/${id}`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.deleteById(id);
      expect(res).toEqual({});
    });
  });

  describe('recall', () => {
    const groupId = '1';
    const sceneId = '2';

    beforeEach(() => {
      nock(apiHost)
        .put(`/api/${userName}/groups/${groupId}/action`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.recall(groupId, sceneId);
      expect(res).toEqual({});
    });
  });
});
