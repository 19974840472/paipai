"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    text: {
      type: [Array, String],
      default: common_vendor.index.$u.props.noticeBar.text
    },
    direction: {
      type: String,
      default: common_vendor.index.$u.props.noticeBar.direction
    },
    step: {
      type: Boolean,
      default: common_vendor.index.$u.props.noticeBar.step
    },
    icon: {
      type: String,
      default: common_vendor.index.$u.props.noticeBar.icon
    },
    mode: {
      type: String,
      default: common_vendor.index.$u.props.noticeBar.mode
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.noticeBar.color
    },
    bgColor: {
      type: String,
      default: common_vendor.index.$u.props.noticeBar.bgColor
    },
    speed: {
      type: [String, Number],
      default: common_vendor.index.$u.props.noticeBar.speed
    },
    fontSize: {
      type: [String, Number],
      default: common_vendor.index.$u.props.noticeBar.fontSize
    },
    duration: {
      type: [String, Number],
      default: common_vendor.index.$u.props.noticeBar.duration
    },
    disableTouch: {
      type: Boolean,
      default: common_vendor.index.$u.props.noticeBar.disableTouch
    },
    url: {
      type: String,
      default: common_vendor.index.$u.props.noticeBar.url
    },
    linkType: {
      type: String,
      default: common_vendor.index.$u.props.noticeBar.linkType
    }
  }
};
exports.props = props;
