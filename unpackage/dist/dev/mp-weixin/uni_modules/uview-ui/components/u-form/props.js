"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    model: {
      type: Object,
      default: common_vendor.index.$u.props.form.model
    },
    rules: {
      type: [Object, Function, Array],
      default: common_vendor.index.$u.props.form.rules
    },
    errorType: {
      type: String,
      default: common_vendor.index.$u.props.form.errorType
    },
    borderBottom: {
      type: Boolean,
      default: common_vendor.index.$u.props.form.borderBottom
    },
    labelPosition: {
      type: String,
      default: common_vendor.index.$u.props.form.labelPosition
    },
    labelWidth: {
      type: [String, Number],
      default: common_vendor.index.$u.props.form.labelWidth
    },
    labelAlign: {
      type: String,
      default: common_vendor.index.$u.props.form.labelAlign
    },
    labelStyle: {
      type: Object,
      default: common_vendor.index.$u.props.form.labelStyle
    }
  }
};
exports.props = props;
