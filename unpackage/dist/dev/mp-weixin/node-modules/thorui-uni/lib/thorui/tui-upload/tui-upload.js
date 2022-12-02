"use strict";
var common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "tuiUpload",
  emits: ["remove", "complete"],
  props: {
    width: {
      type: [Number, String],
      default: 220
    },
    height: {
      type: [Number, String],
      default: 220
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    delConfirm: {
      type: Boolean,
      default: false
    },
    forbidDel: {
      type: Boolean,
      default: false
    },
    forbidAdd: {
      type: Boolean,
      default: false
    },
    serverUrl: {
      type: String,
      default: ""
    },
    limit: {
      type: Number,
      default: 9
    },
    sizeType: {
      type: Array,
      default() {
        return ["original", "compressed"];
      }
    },
    sourceType: {
      type: Array,
      default() {
        return ["album", "camera"];
      }
    },
    imageFormat: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      type: Number,
      default: 4
    },
    fileKeyName: {
      type: String,
      default: "file"
    },
    header: {
      type: Object,
      default() {
        return {};
      }
    },
    formData: {
      type: Object,
      default() {
        return {};
      }
    },
    params: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      imageList: [],
      statusArr: []
    };
  },
  created() {
    this.initImages();
  },
  watch: {
    value(val) {
      if (val) {
        this.initImages();
      }
    }
  },
  computed: {
    isShowAdd() {
      let isShow = true;
      if (this.forbidAdd || this.limit && this.imageList.length >= this.limit) {
        isShow = false;
      }
      return isShow;
    }
  },
  methods: {
    initImages() {
      this.statusArr = [];
      this.imageList = [...this.value];
      for (let item of this.imageList) {
        this.statusArr.push("1");
      }
    },
    reUpLoad(index) {
      this.$set(this.statusArr, index, "2");
      this.change();
      this.uploadImage(index, this.imageList[index]).then(() => {
        this.change();
      }).catch(() => {
        this.change();
      });
    },
    change(manual = false) {
      let status = ~this.statusArr.indexOf("2") ? 2 : 1;
      if (status != 2 && ~this.statusArr.indexOf("3")) {
        status = 3;
      }
      this.$emit("complete", {
        status,
        imgArr: this.imageList,
        params: this.params,
        manual
      });
    },
    toast(text) {
      text && common_vendor.index.showToast({
        title: text,
        icon: "none"
      });
    },
    chooseImage: function() {
      let _this = this;
      common_vendor.index.chooseImage({
        count: _this.limit - _this.imageList.length,
        sizeType: _this.sizeType,
        sourceType: _this.sourceType,
        success: function(e) {
          let imageArr = [];
          for (let i = 0; i < e.tempFiles.length; i++) {
            let len = _this.imageList.length;
            if (len >= _this.limit) {
              _this.toast(`\u6700\u591A\u53EF\u4E0A\u4F20${_this.limit}\u5F20\u56FE\u7247`);
              break;
            }
            let path = e.tempFiles[i].path;
            if (_this.imageFormat.length > 0) {
              let format = "";
              format = path.split(".")[path.split(".").length - 1];
              if (_this.imageFormat.indexOf(format) == -1) {
                let text = `\u53EA\u80FD\u4E0A\u4F20 ${_this.imageFormat.join(",")} \u683C\u5F0F\u56FE\u7247\uFF01`;
                _this.toast(text);
                continue;
              }
            }
            let size = e.tempFiles[i].size;
            if (_this.size * 1024 * 1024 < size) {
              let err = `\u5355\u5F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7\uFF1A${_this.size}MB`;
              _this.toast(err);
              continue;
            }
            imageArr.push(path);
            _this.imageList.push(path);
            _this.statusArr.push("2");
          }
          _this.change();
          let start = _this.imageList.length - imageArr.length;
          for (let j = 0; j < imageArr.length; j++) {
            let index = start + j;
            if (_this.serverUrl) {
              _this.uploadImage(index, imageArr[j]).then(() => {
                _this.change();
              }).catch(() => {
                _this.change();
              });
            } else {
              _this.$set(_this.statusArr, index, "1");
              _this.change();
            }
          }
        }
      });
    },
    uploadImage: function(index, url, serverUrl) {
      let _this = this;
      return new Promise((resolve, reject) => {
        common_vendor.index.uploadFile({
          url: this.serverUrl || serverUrl,
          name: this.fileKeyName,
          header: this.header,
          formData: this.formData,
          filePath: url,
          success: function(res) {
            if (res.statusCode == 200) {
              let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}");
              if (d.code % 100 === 0) {
                d.url && (_this.imageList[index] = d.url);
                _this.$set(_this.statusArr, index, d.url ? "1" : "3");
              } else {
                _this.$set(_this.statusArr, index, "3");
              }
              resolve(index);
            } else {
              _this.$set(_this.statusArr, index, "3");
              reject(index);
            }
          },
          fail: function(res) {
            _this.$set(_this.statusArr, index, "3");
            reject(index);
          }
        });
      });
    },
    delImage: function(index) {
      let that = this;
      if (this.delConfirm) {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u786E\u8BA4\u5220\u9664\u8BE5\u56FE\u7247\u5417\uFF1F",
          showCancel: true,
          cancelColor: "#555",
          confirmColor: "#eb0909",
          confirmText: "\u786E\u5B9A",
          success(res) {
            if (res.confirm) {
              that.imageList.splice(index, 1);
              that.statusArr.splice(index, 1);
              that.$emit("remove", {
                index,
                params: that.params
              });
              that.change();
            }
          }
        });
      } else {
        that.imageList.splice(index, 1);
        that.statusArr.splice(index, 1);
        that.$emit("remove", {
          index,
          params: that.params
        });
        that.change();
      }
    },
    previewImage: function(index) {
      if (!this.imageList.length)
        return;
      common_vendor.index.previewImage({
        current: this.imageList[index],
        loop: true,
        urls: this.imageList
      });
    },
    uploadAllImage(serverUrl) {
      if (!serverUrl) {
        this.toast("\u670D\u52A1\u5668\u63A5\u53E3\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A\uFF01");
        return;
      }
      let imageArr = [...this.imageList];
      const len = imageArr.length;
      for (let i = 0; i < len; i++) {
        if (imageArr[i].startsWith("https")) {
          continue;
        } else {
          this.$set(this.statusArr, i, "2");
          this.uploadImage(i, imageArr[i], serverUrl).then(() => {
            if (i === len - 1) {
              this.change(true);
            }
          }).catch(() => {
            if (i === len - 1) {
              this.change(true);
            }
          });
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.imageList, (item, index, i0) => {
      return common_vendor.e({
        a: item,
        b: common_vendor.o(($event) => $options.previewImage(index))
      }, !$props.forbidDel ? {
        c: common_vendor.o(($event) => $options.delImage(index))
      } : {}, {
        d: $data.statusArr[index] != 1
      }, $data.statusArr[index] != 1 ? common_vendor.e({
        e: $data.statusArr[index] == 2
      }, $data.statusArr[index] == 2 ? {} : {}, {
        f: common_vendor.t($data.statusArr[index] == 2 ? "\u4E0A\u4F20\u4E2D..." : "\u4E0A\u4F20\u5931\u8D25"),
        g: $data.statusArr[index] == 3
      }, $data.statusArr[index] == 3 ? {
        h: common_vendor.o(($event) => $options.reUpLoad(index))
      } : {}) : {}, {
        i: index
      });
    }),
    b: $props.width + "rpx",
    c: $props.height + "rpx",
    d: !$props.forbidDel,
    e: $props.width + "rpx",
    f: $props.height + "rpx",
    g: $options.isShowAdd
  }, $options.isShowAdd ? {
    h: $props.width + "rpx",
    i: $props.height + "rpx",
    j: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args))
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-05d2307f"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-upload/tui-upload.vue"]]);
wx.createComponent(Component);
