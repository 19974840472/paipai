"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uToolbar_props = require("./props.js");
const _sfc_main = {
  name: "u-toolbar",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uToolbar_props.props],
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: common_vendor.t(_ctx.cancelText),
    c: common_vendor.o((...args) => $options.cancel && $options.cancel(...args)),
    d: _ctx.cancelColor,
    e: _ctx.title
  }, _ctx.title ? {
    f: common_vendor.t(_ctx.title)
  } : {}, {
    g: common_vendor.t(_ctx.confirmText),
    h: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    i: _ctx.confirmColor,
    j: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args))
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-55c89db1"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-toolbar/u-toolbar.vue"]]);
wx.createComponent(Component);
