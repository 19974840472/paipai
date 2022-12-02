"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    name: {
      type: String,
      default: common_vendor.index.$u.props.icon.name
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.icon.color
    },
    size: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.size
    },
    bold: {
      type: Boolean,
      default: common_vendor.index.$u.props.icon.bold
    },
    index: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.index
    },
    hoverClass: {
      type: String,
      default: common_vendor.index.$u.props.icon.hoverClass
    },
    customPrefix: {
      type: String,
      default: common_vendor.index.$u.props.icon.customPrefix
    },
    label: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.label
    },
    labelPos: {
      type: String,
      default: common_vendor.index.$u.props.icon.labelPos
    },
    labelSize: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.labelSize
    },
    labelColor: {
      type: String,
      default: common_vendor.index.$u.props.icon.labelColor
    },
    space: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.space
    },
    imgMode: {
      type: String,
      default: common_vendor.index.$u.props.icon.imgMode
    },
    width: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.width
    },
    height: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.height
    },
    top: {
      type: [String, Number],
      default: common_vendor.index.$u.props.icon.top
    },
    stop: {
      type: Boolean,
      default: common_vendor.index.$u.props.icon.stop
    }
  }
};
exports.props = props;
