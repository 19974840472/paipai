"use strict";
var common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "tuiListView",
  props: {
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#666"
    },
    size: {
      type: Number,
      default: 30
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    unlined: {
      type: String,
      default: ""
    },
    marginTop: {
      type: String,
      default: "0"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.title
  }, $props.title ? {
    b: common_vendor.t($props.title),
    c: $props.color,
    d: $props.size + "rpx",
    e: 30 + "rpx"
  } : {}, {
    f: common_vendor.n($props.unlined ? "tui-border-" + $props.unlined : ""),
    g: $props.backgroundColor,
    h: $props.marginTop
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72f7489f"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-list-view/tui-list-view.vue"]]);
wx.createComponent(Component);
