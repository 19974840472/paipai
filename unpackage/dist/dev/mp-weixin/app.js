"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/classification/classification.js";
  "./pages/my/my.js";
  "./pages/information/information.js";
  "./pages/release/release.js";
  "./pages/commodity/commodity.js";
  "./pages/search/search.js";
  "./pages/upload/upload.js";
  "./pages/list/list.js";
  "./pages/order/order.js";
  "./pages/idle/idle.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log(common_vendor.index.$u.config.v);
    console.log("\u9875\u9762\u52A0\u8F7D");
    common_vendor.index.request({
      url: "http://localhost:4000/api/index",
      data: {
        text: "11111111111111111111111111111111111111111111111111111111111111111111"
      },
      method: "GET",
      success: (res) => {
        console.log(res.data);
      }
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/xxzl/z/uniapp/paipai/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
