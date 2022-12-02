"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scrollTop: 0,
      list2: [{
        name: "\u63A8\u8350"
      }, {
        name: "\u624B\u673A"
      }, {
        name: "\u7535\u8111"
      }, {
        name: "\u624B\u8868"
      }, {
        name: "\u9F20\u6807"
      }, {
        name: "\u952E\u76D8"
      }, {
        name: "\u7535\u8111"
      }, {
        name: "\u624B\u8868"
      }],
      commodity: []
    };
  },
  methods: {
    click(name) {
      this.$refs.uToast.success(`\u70B9\u51FB\u4E86\u7B2C${name}\u4E2A`);
    },
    tabChange(index) {
      common_vendor.index.request({
        url: "http://localhost:4000/api/index/tab",
        data: {
          title: index.name
        },
        method: "GET",
        success: (res) => {
          this.commodity = res.data;
        }
      });
    }
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://localhost:4000/api/index",
      method: "GET",
      success: (res) => {
        this.commodity = res.data;
        console.log(res.data);
      }
    });
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  const _easycom_u_back_top2 = common_vendor.resolveComponent("u-back-top");
  (_easycom_u_search2 + _easycom_u_tabs2 + _easycom_u_back_top2)();
}
const _easycom_u_search = () => "../../uni_modules/uview-ui/components/u-search/u-search.js";
const _easycom_u_tabs = () => "../../uni_modules/uview-ui/components/u-tabs/u-tabs.js";
const _easycom_u_back_top = () => "../../uni_modules/uview-ui/components/u-back-top/u-back-top.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_tabs + _easycom_u_back_top)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "\u82F9\u679C\u6570\u636E\u7EBF",
      ["show-action"]: false,
      height: "60rpx"
    }),
    b: common_vendor.f(8, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    c: common_vendor.o($options.tabChange),
    d: common_vendor.p({
      list: $data.list2,
      lineColor: "#01c30b"
    }),
    e: common_vendor.f($data.commodity, (item, k0, i0) => {
      return {
        a: "http://localhost:4000/images/" + item.src[0],
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.newprice),
        d: "/pages/commodity/commodity?id=" + item.commodity_id,
        e: item.commodity_id
      };
    }),
    f: common_vendor.p({
      ["scroll-top"]: $data.scrollTop
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
