"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uForm_props = require("../u-form/props.js");
const uvForm = () => "../u-form/u-form.js";
const _sfc_main = {
  name: "u-form",
  mixins: [common_vendor.index.$u.mpMixin, uni_modules_uviewUi_components_uForm_props.props, common_vendor.index.$u.mixin],
  components: {
    uvForm
  },
  created() {
    this.children = [];
  },
  methods: {
    setRules(rules) {
      this.$refs.uForm.setRules(rules);
    },
    validate() {
      this.setMpData();
      return this.$refs.uForm.validate();
    },
    validateField(value, callback) {
      this.setMpData();
      return this.$refs.uForm.validateField(value, callback);
    },
    resetFields() {
      this.setMpData();
      return this.$refs.uForm.resetFields();
    },
    clearValidate(props) {
      this.setMpData();
      return this.$refs.uForm.clearValidate(props);
    },
    setMpData() {
      this.$refs.uForm.children = this.children;
    }
  }
};
if (!Array) {
  const _component_uvForm = common_vendor.resolveComponent("uvForm");
  _component_uvForm();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("uForm", "a2761d1a-0"),
    b: common_vendor.p({
      model: _ctx.model,
      rules: _ctx.rules,
      errorType: _ctx.errorType,
      borderBottom: _ctx.borderBottom,
      labelPosition: _ctx.labelPosition,
      labelWidth: _ctx.labelWidth,
      labelAlign: _ctx.labelAlign,
      labelStyle: _ctx.labelStyle,
      customStyle: _ctx.customStyle
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u--form/u--form.vue"]]);
wx.createComponent(Component);
