"use strict";
var common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uniSwipeAction",
  data() {
    return {};
  },
  created() {
    this.children = [];
  },
  methods: {
    resize() {
    },
    closeAll() {
      this.children.forEach((vm) => {
        vm.is_show = "none";
      });
    },
    closeOther(vm) {
      if (this.openItem && this.openItem !== vm) {
        this.openItem.is_show = "none";
      }
      this.openItem = vm;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue"]]);
wx.createComponent(Component);
