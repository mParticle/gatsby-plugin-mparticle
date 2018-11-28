"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRouteUpdate = void 0;

var _index = _interopRequireDefault(require("./index"));

var onRouteUpdate = function onRouteUpdate(_ref, options) {
  var location = _ref.location;

  if (options.logPageViews) {
    return (0, _index.default)(location);
  }
};

exports.onRouteUpdate = onRouteUpdate;