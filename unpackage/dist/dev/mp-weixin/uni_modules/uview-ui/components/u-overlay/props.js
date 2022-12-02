"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    show: {
      type: Boolean,
      default: common_vendor.index.$u.props.overlay.show
    },
    zIndex: {
      type: [String, Number],
      default: common_vendor.index.$u.props.overlay.zIndex
    },
    duration: {
      type: [String, Number],
      default: common_vendor.index.$u.props.overlay.duration
    },
    opacity: {
      type: [String, Number],
      default: common_vendor.index.$u.props.overlay.opacity
    }
  }
};
exports.props = props;
