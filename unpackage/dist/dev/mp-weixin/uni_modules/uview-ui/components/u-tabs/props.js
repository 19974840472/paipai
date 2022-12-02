"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    duration: {
      type: Number,
      default: common_vendor.index.$u.props.tabs.duration
    },
    list: {
      type: Array,
      default: common_vendor.index.$u.props.tabs.list
    },
    lineColor: {
      type: String,
      default: common_vendor.index.$u.props.tabs.lineColor
    },
    activeStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.tabs.activeStyle
    },
    inactiveStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.tabs.inactiveStyle
    },
    lineWidth: {
      type: [String, Number],
      default: common_vendor.index.$u.props.tabs.lineWidth
    },
    lineHeight: {
      type: [String, Number],
      default: common_vendor.index.$u.props.tabs.lineHeight
    },
    lineBgSize: {
      type: String,
      default: common_vendor.index.$u.props.tabs.lineBgSize
    },
    itemStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.tabs.itemStyle
    },
    scrollable: {
      type: Boolean,
      default: common_vendor.index.$u.props.tabs.scrollable
    },
    current: {
      type: [Number, String],
      default: common_vendor.index.$u.props.tabs.current
    },
    keyName: {
      type: String,
      default: common_vendor.index.$u.props.tabs.keyName
    }
  }
};
exports.props = props;
