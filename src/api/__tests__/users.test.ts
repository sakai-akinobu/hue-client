import nock from 'nock';

import Users from '../users';

describe('src/lights.ts', () => {
  const apiHost = /.*/;

  const api = new Users({
    bridge: 'bridge',
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('create', () => {
    beforeEach(() => {
      nock(apiHost)
        .post(`/api/`)
        .reply(200, {});
    });

    test('200', async () => {
      const res = await api.create('deviceType');
      expect(res).toEqual({});
    });
  });

});
