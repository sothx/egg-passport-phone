'use strict';

const debug = require('debug')('egg-passport-local');
const PhoneStrategy = require('phone-local').Strategy;


module.exports = app => {
  const config = app.config.passportPhone;
  config.passReqToCallback = true;

  app.passport.use(new PhoneStrategy(config, (req, phoneNumber, verifyCode, done) => {
    // format user
    const user = {
      provider: 'phone',
      phoneNumber,
      verifyCode,
    };
    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
