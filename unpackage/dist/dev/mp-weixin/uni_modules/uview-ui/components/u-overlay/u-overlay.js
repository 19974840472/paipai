"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uOverlay_props = require("./props.js");
const _sfc_main = {
  name: "u-overlay",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uOverlay_props.props],
  computed: {
    overlayStyle() {
      const style = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: this.zIndex,
        bottom: 0,
        "background-color": `rgba(0, 0, 0, ${this.opacity})`
      };
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    }
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  _easycom_u_transition2();
}
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  _easycom_u_transition();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.clickHandler),
    b: common_vendor.p({
      show: _ctx.show,
      ["custom-class"]: "u-overlay",
      duration: _ctx.duration,
      ["custom-style"]: $options.overlayStyle
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1625041b"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-overlay/u-overlay.vue"]]);
wx.createComponent(Component);
