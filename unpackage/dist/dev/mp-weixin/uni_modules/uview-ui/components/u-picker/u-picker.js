"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uPicker_props = require("./props.js");
const _sfc_main = {
  name: "u-picker",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uPicker_props.props],
  data() {
    return {
      lastIndex: [],
      innerIndex: [],
      innerColumns: [],
      columnIndex: 0
    };
  },
  watch: {
    defaultIndex: {
      immediate: true,
      handler(n) {
        this.setIndexs(n, true);
      }
    },
    columns: {
      immediate: true,
      handler(n) {
        this.setColumns(n);
      }
    }
  },
  methods: {
    getItemText(item) {
      if (common_vendor.index.$u.test.object(item)) {
        return item[this.keyName];
      } else {
        return item;
      }
    },
    closeHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    },
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm", {
        indexs: this.innerIndex,
        value: this.innerColumns.map((item, index) => item[this.innerIndex[index]]),
        values: this.innerColumns
      });
    },
    changeHandler(e) {
      const {
        value
      } = e.detail;
      let index = 0, columnIndex = 0;
      for (let i = 0; i < value.length; i++) {
        let item = value[i];
        if (item !== (this.lastIndex[i] || 0)) {
          columnIndex = i;
          index = item;
          break;
        }
      }
      this.columnIndex = columnIndex;
      const values = this.innerColumns;
      this.setLastIndex(value);
      this.setIndexs(value);
      this.$emit("change", {
        value: this.innerColumns.map((item, index2) => item[value[index2]]),
        index,
        indexs: value,
        values,
        columnIndex
      });
    },
    setIndexs(index, setLastIndex) {
      this.innerIndex = common_vendor.index.$u.deepClone(index);
      if (setLastIndex) {
        this.setLastIndex(index);
      }
    },
    setLastIndex(index) {
      this.lastIndex = common_vendor.index.$u.deepClone(index);
    },
    setColumnValues(columnIndex, values) {
      this.innerColumns.splice(columnIndex, 1, values);
      let tmpIndex = common_vendor.index.$u.deepClone(this.innerIndex);
      for (let i = 0; i < this.innerColumns.length; i++) {
        if (i > this.columnIndex) {
          tmpIndex[i] = 0;
        }
      }
      this.setIndexs(tmpIndex);
    },
    getColumnValues(columnIndex) {
      (async () => {
        await common_vendor.index.$u.sleep();
      })();
      return this.innerColumns[columnIndex];
    },
    setColumns(columns) {
      this.innerColumns = common_vendor.index.$u.deepClone(columns);
      if (this.innerIndex.length === 0) {
        this.innerIndex = new Array(columns.length).fill(0);
      }
    },
    getIndexs() {
      return this.innerIndex;
    },
    getValues() {
      (async () => {
        await common_vendor.index.$u.sleep();
      })();
      return this.innerColumns.map((item, index) => item[this.innerIndex[index]]);
    }
  }
};
if (!Array) {
  const _easycom_u_toolbar2 = common_vendor.resolveComponent("u-toolbar");
  const _easycom_u_loading_icon2 = common_vendor.resolveComponent("u-loading-icon");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_toolbar2 + _easycom_u_loading_icon2 + _easycom_u_popup2)();
}
const _easycom_u_toolbar = () => "../u-toolbar/u-toolbar.js";
const _easycom_u_loading_icon = () => "../u-loading-icon/u-loading-icon.js";
const _easycom_u_popup = () => "../u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_toolbar + _easycom_u_loading_icon + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.showToolbar
  }, _ctx.showToolbar ? {
    b: common_vendor.o($options.cancel),
    c: common_vendor.o($options.confirm),
    d: common_vendor.p({
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      title: _ctx.title
    })
  } : {}, {
    e: common_vendor.f($data.innerColumns, (item, index, i0) => {
      return common_vendor.e({
        a: _ctx.$u.test.array(item)
      }, _ctx.$u.test.array(item) ? {
        b: common_vendor.f(item, (item1, index1, i1) => {
          return {
            a: common_vendor.t($options.getItemText(item1)),
            b: index1,
            c: index1 === $data.innerIndex[index] ? "bold" : "normal"
          };
        }),
        c: _ctx.$u.addUnit(_ctx.itemHeight),
        d: _ctx.$u.addUnit(_ctx.itemHeight)
      } : {}, {
        e: index
      });
    }),
    f: `height: ${_ctx.$u.addUnit(_ctx.itemHeight)}`,
    g: $data.innerIndex,
    h: _ctx.immediateChange,
    i: `${_ctx.$u.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`,
    j: common_vendor.o((...args) => $options.changeHandler && $options.changeHandler(...args)),
    k: _ctx.loading
  }, _ctx.loading ? {
    l: common_vendor.p({
      mode: "circle"
    })
  } : {}, {
    m: common_vendor.o($options.closeHandler),
    n: common_vendor.p({
      show: _ctx.show
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f45a262e"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-picker/u-picker.vue"]]);
wx.createComponent(Component);
