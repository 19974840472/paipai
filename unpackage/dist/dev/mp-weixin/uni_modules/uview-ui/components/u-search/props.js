"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    shape: {
      type: String,
      default: common_vendor.index.$u.props.search.shape
    },
    bgColor: {
      type: String,
      default: common_vendor.index.$u.props.search.bgColor
    },
    placeholder: {
      type: String,
      default: common_vendor.index.$u.props.search.placeholder
    },
    clearabled: {
      type: Boolean,
      default: common_vendor.index.$u.props.search.clearabled
    },
    focus: {
      type: Boolean,
      default: common_vendor.index.$u.props.search.focus
    },
    showAction: {
      type: Boolean,
      default: common_vendor.index.$u.props.search.showAction
    },
    actionStyle: {
      type: Object,
      default: common_vendor.index.$u.props.search.actionStyle
    },
    actionText: {
      type: String,
      default: common_vendor.index.$u.props.search.actionText
    },
    inputAlign: {
      type: String,
      default: common_vendor.index.$u.props.search.inputAlign
    },
    inputStyle: {
      type: Object,
      default: common_vendor.index.$u.props.search.inputStyle
    },
    disabled: {
      type: Boolean,
      default: common_vendor.index.$u.props.search.disabled
    },
    borderColor: {
      type: String,
      default: common_vendor.index.$u.props.search.borderColor
    },
    searchIconColor: {
      type: String,
      default: common_vendor.index.$u.props.search.searchIconColor
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.search.color
    },
    placeholderColor: {
      type: String,
      default: common_vendor.index.$u.props.search.placeholderColor
    },
    searchIcon: {
      type: String,
      default: common_vendor.index.$u.props.search.searchIcon
    },
    searchIconSize: {
      type: [Number, String],
      default: common_vendor.index.$u.props.search.searchIconSize
    },
    margin: {
      type: String,
      default: common_vendor.index.$u.props.search.margin
    },
    animation: {
      type: Boolean,
      default: common_vendor.index.$u.props.search.animation
    },
    value: {
      type: String,
      default: common_vendor.index.$u.props.search.value
    },
    maxlength: {
      type: [String, Number],
      default: common_vendor.index.$u.props.search.maxlength
    },
    height: {
      type: [String, Number],
      default: common_vendor.index.$u.props.search.height
    },
    label: {
      type: [String, Number, null],
      default: common_vendor.index.$u.props.search.label
    }
  }
};
exports.props = props;
