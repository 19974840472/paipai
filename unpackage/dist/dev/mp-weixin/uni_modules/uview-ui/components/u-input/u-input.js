"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uInput_props = require("./props.js");
const _sfc_main = {
  name: "u-input",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uInput_props.props],
  data() {
    return {
      innerValue: "",
      focused: false,
      firstChange: true,
      changeFromInner: false,
      innerFormatter: (value) => value
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal, oldVal) {
        this.innerValue = newVal;
        this.firstChange = false;
        this.changeFromInner = false;
      }
    }
  },
  computed: {
    isShowClear() {
      const { clearable, readonly, focused, innerValue } = this;
      return !!clearable && !readonly && !!focused && innerValue !== "";
    },
    inputClass() {
      let classes = [], { border, disabled, shape } = this;
      border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
      classes.push(`u-input--${shape}`);
      border === "bottom" && (classes = classes.concat([
        "u-border-bottom",
        "u-input--no-radius"
      ]));
      return classes.join(" ");
    },
    wrapperStyle() {
      const style = {};
      if (this.disabled) {
        style.backgroundColor = this.disabledColor;
      }
      if (this.border === "none") {
        style.padding = "0";
      } else {
        style.paddingTop = "6px";
        style.paddingBottom = "6px";
        style.paddingLeft = "9px";
        style.paddingRight = "9px";
      }
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    },
    inputStyle() {
      const style = {
        color: this.color,
        fontSize: common_vendor.index.$u.addUnit(this.fontSize),
        textAlign: this.inputAlign
      };
      return style;
    }
  },
  methods: {
    setFormatter(e) {
      this.innerFormatter = e;
    },
    onInput(e) {
      let { value = "" } = e.detail || {};
      const formatter = this.formatter || this.innerFormatter;
      const formatValue = formatter(value);
      this.innerValue = value;
      this.$nextTick(() => {
        this.innerValue = formatValue;
        this.valueChange();
      });
    },
    onBlur(event) {
      this.$emit("blur", event.detail.value);
      common_vendor.index.$u.sleep(50).then(() => {
        this.focused = false;
      });
      common_vendor.index.$u.formValidate(this, "blur");
    },
    onFocus(event) {
      this.focused = true;
      this.$emit("focus");
    },
    onConfirm(event) {
      this.$emit("confirm", this.innerValue);
    },
    onkeyboardheightchange() {
      this.$emit("keyboardheightchange");
    },
    valueChange() {
      const value = this.innerValue;
      this.$nextTick(() => {
        this.$emit("input", value);
        this.changeFromInner = true;
        this.$emit("change", value);
        common_vendor.index.$u.formValidate(this, "change");
      });
    },
    onClear() {
      this.innerValue = "";
      this.$nextTick(() => {
        this.valueChange();
        this.$emit("clear");
      });
    },
    clickHandler() {
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.prefixIcon || _ctx.$slots.prefix
  }, _ctx.prefixIcon || _ctx.$slots.prefix ? {
    b: common_vendor.p({
      name: _ctx.prefixIcon,
      size: "18",
      customStyle: _ctx.prefixIconStyle
    })
  } : {}, {
    c: common_vendor.s($options.inputStyle),
    d: _ctx.type,
    e: _ctx.focus,
    f: _ctx.cursor,
    g: $data.innerValue,
    h: _ctx.autoBlur,
    i: _ctx.disabled || _ctx.readonly,
    j: _ctx.maxlength,
    k: _ctx.placeholder,
    l: _ctx.placeholderStyle,
    m: _ctx.placeholderClass,
    n: _ctx.confirmType,
    o: _ctx.confirmHold,
    p: _ctx.holdKeyboard,
    q: _ctx.cursorSpacing,
    r: _ctx.adjustPosition,
    s: _ctx.selectionEnd,
    t: _ctx.selectionStart,
    v: _ctx.password || _ctx.type === "password" || void 0,
    w: common_vendor.o((...args) => $options.onInput && $options.onInput(...args)),
    x: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    y: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args)),
    z: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args)),
    A: common_vendor.o((...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args)),
    B: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    C: $options.isShowClear
  }, $options.isShowClear ? {
    D: common_vendor.p({
      name: "close",
      size: "11",
      color: "#ffffff",
      customStyle: "line-height: 12px"
    }),
    E: common_vendor.o((...args) => $options.onClear && $options.onClear(...args))
  } : {}, {
    F: _ctx.suffixIcon || _ctx.$slots.suffix
  }, _ctx.suffixIcon || _ctx.$slots.suffix ? {
    G: common_vendor.p({
      name: _ctx.suffixIcon,
      size: "18",
      customStyle: _ctx.suffixIconStyle
    })
  } : {}, {
    H: common_vendor.n($options.inputClass),
    I: common_vendor.s($options.wrapperStyle)
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-113bc24f"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-input/u-input.vue"]]);
wx.createComponent(Component);
