import nock from 'nock';

import Groups from '../groups';

describe('src/lights.ts', () => {
  const apiHost = /.*/;
  const userName = 'userName';

  const api = new Groups({
    bridge: 'bridge',
    userName,
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('getAll', () => {
    beforeEach(() => {
      nock(apiHost)
        .get(`/api/${userName}/groups`)
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
        .get(`/api/${userName}/groups/${id}`)
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
        .post(`/api/${userName}/groups`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.create({});
      expect(res).toEqual({});
    });
  });

  describe('updateById', () => {
    const id = '1';

    beforeEach(() => {
      nock(apiHost)
        .put(`/api/${userName}/groups/${id}/action`)
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
        .delete(`/api/${userName}/groups/${id}`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.deleteById(id);
      expect(res).toEqual({});
    });
  });
});
