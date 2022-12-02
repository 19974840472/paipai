"use strict";
var common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "tuiTabs",
  emits: ["change"],
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 80
    },
    padding: {
      type: Number,
      default: 30
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 0
    },
    unlined: {
      type: Boolean,
      default: false
    },
    currentTab: {
      type: Number,
      default: 0
    },
    isSlider: {
      type: Boolean,
      default: true
    },
    sliderWidth: {
      type: Number,
      default: 68
    },
    sliderHeight: {
      type: Number,
      default: 6
    },
    sliderBgColor: {
      type: String,
      default: "#5677fc"
    },
    sliderRadius: {
      type: String,
      default: "50rpx"
    },
    bottom: {
      type: String,
      default: "0"
    },
    itemWidth: {
      type: String,
      default: "25%"
    },
    color: {
      type: String,
      default: "#666"
    },
    selectedColor: {
      type: String,
      default: "#5677fc"
    },
    size: {
      type: Number,
      default: 28
    },
    bold: {
      type: Boolean,
      default: false
    },
    badgeColor: {
      type: String,
      default: "#fff"
    },
    badgeBgColor: {
      type: String,
      default: "#F74D54"
    },
    zIndex: {
      type: [Number, String],
      default: 996
    }
  },
  watch: {
    currentTab() {
      this.checkCor();
    },
    tabs() {
      this.checkCor();
    },
    width(val) {
      this.tabsWidth = val;
      this.checkCor();
    }
  },
  created() {
    setTimeout(() => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          this.winWidth = res.windowWidth;
          this.tabsWidth = this.width == 0 ? this.winWidth : this.width;
          this.checkCor();
        }
      });
    }, 0);
  },
  data() {
    return {
      winWidth: 0,
      tabsWidth: 0,
      scrollLeft: 0
    };
  },
  methods: {
    checkCor: function() {
      let tabsNum = this.tabs.length;
      let padding = this.winWidth / 750 * this.padding;
      let width = this.tabsWidth - padding * 2;
      let left = (width / tabsNum - this.winWidth / 750 * this.sliderWidth) / 2 + padding;
      let scrollLeft = left;
      if (this.currentTab > 0) {
        scrollLeft = scrollLeft + width / tabsNum * this.currentTab;
      }
      this.scrollLeft = scrollLeft;
    },
    swichTabs: function(index) {
      let item = this.tabs[index];
      if (item && item.disabled)
        return;
      if (this.currentTab == index) {
        return false;
      } else {
        this.$emit("change", {
          index: Number(index)
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.tabsWidth > 0
  }, $data.tabsWidth > 0 ? common_vendor.e({
    b: common_vendor.f($props.tabs, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.num || item.isDot
      }, item.num || item.isDot ? {
        c: common_vendor.t(item.isDot ? "" : item.num),
        d: common_vendor.n(item.isDot ? "tui-badge__dot" : "tui-tabs__badge"),
        e: $props.badgeColor,
        f: $props.badgeBgColor
      } : {}, {
        g: $props.currentTab == index ? 1 : "",
        h: item.disabled ? 1 : "",
        i: $props.currentTab == index ? $props.selectedColor : $props.color,
        j: $props.bold && $props.currentTab == index ? "bold" : "normal",
        k: index,
        l: common_vendor.o(($event) => $options.swichTabs(index))
      });
    }),
    c: $props.size + "rpx",
    d: $props.itemWidth,
    e: $props.height + "rpx",
    f: $props.isSlider
  }, $props.isSlider ? {
    g: "translateX(" + $data.scrollLeft + "px)",
    h: $props.sliderWidth + "rpx",
    i: $props.sliderHeight + "rpx",
    j: $props.sliderRadius,
    k: $props.bottom,
    l: $props.sliderBgColor,
    m: $props.bottom == "50%" ? "-" + $props.sliderHeight / 2 + "rpx" : 0
  } : {}, {
    n: common_vendor.n($props.isFixed ? "tui-tabs-fixed" : "tui-tabs-relative"),
    o: common_vendor.n($props.unlined ? "tui-unlined" : ""),
    p: $data.tabsWidth + "px",
    q: $props.height + "rpx",
    r: `0 ${$props.padding}rpx`,
    s: $props.backgroundColor,
    t: $props.isFixed ? $props.top + "px" : "auto",
    v: $props.isFixed ? $props.zIndex : "auto"
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e238c142"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-tabs/tui-tabs.vue"]]);
wx.createComponent(Component);
