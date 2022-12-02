"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    mode: {
      type: String,
      default: common_vendor.index.$u.props.backtop.mode
    },
    icon: {
      type: String,
      default: common_vendor.index.$u.props.backtop.icon
    },
    text: {
      type: String,
      default: common_vendor.index.$u.props.backtop.text
    },
    duration: {
      type: [String, Number],
      default: common_vendor.index.$u.props.backtop.duration
    },
    scrollTop: {
      type: [String, Number],
      default: common_vendor.index.$u.props.backtop.scrollTop
    },
    top: {
      type: [String, Number],
      default: common_vendor.index.$u.props.backtop.top
    },
    bottom: {
      type: [String, Number],
      default: common_vendor.index.$u.props.backtop.bottom
    },
    right: {
      type: [String, Number],
      default: common_vendor.index.$u.props.backtop.right
    },
    zIndex: {
      type: [String, Number],
      default: common_vendor.index.$u.props.backtop.zIndex
    },
    iconStyle: {
      type: Object,
      default: common_vendor.index.$u.props.backtop.iconStyle
    }
  }
};
exports.props = props;
