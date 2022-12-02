"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uTextarea_props = require("../u-textarea/props.js");
const uvTextarea = () => "../u-textarea/u-textarea.js";
const _sfc_main = {
  name: "u--textarea",
  mixins: [common_vendor.index.$u.mpMixin, uni_modules_uviewUi_components_uTextarea_props.props, common_vendor.index.$u.mixin],
  components: {
    uvTextarea
  }
};
if (!Array) {
  const _component_uvTextarea = common_vendor.resolveComponent("uvTextarea");
  _component_uvTextarea();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((e) => _ctx.$emit("focus")),
    b: common_vendor.o((e) => _ctx.$emit("blur")),
    c: common_vendor.o((e) => _ctx.$emit("linechange", e)),
    d: common_vendor.o((e) => _ctx.$emit("confirm")),
    e: common_vendor.o((e) => _ctx.$emit("input", e)),
    f: common_vendor.o((e) => _ctx.$emit("keyboardheightchange")),
    g: common_vendor.p({
      value: _ctx.value,
      placeholder: _ctx.placeholder,
      height: _ctx.height,
      confirmType: _ctx.confirmType,
      disabled: _ctx.disabled,
      count: _ctx.count,
      focus: _ctx.focus,
      autoHeight: _ctx.autoHeight,
      fixed: _ctx.fixed,
      cursorSpacing: _ctx.cursorSpacing,
      cursor: _ctx.cursor,
      showConfirmBar: _ctx.showConfirmBar,
      selectionStart: _ctx.selectionStart,
      selectionEnd: _ctx.selectionEnd,
      adjustPosition: _ctx.adjustPosition,
      disableDefaultPadding: _ctx.disableDefaultPadding,
      holdKeyboard: _ctx.holdKeyboard,
      maxlength: _ctx.maxlength,
      border: _ctx.border,
      customStyle: _ctx.customStyle,
      formatter: _ctx.formatter
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u--textarea/u--textarea.vue"]]);
wx.createComponent(Component);
