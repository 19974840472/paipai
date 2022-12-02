"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "",
      titleArr: [],
      hot: ["\u624B\u673A", "\u7535\u8111"]
    };
  },
  methods: {
    search(e) {
      if (common_vendor.index.getStorageSync("title")) {
        this.titleArr = common_vendor.index.getStorageSync("title");
        this.titleArr.forEach((item, index) => {
          if (item === this.title) {
            this.titleArr.splice(index, 1);
          }
        });
        this.titleArr.unshift(this.title);
        this.titleArr = this.titleArr.slice(0, 10);
        common_vendor.index.setStorageSync("title", this.titleArr);
      } else {
        this.titleArr.push(this.title);
        common_vendor.index.setStorageSync("title", this.titleArr);
      }
      common_vendor.index.navigateTo({
        url: "../list/list?title=" + e
      });
    },
    searchInp(e) {
      this.title = e;
    },
    titleTop(e) {
      this.title = e;
    },
    remove() {
      common_vendor.index.setStorageSync("title", []);
      this.titleArr = [];
    }
  },
  onLoad() {
    if (common_vendor.index.getStorageSync("title")) {
      this.titleArr = common_vendor.index.getStorageSync("title");
    }
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_u_search2 + _easycom_uni_icons2)();
}
const _easycom_u_search = () => "../../uni_modules/uview-ui/components/u-search/u-search.js";
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_u_search + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.searchInp),
    b: common_vendor.o($options.search),
    c: common_vendor.o($options.search),
    d: common_vendor.p({
      placeholder: "\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF",
      value: $data.title,
      clearabled: true
    }),
    e: common_vendor.o($options.remove),
    f: common_vendor.p({
      type: "trash",
      size: "30",
      color: "#ccc"
    }),
    g: common_vendor.f($data.titleArr, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => $options.titleTop(item))
      };
    }),
    h: $data.titleArr.length > 0,
    i: common_vendor.f($data.hot, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => $options.titleTop(item))
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4cedc0c6"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
