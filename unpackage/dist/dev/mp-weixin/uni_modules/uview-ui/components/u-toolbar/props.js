"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    show: {
      type: Boolean,
      default: common_vendor.index.$u.props.toolbar.show
    },
    cancelText: {
      type: String,
      default: common_vendor.index.$u.props.toolbar.cancelText
    },
    confirmText: {
      type: String,
      default: common_vendor.index.$u.props.toolbar.confirmText
    },
    cancelColor: {
      type: String,
      default: common_vendor.index.$u.props.toolbar.cancelColor
    },
    confirmColor: {
      type: String,
      default: common_vendor.index.$u.props.toolbar.confirmColor
    },
    title: {
      type: String,
      default: common_vendor.index.$u.props.toolbar.title
    }
  }
};
exports.props = props;
