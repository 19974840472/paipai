"use strict";
var common_vendor = require("../../../../../common/vendor.js");
const { t } = common_vendor.initVueI18n(common_vendor.messages);
const _sfc_main = {
  name: "UniGoodsNav",
  emits: ["click", "buttonClick"],
  props: {
    options: {
      type: Array,
      default() {
        return [{
          icon: "shop",
          text: t("uni-goods-nav.options.shop")
        }, {
          icon: "cart",
          text: t("uni-goods-nav.options.cart")
        }];
      }
    },
    buttonGroup: {
      type: Array,
      default() {
        return [
          {
            text: t("uni-goods-nav.buttonGroup.addToCart"),
            backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
            color: "#fff"
          },
          {
            text: t("uni-goods-nav.buttonGroup.buyNow"),
            backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
            color: "#fff"
          }
        ];
      }
    },
    fill: {
      type: Boolean,
      default: false
    },
    stat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(index, item) {
      this.$emit("click", {
        index,
        content: item
      });
    },
    buttonClick(index, item) {
      if (common_vendor.index.report && this.stat) {
        common_vendor.index.report(item.text, item.text);
      }
      this.$emit("buttonClick", {
        index,
        content: item
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.options, (item, index, i0) => {
      return common_vendor.e({
        a: "6c15ef08-0-" + i0,
        b: common_vendor.p({
          type: item.icon,
          size: "20",
          color: "#646566"
        }),
        c: common_vendor.t(item.text),
        d: item.info
      }, item.info ? {
        e: common_vendor.t(item.info),
        f: item.info > 9 ? 1 : "",
        g: item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
        h: item.infoColor ? item.infoColor : "#fff"
      } : {}, {
        i: index,
        j: common_vendor.o(($event) => $options.onClick(index, item))
      });
    }),
    b: common_vendor.f($props.buttonGroup, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.color,
        c: index,
        d: item.backgroundColor,
        e: item.color,
        f: common_vendor.o(($event) => $options.buttonClick(index, item))
      };
    }),
    c: $props.fill ? 1 : ""
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/@dcloudio/uni-ui/lib/uni-goods-nav/uni-goods-nav.vue"]]);
wx.createComponent(Component);
