"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uviewUi_components_uForm_props = require("./props.js");
var uni_modules_uviewUi_libs_util_asyncValidator = require("../../libs/util/async-validator.js");
uni_modules_uviewUi_libs_util_asyncValidator.Schema.warning = function() {
};
const _sfc_main = {
  name: "u-form",
  mixins: [common_vendor.index.$u.mpMixin, common_vendor.index.$u.mixin, uni_modules_uviewUi_components_uForm_props.props],
  provide() {
    return {
      uForm: this
    };
  },
  data() {
    return {
      formRules: {},
      validator: {},
      originalModel: null
    };
  },
  watch: {
    rules: {
      immediate: true,
      handler(n) {
        this.setRules(n);
      }
    },
    propsChange(n) {
      var _a;
      if ((_a = this.children) == null ? void 0 : _a.length) {
        this.children.map((child) => {
          typeof child.updateParentData == "function" && child.updateParentData();
        });
      }
    },
    model: {
      immediate: true,
      handler(n) {
        if (!this.originalModel) {
          this.originalModel = common_vendor.index.$u.deepClone(n);
        }
      }
    }
  },
  computed: {
    propsChange() {
      return [
        this.errorType,
        this.borderBottom,
        this.labelPosition,
        this.labelWidth,
        this.labelAlign,
        this.labelStyle
      ];
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    setRules(rules) {
      if (Object.keys(rules).length === 0)
        return;
      if (Object.keys(this.model).length === 0) {
        common_vendor.index.$u.error("\u8BBE\u7F6Erules\uFF0Cmodel\u5FC5\u987B\u8BBE\u7F6E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
        return;
      }
      this.formRules = rules;
      this.validator = new uni_modules_uviewUi_libs_util_asyncValidator.Schema(rules);
    },
    resetFields() {
      this.resetModel();
    },
    resetModel(obj) {
      this.children.map((child) => {
        const prop = child == null ? void 0 : child.prop;
        const value = common_vendor.index.$u.getProperty(this.originalModel, prop);
        common_vendor.index.$u.setProperty(this.model, prop, value);
      });
    },
    clearValidate(props) {
      props = [].concat(props);
      this.children.map((child) => {
        if (props[0] === void 0 || props.includes(child.prop)) {
          child.message = null;
        }
      });
    },
    async validateField(value, callback, event = null) {
      this.$nextTick(() => {
        const errorsRes = [];
        value = [].concat(value);
        this.children.map((child) => {
          const childErrors = [];
          if (value.includes(child.prop)) {
            const propertyVal = common_vendor.index.$u.getProperty(this.model, child.prop);
            const propertyChain = child.prop.split(".");
            const propertyName = propertyChain[propertyChain.length - 1];
            const rule = this.formRules[child.prop];
            if (!rule)
              return;
            const rules = [].concat(rule);
            for (let i = 0; i < rules.length; i++) {
              const ruleItem = rules[i];
              const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
              if (event && !trigger.includes(event))
                continue;
              const validator = new uni_modules_uviewUi_libs_util_asyncValidator.Schema({
                [propertyName]: ruleItem
              });
              validator.validate({
                [propertyName]: propertyVal
              }, (errors, fields) => {
                var _a, _b;
                if (common_vendor.index.$u.test.array(errors)) {
                  errorsRes.push(...errors);
                  childErrors.push(...errors);
                }
                child.message = (_b = (_a = childErrors[0]) == null ? void 0 : _a.message) != null ? _b : null;
              });
            }
          }
        });
        typeof callback === "function" && callback(errorsRes);
      });
    },
    validate(callback) {
      if (Object.keys(this.formRules).length === 0) {
        common_vendor.index.$u.error("\u672A\u8BBE\u7F6Erules\uFF0C\u8BF7\u770B\u6587\u6863\u8BF4\u660E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
        return;
      }
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const formItemProps = this.children.map((item) => item.prop);
          this.validateField(formItemProps, (errors) => {
            if (errors.length) {
              this.errorType === "toast" && common_vendor.index.$u.toast(errors[0].message);
              reject(errors);
            } else {
              resolve(true);
            }
          });
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-form/u-form.vue"]]);
wx.createComponent(Component);
