"use strict";
var common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const _sfc_main = {
  data() {
    return {
      currentTab: 0,
      commodity: [],
      title: "",
      tabs: [{
        name: "\u7EFC\u5408"
      }, {
        name: "\u6700\u65B0\u53D1\u5E03"
      }, {
        name: "\u540C\u57CE"
      }, {
        name: "\u4EF7\u683C\u6700\u4F4E"
      }]
    };
  },
  methods: {
    change(e) {
      this.currentTab = e.index;
    }
  },
  onLoad(e) {
    this.title = e.title;
    common_vendor.index.request({
      url: "http://localhost:4000/api/list",
      data: {
        title: this.title
      },
      method: "GET",
      success: (res) => {
        this.commodity = res.data;
        console.log(this.commodity);
      }
    });
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_tui_tabs2 = common_vendor.resolveComponent("tui-tabs");
  (_easycom_u_search2 + _easycom_tui_tabs2)();
}
const _easycom_u_search = () => "../../uni_modules/uview-ui/components/u-search/u-search.js";
const _easycom_tui_tabs = () => "../../node-modules/thorui-uni/lib/thorui/tui-tabs/tui-tabs.js";
if (!Math) {
  (_easycom_u_search + _easycom_tui_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "\u82F9\u679C\u6570\u636E\u7EBF",
      ["show-action"]: false,
      height: "60rpx",
      value: $data.title
    }),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      tabs: $data.tabs,
      currentTab: $data.currentTab
    }),
    d: common_vendor.f($data.commodity, (item, k0, i0) => {
      return {
        a: "http://localhost:4000/images/" + item.src[0],
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.newprice),
        d: common_vendor.t(item.oldprice),
        e: "/pages/commodity/commodity?id=" + item.commodity_id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d5e07c6"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
