"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    text: {
      type: String,
      default: common_vendor.index.$u.props.rowNotice.text
    },
    icon: {
      type: String,
      default: common_vendor.index.$u.props.rowNotice.icon
    },
    mode: {
      type: String,
      default: common_vendor.index.$u.props.rowNotice.mode
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.rowNotice.color
    },
    bgColor: {
      type: String,
      default: common_vendor.index.$u.props.rowNotice.bgColor
    },
    fontSize: {
      type: [String, Number],
      default: common_vendor.index.$u.props.rowNotice.fontSize
    },
    speed: {
      type: [String, Number],
      default: common_vendor.index.$u.props.rowNotice.speed
    }
  }
};
exports.props = props;
