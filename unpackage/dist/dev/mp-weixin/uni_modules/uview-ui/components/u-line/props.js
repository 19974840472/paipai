"use strict";
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: {
    color: {
      type: String,
      default: common_vendor.index.$u.props.line.color
    },
    length: {
      type: [String, Number],
      default: common_vendor.index.$u.props.line.length
    },
    direction: {
      type: String,
      default: common_vendor.index.$u.props.line.direction
    },
    hairline: {
      type: Boolean,
      default: common_vendor.index.$u.props.line.hairline
    },
    margin: {
      type: [String, Number],
      default: common_vendor.index.$u.props.line.margin
    },
    dashed: {
      type: Boolean,
      default: common_vendor.index.$u.props.line.dashed
    }
  }
};
exports.props = props;
