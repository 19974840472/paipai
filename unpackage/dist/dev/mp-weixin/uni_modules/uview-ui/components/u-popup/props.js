"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    show: {
      type: Boolean,
      default: common_vendor.index.$u.props.popup.show
    },
    overlay: {
      type: Boolean,
      default: common_vendor.index.$u.props.popup.overlay
    },
    mode: {
      type: String,
      default: common_vendor.index.$u.props.popup.mode
    },
    duration: {
      type: [String, Number],
      default: common_vendor.index.$u.props.popup.duration
    },
    closeable: {
      type: Boolean,
      default: common_vendor.index.$u.props.popup.closeable
    },
    overlayStyle: {
      type: [Object, String],
      default: common_vendor.index.$u.props.popup.overlayStyle
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: common_vendor.index.$u.props.popup.closeOnClickOverlay
    },
    zIndex: {
      type: [String, Number],
      default: common_vendor.index.$u.props.popup.zIndex
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: common_vendor.index.$u.props.popup.safeAreaInsetBottom
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: common_vendor.index.$u.props.popup.safeAreaInsetTop
    },
    closeIconPos: {
      type: String,
      default: common_vendor.index.$u.props.popup.closeIconPos
    },
    round: {
      type: [Boolean, String, Number],
      default: common_vendor.index.$u.props.popup.round
    },
    zoom: {
      type: Boolean,
      default: common_vendor.index.$u.props.popup.zoom
    },
    bgColor: {
      type: String,
      default: common_vendor.index.$u.props.popup.bgColor
    },
    overlayOpacity: {
      type: [Number, String],
      default: common_vendor.index.$u.props.popup.overlayOpacity
    }
  }
};
exports.props = props;
