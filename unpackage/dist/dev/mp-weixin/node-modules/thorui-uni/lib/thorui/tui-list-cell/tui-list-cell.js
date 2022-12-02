"use strict";
var common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "tuiListCell",
  emits: ["click"],
  props: {
    arrow: {
      type: Boolean,
      default: false
    },
    arrowColor: {
      type: String,
      default: ""
    },
    hover: {
      type: Boolean,
      default: true
    },
    unlined: {
      type: Boolean,
      default: false
    },
    lineLeft: {
      type: Boolean,
      default: true
    },
    lineRight: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: "26rpx 30rpx"
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    size: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: "#333"
    },
    radius: {
      type: Boolean,
      default: false
    },
    arrowRight: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.arrow ? "tui-cell-arrow" : ""),
    b: common_vendor.n($props.arrow && $props.arrowRight ? "" : "tui-arrow-right"),
    c: common_vendor.n($props.unlined ? "tui-cell-unlined" : ""),
    d: common_vendor.n($props.lineLeft ? "tui-line-left" : ""),
    e: common_vendor.n($props.lineRight ? "tui-line-right" : ""),
    f: common_vendor.n($props.arrow && $props.arrowColor ? "tui-arrow-" + $props.arrowColor : ""),
    g: common_vendor.n($props.radius ? "tui-radius" : ""),
    h: $props.hover ? "tui-cell-hover" : "",
    i: $props.backgroundColor,
    j: $props.size + "rpx",
    k: $props.color,
    l: $props.padding,
    m: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-45c8ea59"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-list-cell/tui-list-cell.vue"]]);
wx.createComponent(Component);
