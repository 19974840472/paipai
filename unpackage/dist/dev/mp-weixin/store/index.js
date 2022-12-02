"use strict";
var common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    "username": "foo",
    "age": 18
  }
});
exports.store = store;
