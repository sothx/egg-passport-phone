'use strict';

const mock = require('egg-mock');

describe('test/passport-phone.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/passport-phone-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, passportPhone')
      .expect(200);
  });
});
