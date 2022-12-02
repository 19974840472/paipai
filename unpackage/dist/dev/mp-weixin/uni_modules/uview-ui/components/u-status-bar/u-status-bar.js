"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uStatusBar_props = require("./props.js");
const _sfc_main = {
  name: "u-status-bar",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uStatusBar_props.props],
  data() {
    return {};
  },
  computed: {
    style() {
      const style = {};
      style.height = common_vendor.index.$u.addUnit(common_vendor.index.$u.sys().statusBarHeight, "px");
      style.backgroundColor = this.bgColor;
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.style)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-124d52a9"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-status-bar/u-status-bar.vue"]]);
wx.createComponent(Component);
