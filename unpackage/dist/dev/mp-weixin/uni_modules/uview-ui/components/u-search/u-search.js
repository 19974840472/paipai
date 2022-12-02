"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uSearch_props = require("./props.js");
const _sfc_main = {
  name: "u-search",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uSearch_props.props],
  data() {
    return {
      keyword: "",
      showClear: false,
      show: false,
      focused: this.focus
    };
  },
  watch: {
    keyword(nVal) {
      this.$emit("input", nVal);
      this.$emit("change", nVal);
    },
    value: {
      immediate: true,
      handler(nVal) {
        this.keyword = nVal;
      }
    }
  },
  computed: {
    showActionBtn() {
      return !this.animation && this.showAction;
    }
  },
  methods: {
    inputChange(e) {
      this.keyword = e.detail.value;
    },
    clear() {
      this.keyword = "";
      this.$nextTick(() => {
        this.$emit("clear");
      });
    },
    search(e) {
      this.$emit("search", e.detail.value);
      try {
        common_vendor.index.hideKeyboard();
      } catch (e2) {
      }
    },
    custom() {
      this.$emit("custom", this.keyword);
      try {
        common_vendor.index.hideKeyboard();
      } catch (e) {
      }
    },
    getFocus() {
      this.focused = true;
      if (this.animation && this.showAction)
        this.show = true;
      this.$emit("focus", this.keyword);
    },
    blur() {
      setTimeout(() => {
        this.focused = false;
      }, 100);
      this.show = false;
      this.$emit("blur", this.keyword);
    },
    clickHandler() {
      if (this.disabled)
        this.$emit("click");
    },
    clickIcon() {
      this.$emit("clickIcon");
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
    a: _ctx.$slots.label || _ctx.label !== null
  }, _ctx.$slots.label || _ctx.label !== null ? {
    b: common_vendor.t(_ctx.label)
  } : {}, {
    c: common_vendor.o($options.clickIcon),
    d: common_vendor.p({
      size: _ctx.searchIconSize,
      name: _ctx.searchIcon,
      color: _ctx.searchIconColor ? _ctx.searchIconColor : _ctx.color
    }),
    e: common_vendor.o((...args) => $options.blur && $options.blur(...args)),
    f: _ctx.value,
    g: common_vendor.o((...args) => $options.search && $options.search(...args)),
    h: common_vendor.o((...args) => $options.inputChange && $options.inputChange(...args)),
    i: _ctx.disabled,
    j: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args)),
    k: _ctx.focus,
    l: _ctx.maxlength,
    m: _ctx.placeholder,
    n: `color: ${_ctx.placeholderColor}`,
    o: common_vendor.s({
      textAlign: _ctx.inputAlign,
      color: _ctx.color,
      backgroundColor: _ctx.bgColor,
      height: _ctx.$u.addUnit(_ctx.height)
    }),
    p: common_vendor.s(_ctx.inputStyle),
    q: $data.keyword && _ctx.clearabled && $data.focused
  }, $data.keyword && _ctx.clearabled && $data.focused ? {
    r: common_vendor.p({
      name: "close",
      size: "11",
      color: "#ffffff",
      customStyle: "line-height: 12px"
    }),
    s: common_vendor.o((...args) => $options.clear && $options.clear(...args))
  } : {}, {
    t: _ctx.bgColor,
    v: _ctx.shape == "round" ? "100px" : "4px",
    w: _ctx.borderColor,
    x: common_vendor.t(_ctx.actionText),
    y: common_vendor.s(_ctx.actionStyle),
    z: common_vendor.n(($options.showActionBtn || $data.show) && "u-search__action--active"),
    A: common_vendor.o((...args) => $options.custom && $options.custom(...args)),
    B: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    C: common_vendor.s({
      margin: _ctx.margin
    }),
    D: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a306a29"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-search/u-search.vue"]]);
wx.createComponent(Component);
