"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    text: {
      type: [Array],
      default: common_vendor.index.$u.props.columnNotice.text
    },
    icon: {
      type: String,
      default: common_vendor.index.$u.props.columnNotice.icon
    },
    mode: {
      type: String,
      default: common_vendor.index.$u.props.columnNotice.mode
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.columnNotice.color
    },
    bgColor: {
      type: String,
      default: common_vendor.index.$u.props.columnNotice.bgColor
    },
    fontSize: {
      type: [String, Number],
      default: common_vendor.index.$u.props.columnNotice.fontSize
    },
    speed: {
      type: [String, Number],
      default: common_vendor.index.$u.props.columnNotice.speed
    },
    step: {
      type: Boolean,
      default: common_vendor.index.$u.props.columnNotice.step
    },
    duration: {
      type: [String, Number],
      default: common_vendor.index.$u.props.columnNotice.duration
    },
    disableTouch: {
      type: Boolean,
      default: common_vendor.index.$u.props.columnNotice.disableTouch
    }
  }
};
exports.props = props;
