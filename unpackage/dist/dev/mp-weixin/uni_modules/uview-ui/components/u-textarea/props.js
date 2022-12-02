"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    value: {
      type: [String, Number],
      default: common_vendor.index.$u.props.textarea.value
    },
    placeholder: {
      type: [String, Number],
      default: common_vendor.index.$u.props.textarea.placeholder
    },
    placeholderClass: {
      type: String,
      default: common_vendor.index.$u.props.input.placeholderClass
    },
    placeholderStyle: {
      type: [String, Object],
      default: common_vendor.index.$u.props.input.placeholderStyle
    },
    height: {
      type: [String, Number],
      default: common_vendor.index.$u.props.textarea.height
    },
    confirmType: {
      type: String,
      default: common_vendor.index.$u.props.textarea.confirmType
    },
    disabled: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.disabled
    },
    count: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.count
    },
    focus: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.focus
    },
    autoHeight: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.autoHeight
    },
    fixed: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.fixed
    },
    cursorSpacing: {
      type: Number,
      default: common_vendor.index.$u.props.textarea.cursorSpacing
    },
    cursor: {
      type: [String, Number],
      default: common_vendor.index.$u.props.textarea.cursor
    },
    showConfirmBar: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.showConfirmBar
    },
    selectionStart: {
      type: Number,
      default: common_vendor.index.$u.props.textarea.selectionStart
    },
    selectionEnd: {
      type: Number,
      default: common_vendor.index.$u.props.textarea.selectionEnd
    },
    adjustPosition: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.adjustPosition
    },
    disableDefaultPadding: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.disableDefaultPadding
    },
    holdKeyboard: {
      type: Boolean,
      default: common_vendor.index.$u.props.textarea.holdKeyboard
    },
    maxlength: {
      type: [String, Number],
      default: common_vendor.index.$u.props.textarea.maxlength
    },
    border: {
      type: String,
      default: common_vendor.index.$u.props.textarea.border
    },
    formatter: {
      type: [Function, null],
      default: common_vendor.index.$u.props.textarea.formatter
    }
  }
};
exports.props = props;
