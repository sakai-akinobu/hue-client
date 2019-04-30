import nock from 'nock';

import Lights from '../lights';

describe('src/lights.ts', () => {
  const apiHost = /.*/;
  const userName = 'userName';

  const api = new Lights({
    bridge: 'bridge',
    userName,
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('getAll', () => {
    beforeEach(() => {
      nock(apiHost)
        .get(`/api/${userName}/lights`)
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
        .get(`/api/${userName}/lights/${id}`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.getById(id);
      expect(res).toEqual({});
    });
  });

  describe('discoverNew', () => {
    beforeEach(() => {
      nock(apiHost)
        .get(`/api/${userName}/lights/new`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.discoverNew();
      expect(res).toEqual({});
    });
  });

  describe('renameById', () => {
    const id = '1';

    beforeEach(() => {
      nock(apiHost)
        .put(`/api/${userName}/lights/${id}`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.renameById(id, 'new name');
      expect(res).toEqual({});
    });
  });

  describe('updateById', () => {
    const id = '1';

    beforeEach(() => {
      nock(apiHost)
        .put(`/api/${userName}/lights/${id}/state`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.updateById(id, {});
      expect(res).toEqual({});
    });
  });

  describe('deleteById', () => {
    const id = '1';

    beforeEach(() => {
      nock(apiHost)
        .delete(`/api/${userName}/lights/${id}`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.deleteById(id);
      expect(res).toEqual({});
    });
  });
});
