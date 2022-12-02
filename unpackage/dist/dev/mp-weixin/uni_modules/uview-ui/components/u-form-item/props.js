"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    label: {
      type: String,
      default: common_vendor.index.$u.props.formItem.label
    },
    prop: {
      type: String,
      default: common_vendor.index.$u.props.formItem.prop
    },
    borderBottom: {
      type: [String, Boolean],
      default: common_vendor.index.$u.props.formItem.borderBottom
    },
    labelWidth: {
      type: [String, Number],
      default: common_vendor.index.$u.props.formItem.labelWidth
    },
    rightIcon: {
      type: String,
      default: common_vendor.index.$u.props.formItem.rightIcon
    },
    leftIcon: {
      type: String,
      default: common_vendor.index.$u.props.formItem.leftIcon
    },
    required: {
      type: Boolean,
      default: common_vendor.index.$u.props.formItem.required
    },
    leftIconStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.formItem.leftIconStyle
    }
  }
};
exports.props = props;
