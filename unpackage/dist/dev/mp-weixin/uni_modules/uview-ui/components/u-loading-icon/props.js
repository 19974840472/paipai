"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    show: {
      type: Boolean,
      default: common_vendor.index.$u.props.loadingIcon.show
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.loadingIcon.color
    },
    textColor: {
      type: String,
      default: common_vendor.index.$u.props.loadingIcon.textColor
    },
    vertical: {
      type: Boolean,
      default: common_vendor.index.$u.props.loadingIcon.vertical
    },
    mode: {
      type: String,
      default: common_vendor.index.$u.props.loadingIcon.mode
    },
    size: {
      type: [String, Number],
      default: common_vendor.index.$u.props.loadingIcon.size
    },
    textSize: {
      type: [String, Number],
      default: common_vendor.index.$u.props.loadingIcon.textSize
    },
    text: {
      type: [String, Number],
      default: common_vendor.index.$u.props.loadingIcon.text
    },
    timingFunction: {
      type: String,
      default: common_vendor.index.$u.props.loadingIcon.timingFunction
    },
    duration: {
      type: [String, Number],
      default: common_vendor.index.$u.props.loadingIcon.duration
    },
    inactiveColor: {
      type: String,
      default: common_vendor.index.$u.props.loadingIcon.inactiveColor
    }
  }
};
exports.props = props;
