"use strict";

exports.__esModule = true;
exports.default = void 0;

var logPageView = function logPageView(location) {
  var splitLocation = location.pathname.split('#');
  var trimLocation = splitLocation.splice(0, 1);

  if (splitLocation.length) {
    splitLocation = splitLocation.join('');
    return mParticle.logPageView(trimLocation, {
      hashValue: splitLocation
    });
  }

  return mParticle.logPageView(location.pathname);
};

var _default = logPageView;
exports.default = _default;