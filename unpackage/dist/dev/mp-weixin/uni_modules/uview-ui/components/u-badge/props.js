"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    isDot: {
      type: Boolean,
      default: common_vendor.index.$u.props.badge.isDot
    },
    value: {
      type: [Number, String],
      default: common_vendor.index.$u.props.badge.value
    },
    show: {
      type: Boolean,
      default: common_vendor.index.$u.props.badge.show
    },
    max: {
      type: [Number, String],
      default: common_vendor.index.$u.props.badge.max
    },
    type: {
      type: String,
      default: common_vendor.index.$u.props.badge.type
    },
    showZero: {
      type: Boolean,
      default: common_vendor.index.$u.props.badge.showZero
    },
    bgColor: {
      type: [String, null],
      default: common_vendor.index.$u.props.badge.bgColor
    },
    color: {
      type: [String, null],
      default: common_vendor.index.$u.props.badge.color
    },
    shape: {
      type: String,
      default: common_vendor.index.$u.props.badge.shape
    },
    numberType: {
      type: String,
      default: common_vendor.index.$u.props.badge.numberType
    },
    offset: {
      type: Array,
      default: common_vendor.index.$u.props.badge.offset
    },
    inverted: {
      type: Boolean,
      default: common_vendor.index.$u.props.badge.inverted
    },
    absolute: {
      type: Boolean,
      default: common_vendor.index.$u.props.badge.absolute
    }
  }
};
exports.props = props;
