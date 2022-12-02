"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    hairline: {
      type: Boolean,
      default: common_vendor.index.$u.props.button.hairline
    },
    type: {
      type: String,
      default: common_vendor.index.$u.props.button.type
    },
    size: {
      type: String,
      default: common_vendor.index.$u.props.button.size
    },
    shape: {
      type: String,
      default: common_vendor.index.$u.props.button.shape
    },
    plain: {
      type: Boolean,
      default: common_vendor.index.$u.props.button.plain
    },
    disabled: {
      type: Boolean,
      default: common_vendor.index.$u.props.button.disabled
    },
    loading: {
      type: Boolean,
      default: common_vendor.index.$u.props.button.loading
    },
    loadingText: {
      type: [String, Number],
      default: common_vendor.index.$u.props.button.loadingText
    },
    loadingMode: {
      type: String,
      default: common_vendor.index.$u.props.button.loadingMode
    },
    loadingSize: {
      type: [String, Number],
      default: common_vendor.index.$u.props.button.loadingSize
    },
    openType: {
      type: String,
      default: common_vendor.index.$u.props.button.openType
    },
    formType: {
      type: String,
      default: common_vendor.index.$u.props.button.formType
    },
    appParameter: {
      type: String,
      default: common_vendor.index.$u.props.button.appParameter
    },
    hoverStopPropagation: {
      type: Boolean,
      default: common_vendor.index.$u.props.button.hoverStopPropagation
    },
    lang: {
      type: String,
      default: common_vendor.index.$u.props.button.lang
    },
    sessionFrom: {
      type: String,
      default: common_vendor.index.$u.props.button.sessionFrom
    },
    sendMessageTitle: {
      type: String,
      default: common_vendor.index.$u.props.button.sendMessageTitle
    },
    sendMessagePath: {
      type: String,
      default: common_vendor.index.$u.props.button.sendMessagePath
    },
    sendMessageImg: {
      type: String,
      default: common_vendor.index.$u.props.button.sendMessageImg
    },
    showMessageCard: {
      type: Boolean,
      default: common_vendor.index.$u.props.button.showMessageCard
    },
    dataName: {
      type: String,
      default: common_vendor.index.$u.props.button.dataName
    },
    throttleTime: {
      type: [String, Number],
      default: common_vendor.index.$u.props.button.throttleTime
    },
    hoverStartTime: {
      type: [String, Number],
      default: common_vendor.index.$u.props.button.hoverStartTime
    },
    hoverStayTime: {
      type: [String, Number],
      default: common_vendor.index.$u.props.button.hoverStayTime
    },
    text: {
      type: [String, Number],
      default: common_vendor.index.$u.props.button.text
    },
    icon: {
      type: String,
      default: common_vendor.index.$u.props.button.icon
    },
    iconColor: {
      type: String,
      default: common_vendor.index.$u.props.button.icon
    },
    color: {
      type: String,
      default: common_vendor.index.$u.props.button.color
    }
  }
};
exports.props = props;
