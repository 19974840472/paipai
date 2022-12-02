"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cateList: [
        {
          "classifyId": 1,
          "classifyName": "\u63A8\u8350 "
        },
        {
          "classifyId": 2,
          "classifyName": "\u624B\u673A "
        },
        {
          "classifyId": 3,
          "classifyName": "\u7535\u8111 "
        },
        {
          "classifyId": 4,
          "classifyName": "\u978B\u9774"
        },
        {
          "classifyId": 5,
          "classifyName": "\u4E8C\u624B\u4E66"
        },
        {
          "classifyId": 6,
          "classifyName": "\u6C7D\u8F66\u7528\u54C1"
        },
        {
          "classifyId": 7,
          "classifyName": "\u6444\u5F71\u6444\u50CF "
        },
        {
          "classifyId": 2,
          "classifyName": "\u624B\u673A "
        },
        {
          "classifyId": 3,
          "classifyName": "\u7535\u8111 "
        }
      ],
      goodList: [],
      activeIndex: 0
    };
  },
  methods: {
    changeActive(i) {
      this.activeIndex = i;
      common_vendor.index.request({
        url: "http://localhost:4000/api/classification",
        data: {
          classifyName: this.cateList[this.activeIndex].classifyName
        },
        method: "GET",
        success: (res) => {
          console.log(res.data);
          this.goodList = res.data;
        }
      });
    }
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://localhost:4000/api/classification",
      data: {
        classifyName: this.cateList[this.activeIndex].classifyName
      },
      method: "GET",
      success: (res) => {
        console.log(res.data);
        this.goodList = res.data;
      }
    });
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../uni_modules/uview-ui/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "\u7A7A\u6C14\u70B8\u9505",
      ["show-action"]: false
    }),
    b: common_vendor.f($data.cateList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.classifyName),
        b: common_vendor.n($data.activeIndex == index ? "active" : ""),
        c: index,
        d: common_vendor.o(($event) => $options.changeActive(index))
      };
    }),
    c: common_vendor.f($data.goodList, (goodItem, goodIndex, i0) => {
      return {
        a: "http://localhost:4000/images/" + goodItem.pic_url,
        b: common_vendor.t(goodItem.text),
        c: "/pages/list/list?title=" + goodItem.text,
        d: goodIndex
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0bc2eff4"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/classification/classification.vue"]]);
wx.createPage(MiniProgramPage);
