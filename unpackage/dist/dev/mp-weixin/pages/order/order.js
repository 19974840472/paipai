"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentTab: 0,
      tabs: [{
        name: "\u5168\u90E8"
      }, {
        name: "\u5F85\u4ED8\u6B3E"
      }, {
        name: "\u5F85\u53D1\u8D27"
      }, {
        name: "\u5F85\u6536\u8D27"
      }]
    };
  },
  methods: {
    change(e) {
      this.currentTab = e.index;
    }
  }
};
if (!Array) {
  const _easycom_tui_tabs2 = common_vendor.resolveComponent("tui-tabs");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  (_easycom_tui_tabs2 + _easycom_u_icon2)();
}
const _easycom_tui_tabs = () => "../../node-modules/thorui-uni/lib/thorui/tui-tabs/tui-tabs.js";
const _easycom_u_icon = () => "../../uni_modules/uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_tui_tabs + _easycom_u_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.p({
      tabs: $data.tabs,
      currentTab: $data.currentTab
    }),
    c: common_vendor.p({
      name: "chat",
      size: "40rpx"
    }),
    d: common_vendor.p({
      name: "chat",
      size: "40rpx"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-127632e4"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
