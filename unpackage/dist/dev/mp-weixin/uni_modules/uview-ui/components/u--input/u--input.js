"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uInput_props = require("../u-input/props.js");
const uvInput = () => "../u-input/u-input.js";
const _sfc_main = {
  name: "u--input",
  mixins: [common_vendor.index.$u.mpMixin, uni_modules_uviewUi_components_uInput_props.props, common_vendor.index.$u.mixin],
  components: {
    uvInput
  }
};
if (!Array) {
  const _component_uvInput = common_vendor.resolveComponent("uvInput");
  _component_uvInput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$emit("focus")),
    b: common_vendor.o((e) => _ctx.$emit("blur", e)),
    c: common_vendor.o(($event) => _ctx.$emit("keyboardheightchange")),
    d: common_vendor.o((e) => _ctx.$emit("change", e)),
    e: common_vendor.o((e) => _ctx.$emit("input", e)),
    f: common_vendor.o((e) => _ctx.$emit("confirm", e)),
    g: common_vendor.o(($event) => _ctx.$emit("clear")),
    h: common_vendor.o(($event) => _ctx.$emit("click")),
    i: common_vendor.p({
      value: _ctx.value,
      type: _ctx.type,
      fixed: _ctx.fixed,
      disabled: _ctx.disabled,
      disabledColor: _ctx.disabledColor,
      clearable: _ctx.clearable,
      password: _ctx.password,
      maxlength: _ctx.maxlength,
      placeholder: _ctx.placeholder,
      placeholderClass: _ctx.placeholderClass,
      placeholderStyle: _ctx.placeholderStyle,
      showWordLimit: _ctx.showWordLimit,
      confirmType: _ctx.confirmType,
      confirmHold: _ctx.confirmHold,
      holdKeyboard: _ctx.holdKeyboard,
      focus: _ctx.focus,
      autoBlur: _ctx.autoBlur,
      disableDefaultPadding: _ctx.disableDefaultPadding,
      cursor: _ctx.cursor,
      cursorSpacing: _ctx.cursorSpacing,
      selectionStart: _ctx.selectionStart,
      selectionEnd: _ctx.selectionEnd,
      adjustPosition: _ctx.adjustPosition,
      inputAlign: _ctx.inputAlign,
      fontSize: _ctx.fontSize,
      color: _ctx.color,
      prefixIcon: _ctx.prefixIcon,
      suffixIcon: _ctx.suffixIcon,
      suffixIconStyle: _ctx.suffixIconStyle,
      prefixIconStyle: _ctx.prefixIconStyle,
      border: _ctx.border,
      readonly: _ctx.readonly,
      shape: _ctx.shape,
      customStyle: _ctx.customStyle,
      formatter: _ctx.formatter
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u--input/u--input.vue"]]);
wx.createComponent(Component);
