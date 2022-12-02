"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    show: {
      type: Boolean,
      default: common_vendor.index.$u.props.picker.show
    },
    showToolbar: {
      type: Boolean,
      default: common_vendor.index.$u.props.picker.showToolbar
    },
    title: {
      type: String,
      default: common_vendor.index.$u.props.picker.title
    },
    columns: {
      type: Array,
      default: common_vendor.index.$u.props.picker.columns
    },
    loading: {
      type: Boolean,
      default: common_vendor.index.$u.props.picker.loading
    },
    itemHeight: {
      type: [String, Number],
      default: common_vendor.index.$u.props.picker.itemHeight
    },
    cancelText: {
      type: String,
      default: common_vendor.index.$u.props.picker.cancelText
    },
    confirmText: {
      type: String,
      default: common_vendor.index.$u.props.picker.confirmText
    },
    cancelColor: {
      type: String,
      default: common_vendor.index.$u.props.picker.cancelColor
    },
    confirmColor: {
      type: String,
      default: common_vendor.index.$u.props.picker.confirmColor
    },
    visibleItemCount: {
      type: [String, Number],
      default: common_vendor.index.$u.props.picker.visibleItemCount
    },
    keyName: {
      type: String,
      default: common_vendor.index.$u.props.picker.keyName
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: common_vendor.index.$u.props.picker.closeOnClickOverlay
    },
    defaultIndex: {
      type: Array,
      default: common_vendor.index.$u.props.picker.defaultIndex
    },
    immediateChange: {
      type: Boolean,
      default: common_vendor.index.$u.props.picker.immediateChange
    }
  }
};
exports.props = props;
