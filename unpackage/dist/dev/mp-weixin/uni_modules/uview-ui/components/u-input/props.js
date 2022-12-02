"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    value: {
      type: [String, Number],
      default: common_vendor.index.$u.props.input.value
    },
    type: {
      type: String,
      default: common_vendor.index.$u.props.input.type
    },
    fixed: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.fixed
    },
    disabled: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.disabled
    },
    disabledColor: {
      type: String,
      default: common_vendor.index.$u.props.input.disabledColor
    },
    clearable: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.clearable
    },
    password: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.password
    },
    maxlength: {
      type: [String, Number],
      default: common_vendor.index.$u.props.input.maxlength
    },
    placeholder: {
      type: String,
      default: common_vendor.index.$u.props.input.placeholder
    },
    placeholderClass: {
      type: String,
      default: common_vendor.index.$u.props.input.placeholderClass
    },
    placeholderStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.input.placeholderStyle
    },
    showWordLimit: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.showWordLimit
    },
    confirmType: {
      type: String,
      default: common_vendor.index.$u.props.input.confirmType
    },
    confirmHold: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.confirmHold
    },
    holdKeyboard: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.holdKeyboard
    },
    focus: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.focus
    },
    autoBlur: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.autoBlur
    },
    disableDefaultPadding: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.disableDefaultPadding
    },
    cursor: {
      type: [String, Number],
      default: common_vendor.index.$u.props.input.cursor
    },
    cursorSpacing: {
      type: [String, Number],
      default: common_vendor.index.$u.props.input.cursorSpacing
    },
    selectionStart: {
      type: [String, Number],
      default: common_vendor.index.$u.props.input.selectionStart
    },
    selectionEnd: {
      type: [String, Number],
      default: common_vendor.index.$u.props.input.selectionEnd
    },
    adjustPosition: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.adjustPosition
    },
    inputAlign: {
      type: String,
      default: common_vendor.index.$u.props.input.inputAlign
    },
    fontSize: {
      type: [String, Number],
      default: common_vendor.index.$u.props.input.fontSize
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.input.color
    },
    prefixIcon: {
      type: String,
      default: common_vendor.index.$u.props.input.prefixIcon
    },
    prefixIconStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.input.prefixIconStyle
    },
    suffixIcon: {
      type: String,
      default: common_vendor.index.$u.props.input.suffixIcon
    },
    suffixIconStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.input.suffixIconStyle
    },
    border: {
      type: String,
      default: common_vendor.index.$u.props.input.border
    },
    readonly: {
      type: Boolean,
      default: common_vendor.index.$u.props.input.readonly
    },
    shape: {
      type: String,
      default: common_vendor.index.$u.props.input.shape
    },
    formatter: {
      type: [Function, null],
      default: common_vendor.index.$u.props.input.formatter
    }
  }
};
exports.props = props;
