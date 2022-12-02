"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      columns: [
        ["\u4E2D\u56FD", "\u7F8E\u56FD"],
        ["\u6DF1\u5733", "\u53A6\u95E8", "\u4E0A\u6D77", "\u62C9\u8428"]
      ],
      columnData: [
        ["\u6DF1\u5733", "\u53A6\u95E8", "\u4E0A\u6D77", "\u62C9\u8428"],
        ["\u5F97\u5DDE", "\u534E\u76DB\u987F", "\u7EBD\u7EA6", "\u963F\u62C9\u65AF\u52A0"]
      ],
      location: "\u6C5F\u897F \u4E0A\u9976",
      model1: {
        userInfo: {
          yj: "",
          jg: ""
        }
      },
      rules: {
        "userInfo.yj": {
          validator: (rule, value, callback) => {
            return common_vendor.index.$u.test.amount(value) && value < 1e5;
          },
          message: "\u8BF7\u6B63\u786E\u8F93\u5165\u4EF7\u683C,\u4E0D\u80FD\u5927\u4E8E100000,\u5C0F\u6570\u70B9\u540E\u6700\u591A\u4E24\u4F4D",
          trigger: ["change", "blur"]
        },
        "userInfo.jg": {
          validator: (rule, value, callback) => {
            return common_vendor.index.$u.test.amount(value) && value < 1e5;
          },
          message: "\u8BF7\u6B63\u786E\u8F93\u5165\u4EF7\u683C,\u4EF7\u683C\u4E0D\u80FD\u5927\u4E8E100000,\u5C0F\u6570\u70B9\u540E\u6700\u591A\u4E24\u4F4D",
          trigger: ["change", "blur"]
        }
      },
      radio: "",
      switchVal: false
    };
  },
  methods: {
    yjInput(e) {
      this.model1.userInfo.yj = e;
    },
    jgInput(e) {
      this.model1.userInfo.jg = e;
    },
    submit() {
      this.$refs.form1.validate().then((res) => {
        common_vendor.index.$u.toast("\u6821\u9A8C\u901A\u8FC7");
      }).catch((errors) => {
        common_vendor.index.$u.toast("\u6821\u9A8C\u5931\u8D25");
      });
    },
    remove() {
      console.log("xx");
    },
    wzClose() {
      this.show = false;
    },
    changeHandler(e) {
      const {
        columnIndex,
        value,
        values,
        index,
        picker = this.$refs.uPicker
      } = e;
      if (columnIndex === 0) {
        picker.setColumnValues(1, this.columnData[index]);
      }
    },
    confirm(e) {
      this.location = e.value.join(" ");
      this.show = false;
    }
  },
  mounted() {
  }
};
if (!Array) {
  const _easycom_u__textarea2 = common_vendor.resolveComponent("u--textarea");
  const _easycom_tui_upload2 = common_vendor.resolveComponent("tui-upload");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  const _easycom_tui_list_cell2 = common_vendor.resolveComponent("tui-list-cell");
  const _easycom_tui_list_view2 = common_vendor.resolveComponent("tui-list-view");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u__form2 = common_vendor.resolveComponent("u--form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u__textarea2 + _easycom_tui_upload2 + _easycom_u_picker2 + _easycom_tui_list_cell2 + _easycom_tui_list_view2 + _easycom_u__input2 + _easycom_u_form_item2 + _easycom_u__form2 + _easycom_u_button2)();
}
const _easycom_u__textarea = () => "../../uni_modules/uview-ui/components/u--textarea/u--textarea.js";
const _easycom_tui_upload = () => "../../node-modules/thorui-uni/lib/thorui/tui-upload/tui-upload.js";
const _easycom_u_picker = () => "../../uni_modules/uview-ui/components/u-picker/u-picker.js";
const _easycom_tui_list_cell = () => "../../node-modules/thorui-uni/lib/thorui/tui-list-cell/tui-list-cell.js";
const _easycom_tui_list_view = () => "../../node-modules/thorui-uni/lib/thorui/tui-list-view/tui-list-view.js";
const _easycom_u__input = () => "../../uni_modules/uview-ui/components/u--input/u--input.js";
const _easycom_u_form_item = () => "../../uni_modules/uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u__form = () => "../../uni_modules/uview-ui/components/u--form/u--form.js";
const _easycom_u_button = () => "../../uni_modules/uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u__textarea + _easycom_tui_upload + _easycom_u_picker + _easycom_tui_list_cell + _easycom_tui_list_view + _easycom_u__input + _easycom_u_form_item + _easycom_u__form + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.value2 = $event),
    b: common_vendor.p({
      border: "none",
      height: "300rpx",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      count: true,
      modelValue: _ctx.value2
    }),
    c: common_vendor.o(_ctx.result),
    d: common_vendor.o($options.remove),
    e: common_vendor.p({
      value: _ctx.value,
      serverUrl: _ctx.serverUrl
    }),
    f: common_vendor.sr("uPicker", "f6315108-2"),
    g: common_vendor.o($options.confirm),
    h: common_vendor.o($options.changeHandler),
    i: common_vendor.o($options.wzClose),
    j: common_vendor.o($options.wzClose),
    k: common_vendor.p({
      show: $data.show,
      columns: $data.columns
    }),
    l: common_vendor.t($data.location),
    m: common_vendor.o(($event) => $data.show = true),
    n: common_vendor.p({
      arrow: true,
      padding: "26rpx 0"
    }),
    o: common_vendor.p({
      color: "#777"
    }),
    p: common_vendor.o($options.yjInput),
    q: common_vendor.p({
      border: "none",
      value: $data.model1.userInfo.yj
    }),
    r: common_vendor.p({
      label: "\u539F\u4EF7",
      prop: "userInfo.yj",
      ["border-bottom"]: "true"
    }),
    s: common_vendor.o($options.jgInput),
    t: common_vendor.p({
      border: "none",
      value: $data.model1.userInfo.jg
    }),
    v: common_vendor.p({
      label: "\u4EF7\u683C",
      prop: "userInfo.jg",
      ["border-bottom"]: "true"
    }),
    w: common_vendor.sr("form1", "f6315108-5"),
    x: common_vendor.p({
      labelPosition: "left",
      model: $data.model1,
      rules: $data.rules
    }),
    y: common_vendor.o($options.submit),
    z: common_vendor.p({
      type: "primary",
      text: "\u786E\u5B9A"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/pages/upload/upload.vue"]]);
wx.createPage(MiniProgramPage);
