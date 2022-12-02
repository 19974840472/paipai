"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value4: 0
    };
  },
  methods: {
    click1(e) {
      console.log("click1", e);
    }
  }
};
if (!Array) {
  const _easycom_tui_list_cell2 = common_vendor.resolveComponent("tui-list-cell");
  const _easycom_tui_list_view2 = common_vendor.resolveComponent("tui-list-view");
  (_easycom_tui_list_cell2 + _easycom_tui_list_view2)();
}
const _easycom_tui_list_cell = () => "../../node-modules/thorui-uni/lib/thorui/tui-list-cell/tui-list-cell.js";
const _easycom_tui_list_view = () => "../../node-modules/thorui-uni/lib/thorui/tui-list-view/tui-list-view.js";
if (!Math) {
  (_easycom_tui_list_cell + _easycom_tui_list_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      arrow: true
    }),
    b: common_vendor.p({
      arrow: true
    }),
    c: common_vendor.p({
      arrow: true
    }),
    d: common_vendor.p({
      arrow: true
    }),
    e: common_vendor.p({
      color: "#777"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0be17cc6"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
