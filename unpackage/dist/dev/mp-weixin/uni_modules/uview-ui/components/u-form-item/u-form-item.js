"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uFormItem_props = require("./props.js");
const _sfc_main = {
  name: "u-form-item",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uFormItem_props.props],
  data() {
    return {
      message: "",
      parentData: {
        labelPosition: "left",
        labelAlign: "left",
        labelStyle: {},
        labelWidth: 45,
        errorType: "message"
      }
    };
  },
  computed: {
    propsLine() {
      return common_vendor.index.$u.props.line;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.updateParentData();
      if (!this.parent) {
        common_vendor.index.$u.error("u-form-item\u9700\u8981\u7ED3\u5408u-form\u7EC4\u4EF6\u4F7F\u7528");
      }
    },
    updateParentData() {
      this.getParentData("u-form");
    },
    clearValidate() {
      this.message = null;
    },
    resetField() {
      const value = common_vendor.index.$u.getProperty(this.parent.originalModel, this.prop);
      common_vendor.index.$u.setProperty(this.parent.model, this.prop, value);
      this.message = null;
    },
    clickHandler() {
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  (_easycom_u_icon2 + _easycom_u_line2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_line = () => "../u-line/u-line.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.required || _ctx.leftIcon || _ctx.label
  }, _ctx.required || _ctx.leftIcon || _ctx.label ? common_vendor.e({
    b: _ctx.required
  }, _ctx.required ? {} : {}, {
    c: _ctx.leftIcon
  }, _ctx.leftIcon ? {
    d: common_vendor.p({
      name: _ctx.leftIcon,
      ["custom-style"]: _ctx.leftIconStyle
    })
  } : {}, {
    e: common_vendor.t(_ctx.label),
    f: common_vendor.s($data.parentData.labelStyle),
    g: common_vendor.s({
      justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
    }),
    h: _ctx.$u.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
    i: $data.parentData.labelPosition === "left" ? 0 : "5px"
  }) : {}, {
    j: _ctx.$slots.right
  }, _ctx.$slots.right ? {} : {}, {
    k: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    l: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle)),
    m: common_vendor.s({
      flexDirection: $data.parentData.labelPosition === "left" ? "row" : "column"
    }),
    n: !!$data.message && $data.parentData.errorType === "message"
  }, !!$data.message && $data.parentData.errorType === "message" ? {
    o: common_vendor.t($data.message),
    p: _ctx.$u.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
  } : {}, {
    q: _ctx.borderBottom
  }, _ctx.borderBottom ? {
    r: common_vendor.p({
      color: $data.message && $data.parentData.errorType === "border-bottom" ? _ctx.$u.color.error : $options.propsLine.color,
      customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
    })
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-067e4733"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-form-item/u-form-item.vue"]]);
wx.createComponent(Component);
