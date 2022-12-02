"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      options: [{
        icon: "heart",
        text: "\u6536\u85CF"
      }],
      buttonGroup: [
        {
          text: "\u804A\u4E00\u804A",
          backgroundColor: "#fbe6e3",
          color: "#ff0000"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ff0000",
          color: "#fff"
        }
      ],
      commodity: {}
    };
  },
  methods: {
    onClick(e) {
      common_vendor.index.showToast({
        title: `\u70B9\u51FB${e.content.text}`,
        icon: "none"
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    }
  },
  onShow() {
    common_vendor.index.pageScrollTo({
      scrollTop: 0
    });
  },
  onLoad(e) {
    common_vendor.index.request({
      url: "http://localhost:4000/api/commodity",
      data: {
        id: e.id
      },
      method: "GET",
      success: (res) => {
        this.commodity = res.data[0];
      }
    });
  }
};
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.commodity.author),
    b: common_vendor.t($data.commodity.dz),
    c: common_vendor.t($data.commodity.newprice),
    d: common_vendor.t($data.commodity.oldprice),
    e: common_vendor.t($data.commodity.title),
    f: common_vendor.f($data.commodity.src, (item, k0, i0) => {
      return {
        a: "http://localhost:4000/images/" + item,
        b: item
      };
    }),
    g: common_vendor.o($options.onClick),
    h: common_vendor.o($options.buttonClick),
    i: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/pages/commodity/commodity.vue"]]);
wx.createPage(MiniProgramPage);
