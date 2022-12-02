"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    show: {
      type: Boolean,
      default: common_vendor.index.$u.props.transition.show
    },
    mode: {
      type: String,
      default: common_vendor.index.$u.props.transition.mode
    },
    duration: {
      type: [String, Number],
      default: common_vendor.index.$u.props.transition.duration
    },
    timingFunction: {
      type: String,
      default: common_vendor.index.$u.props.transition.timingFunction
    }
  }
};
exports.props = props;
