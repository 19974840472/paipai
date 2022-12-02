"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text1: "\u8BF7\u4E0D\u8981\u8131\u79BB\u5E73\u53F0\u4EA4\u6613",
      options: [{
        text: "\u53D6\u6D88",
        style: {
          backgroundColor: "#007aff"
        }
      }, {
        text: "\u786E\u8BA4",
        style: {
          backgroundColor: "#dd524d"
        }
      }]
    };
  },
  methods: {
    aaa() {
      console.log("aaa");
    },
    swipeChange(e, index) {
      console.log("\u5F53\u524D\u72B6\u6001\uFF1A" + e + "\uFF0C\u4E0B\u6807\uFF1A" + index);
    }
  }
};
if (!Array) {
  const _easycom_u_notice_bar2 = common_vendor.resolveComponent("u-notice-bar");
  const _easycom_tui_list_cell2 = common_vendor.resolveComponent("tui-list-cell");
  const _easycom_tui_list_view2 = common_vendor.resolveComponent("tui-list-view");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_u_notice_bar2 + _easycom_tui_list_cell2 + _easycom_tui_list_view2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_u_notice_bar = () => "../../uni_modules/uview-ui/components/u-notice-bar/u-notice-bar.js";
const _easycom_tui_list_cell = () => "../../node-modules/thorui-uni/lib/thorui/tui-list-cell/tui-list-cell.js";
const _easycom_tui_list_view = () => "../../node-modules/thorui-uni/lib/thorui/tui-list-view/tui-list-view.js";
const _easycom_uni_swipe_action_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_u_notice_bar + _easycom_tui_list_cell + _easycom_tui_list_view + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: $data.text1
    }),
    b: common_vendor.o($options.aaa),
    c: common_vendor.p({
      color: "#777"
    }),
    d: common_vendor.o(_ctx.bindClick),
    e: common_vendor.o(($event) => $options.swipeChange($event, _ctx.index)),
    f: common_vendor.p({
      ["right-options"]: $data.options
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-293111e0"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/information/information.vue"]]);
wx.createPage(MiniProgramPage);
