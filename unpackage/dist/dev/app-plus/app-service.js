var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(shared, vue) {
  "use strict";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type2, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type2].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type3 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type3) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type3;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type2, filename, ...args) {
    const res = normalizeLog(type2, filename, args);
    res && console[type2](res);
  }
  var icons$1 = {
    "uicon-level": "\uE693",
    "uicon-column-line": "\uE68E",
    "uicon-checkbox-mark": "\uE807",
    "uicon-folder": "\uE7F5",
    "uicon-movie": "\uE7F6",
    "uicon-star-fill": "\uE669",
    "uicon-star": "\uE65F",
    "uicon-phone-fill": "\uE64F",
    "uicon-phone": "\uE622",
    "uicon-apple-fill": "\uE881",
    "uicon-chrome-circle-fill": "\uE885",
    "uicon-backspace": "\uE67B",
    "uicon-attach": "\uE632",
    "uicon-cut": "\uE948",
    "uicon-empty-car": "\uE602",
    "uicon-empty-coupon": "\uE682",
    "uicon-empty-address": "\uE646",
    "uicon-empty-favor": "\uE67C",
    "uicon-empty-permission": "\uE686",
    "uicon-empty-news": "\uE687",
    "uicon-empty-search": "\uE664",
    "uicon-github-circle-fill": "\uE887",
    "uicon-rmb": "\uE608",
    "uicon-person-delete-fill": "\uE66A",
    "uicon-reload": "\uE788",
    "uicon-order": "\uE68F",
    "uicon-server-man": "\uE6BC",
    "uicon-search": "\uE62A",
    "uicon-fingerprint": "\uE955",
    "uicon-more-dot-fill": "\uE630",
    "uicon-scan": "\uE662",
    "uicon-share-square": "\uE60B",
    "uicon-map": "\uE61D",
    "uicon-map-fill": "\uE64E",
    "uicon-tags": "\uE629",
    "uicon-tags-fill": "\uE651",
    "uicon-bookmark-fill": "\uE63B",
    "uicon-bookmark": "\uE60A",
    "uicon-eye": "\uE613",
    "uicon-eye-fill": "\uE641",
    "uicon-mic": "\uE64A",
    "uicon-mic-off": "\uE649",
    "uicon-calendar": "\uE66E",
    "uicon-calendar-fill": "\uE634",
    "uicon-trash": "\uE623",
    "uicon-trash-fill": "\uE658",
    "uicon-play-left": "\uE66D",
    "uicon-play-right": "\uE610",
    "uicon-minus": "\uE618",
    "uicon-plus": "\uE62D",
    "uicon-info": "\uE653",
    "uicon-info-circle": "\uE7D2",
    "uicon-info-circle-fill": "\uE64B",
    "uicon-question": "\uE715",
    "uicon-error": "\uE6D3",
    "uicon-close": "\uE685",
    "uicon-checkmark": "\uE6A8",
    "uicon-android-circle-fill": "\uE67E",
    "uicon-android-fill": "\uE67D",
    "uicon-ie": "\uE87B",
    "uicon-IE-circle-fill": "\uE889",
    "uicon-google": "\uE87A",
    "uicon-google-circle-fill": "\uE88A",
    "uicon-setting-fill": "\uE872",
    "uicon-setting": "\uE61F",
    "uicon-minus-square-fill": "\uE855",
    "uicon-plus-square-fill": "\uE856",
    "uicon-heart": "\uE7DF",
    "uicon-heart-fill": "\uE851",
    "uicon-camera": "\uE7D7",
    "uicon-camera-fill": "\uE870",
    "uicon-more-circle": "\uE63E",
    "uicon-more-circle-fill": "\uE645",
    "uicon-chat": "\uE620",
    "uicon-chat-fill": "\uE61E",
    "uicon-bag-fill": "\uE617",
    "uicon-bag": "\uE619",
    "uicon-error-circle-fill": "\uE62C",
    "uicon-error-circle": "\uE624",
    "uicon-close-circle": "\uE63F",
    "uicon-close-circle-fill": "\uE637",
    "uicon-checkmark-circle": "\uE63D",
    "uicon-checkmark-circle-fill": "\uE635",
    "uicon-question-circle-fill": "\uE666",
    "uicon-question-circle": "\uE625",
    "uicon-share": "\uE631",
    "uicon-share-fill": "\uE65E",
    "uicon-shopping-cart": "\uE621",
    "uicon-shopping-cart-fill": "\uE65D",
    "uicon-bell": "\uE609",
    "uicon-bell-fill": "\uE640",
    "uicon-list": "\uE650",
    "uicon-list-dot": "\uE616",
    "uicon-zhihu": "\uE6BA",
    "uicon-zhihu-circle-fill": "\uE709",
    "uicon-zhifubao": "\uE6B9",
    "uicon-zhifubao-circle-fill": "\uE6B8",
    "uicon-weixin-circle-fill": "\uE6B1",
    "uicon-weixin-fill": "\uE6B2",
    "uicon-twitter-circle-fill": "\uE6AB",
    "uicon-twitter": "\uE6AA",
    "uicon-taobao-circle-fill": "\uE6A7",
    "uicon-taobao": "\uE6A6",
    "uicon-weibo-circle-fill": "\uE6A5",
    "uicon-weibo": "\uE6A4",
    "uicon-qq-fill": "\uE6A1",
    "uicon-qq-circle-fill": "\uE6A0",
    "uicon-moments-circel-fill": "\uE69A",
    "uicon-moments": "\uE69B",
    "uicon-qzone": "\uE695",
    "uicon-qzone-circle-fill": "\uE696",
    "uicon-baidu-circle-fill": "\uE680",
    "uicon-baidu": "\uE681",
    "uicon-facebook-circle-fill": "\uE68A",
    "uicon-facebook": "\uE689",
    "uicon-car": "\uE60C",
    "uicon-car-fill": "\uE636",
    "uicon-warning-fill": "\uE64D",
    "uicon-warning": "\uE694",
    "uicon-clock-fill": "\uE638",
    "uicon-clock": "\uE60F",
    "uicon-edit-pen": "\uE612",
    "uicon-edit-pen-fill": "\uE66B",
    "uicon-email": "\uE611",
    "uicon-email-fill": "\uE642",
    "uicon-minus-circle": "\uE61B",
    "uicon-minus-circle-fill": "\uE652",
    "uicon-plus-circle": "\uE62E",
    "uicon-plus-circle-fill": "\uE661",
    "uicon-file-text": "\uE663",
    "uicon-file-text-fill": "\uE665",
    "uicon-pushpin": "\uE7E3",
    "uicon-pushpin-fill": "\uE86E",
    "uicon-grid": "\uE673",
    "uicon-grid-fill": "\uE678",
    "uicon-play-circle": "\uE647",
    "uicon-play-circle-fill": "\uE655",
    "uicon-pause-circle-fill": "\uE654",
    "uicon-pause": "\uE8FA",
    "uicon-pause-circle": "\uE643",
    "uicon-eye-off": "\uE648",
    "uicon-eye-off-outline": "\uE62B",
    "uicon-gift-fill": "\uE65C",
    "uicon-gift": "\uE65B",
    "uicon-rmb-circle-fill": "\uE657",
    "uicon-rmb-circle": "\uE677",
    "uicon-kefu-ermai": "\uE656",
    "uicon-server-fill": "\uE751",
    "uicon-coupon-fill": "\uE8C4",
    "uicon-coupon": "\uE8AE",
    "uicon-integral": "\uE704",
    "uicon-integral-fill": "\uE703",
    "uicon-home-fill": "\uE964",
    "uicon-home": "\uE965",
    "uicon-hourglass-half-fill": "\uE966",
    "uicon-hourglass": "\uE967",
    "uicon-account": "\uE628",
    "uicon-plus-people-fill": "\uE626",
    "uicon-minus-people-fill": "\uE615",
    "uicon-account-fill": "\uE614",
    "uicon-thumb-down-fill": "\uE726",
    "uicon-thumb-down": "\uE727",
    "uicon-thumb-up": "\uE733",
    "uicon-thumb-up-fill": "\uE72F",
    "uicon-lock-fill": "\uE979",
    "uicon-lock-open": "\uE973",
    "uicon-lock-opened-fill": "\uE974",
    "uicon-lock": "\uE97A",
    "uicon-red-packet-fill": "\uE690",
    "uicon-photo-fill": "\uE98B",
    "uicon-photo": "\uE98D",
    "uicon-volume-off-fill": "\uE659",
    "uicon-volume-off": "\uE644",
    "uicon-volume-fill": "\uE670",
    "uicon-volume": "\uE633",
    "uicon-red-packet": "\uE691",
    "uicon-download": "\uE63C",
    "uicon-arrow-up-fill": "\uE6B0",
    "uicon-arrow-down-fill": "\uE600",
    "uicon-play-left-fill": "\uE675",
    "uicon-play-right-fill": "\uE676",
    "uicon-rewind-left-fill": "\uE679",
    "uicon-rewind-right-fill": "\uE67A",
    "uicon-arrow-downward": "\uE604",
    "uicon-arrow-leftward": "\uE601",
    "uicon-arrow-rightward": "\uE603",
    "uicon-arrow-upward": "\uE607",
    "uicon-arrow-down": "\uE60D",
    "uicon-arrow-right": "\uE605",
    "uicon-arrow-left": "\uE60E",
    "uicon-arrow-up": "\uE606",
    "uicon-skip-back-left": "\uE674",
    "uicon-skip-forward-right": "\uE672",
    "uicon-rewind-right": "\uE66F",
    "uicon-rewind-left": "\uE671",
    "uicon-arrow-right-double": "\uE68D",
    "uicon-arrow-left-double": "\uE68C",
    "uicon-wifi-off": "\uE668",
    "uicon-wifi": "\uE667",
    "uicon-empty-data": "\uE62F",
    "uicon-empty-history": "\uE684",
    "uicon-empty-list": "\uE68B",
    "uicon-empty-page": "\uE627",
    "uicon-empty-order": "\uE639",
    "uicon-man": "\uE697",
    "uicon-woman": "\uE69C",
    "uicon-man-add": "\uE61C",
    "uicon-man-add-fill": "\uE64C",
    "uicon-man-delete": "\uE61A",
    "uicon-man-delete-fill": "\uE66A",
    "uicon-zh": "\uE70A",
    "uicon-en": "\uE692"
  };
  var props$m = {
    props: {
      name: {
        type: String,
        default: uni.$u.props.icon.name
      },
      color: {
        type: String,
        default: uni.$u.props.icon.color
      },
      size: {
        type: [String, Number],
        default: uni.$u.props.icon.size
      },
      bold: {
        type: Boolean,
        default: uni.$u.props.icon.bold
      },
      index: {
        type: [String, Number],
        default: uni.$u.props.icon.index
      },
      hoverClass: {
        type: String,
        default: uni.$u.props.icon.hoverClass
      },
      customPrefix: {
        type: String,
        default: uni.$u.props.icon.customPrefix
      },
      label: {
        type: [String, Number],
        default: uni.$u.props.icon.label
      },
      labelPos: {
        type: String,
        default: uni.$u.props.icon.labelPos
      },
      labelSize: {
        type: [String, Number],
        default: uni.$u.props.icon.labelSize
      },
      labelColor: {
        type: String,
        default: uni.$u.props.icon.labelColor
      },
      space: {
        type: [String, Number],
        default: uni.$u.props.icon.space
      },
      imgMode: {
        type: String,
        default: uni.$u.props.icon.imgMode
      },
      width: {
        type: [String, Number],
        default: uni.$u.props.icon.width
      },
      height: {
        type: [String, Number],
        default: uni.$u.props.icon.height
      },
      top: {
        type: [String, Number],
        default: uni.$u.props.icon.top
      },
      stop: {
        type: Boolean,
        default: uni.$u.props.icon.stop
      }
    }
  };
  var _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$I = {
    name: "u-icon",
    data() {
      return {};
    },
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$m],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && uni.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: uni.$u.addUnit(this.size),
          lineHeight: uni.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: uni.$u.addUnit(this.top)
        };
        if (this.color && !uni.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);
        style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);
        return style;
      },
      icon() {
        return icons$1["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "u-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: vue.normalizeStyle([$options.imgStyle, _ctx.$u.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
        style: vue.normalizeStyle([$options.iconStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
        "hover-class": _ctx.hoverClass
      }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
      vue.createCommentVNode(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
      _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "u-icon__label",
        style: vue.normalizeStyle({
          color: _ctx.labelColor,
          fontSize: _ctx.$u.addUnit(_ctx.labelSize),
          marginLeft: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginTop: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginRight: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginBottom: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
        })
      }, vue.toDisplayString(_ctx.label), 5)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-2ee87dc9"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-icon/u-icon.vue"]]);
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  var props$l = {
    props: {
      shape: {
        type: String,
        default: uni.$u.props.search.shape
      },
      bgColor: {
        type: String,
        default: uni.$u.props.search.bgColor
      },
      placeholder: {
        type: String,
        default: uni.$u.props.search.placeholder
      },
      clearabled: {
        type: Boolean,
        default: uni.$u.props.search.clearabled
      },
      focus: {
        type: Boolean,
        default: uni.$u.props.search.focus
      },
      showAction: {
        type: Boolean,
        default: uni.$u.props.search.showAction
      },
      actionStyle: {
        type: Object,
        default: uni.$u.props.search.actionStyle
      },
      actionText: {
        type: String,
        default: uni.$u.props.search.actionText
      },
      inputAlign: {
        type: String,
        default: uni.$u.props.search.inputAlign
      },
      inputStyle: {
        type: Object,
        default: uni.$u.props.search.inputStyle
      },
      disabled: {
        type: Boolean,
        default: uni.$u.props.search.disabled
      },
      borderColor: {
        type: String,
        default: uni.$u.props.search.borderColor
      },
      searchIconColor: {
        type: String,
        default: uni.$u.props.search.searchIconColor
      },
      color: {
        type: String,
        default: uni.$u.props.search.color
      },
      placeholderColor: {
        type: String,
        default: uni.$u.props.search.placeholderColor
      },
      searchIcon: {
        type: String,
        default: uni.$u.props.search.searchIcon
      },
      searchIconSize: {
        type: [Number, String],
        default: uni.$u.props.search.searchIconSize
      },
      margin: {
        type: String,
        default: uni.$u.props.search.margin
      },
      animation: {
        type: Boolean,
        default: uni.$u.props.search.animation
      },
      value: {
        type: String,
        default: uni.$u.props.search.value
      },
      maxlength: {
        type: [String, Number],
        default: uni.$u.props.search.maxlength
      },
      height: {
        type: [String, Number],
        default: uni.$u.props.search.height
      },
      label: {
        type: [String, Number, null],
        default: uni.$u.props.search.label
      }
    }
  };
  const _sfc_main$H = {
    name: "u-search",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$l],
    data() {
      return {
        keyword: "",
        showClear: false,
        show: false,
        focused: this.focus
      };
    },
    watch: {
      keyword(nVal) {
        this.$emit("input", nVal);
        this.$emit("change", nVal);
      },
      value: {
        immediate: true,
        handler(nVal) {
          this.keyword = nVal;
        }
      }
    },
    computed: {
      showActionBtn() {
        return !this.animation && this.showAction;
      }
    },
    methods: {
      inputChange(e) {
        this.keyword = e.detail.value;
      },
      clear() {
        this.keyword = "";
        this.$nextTick(() => {
          this.$emit("clear");
        });
      },
      search(e) {
        this.$emit("search", e.detail.value);
        try {
          uni.hideKeyboard();
        } catch (e2) {
        }
      },
      custom() {
        this.$emit("custom", this.keyword);
        try {
          uni.hideKeyboard();
        } catch (e) {
        }
      },
      getFocus() {
        this.focused = true;
        if (this.animation && this.showAction)
          this.show = true;
        this.$emit("focus", this.keyword);
      },
      blur() {
        setTimeout(() => {
          this.focused = false;
        }, 100);
        this.show = false;
        this.$emit("blur", this.keyword);
      },
      clickHandler() {
        if (this.disabled)
          this.$emit("click");
      },
      clickIcon() {
        this.$emit("clickIcon");
      }
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-search",
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      style: vue.normalizeStyle([{
        margin: _ctx.margin
      }, _ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      vue.createElementVNode("view", {
        class: "u-search__content",
        style: vue.normalizeStyle({
          backgroundColor: _ctx.bgColor,
          borderRadius: _ctx.shape == "round" ? "100px" : "4px",
          borderColor: _ctx.borderColor
        })
      }, [
        _ctx.$slots.label || _ctx.label !== null ? vue.renderSlot(_ctx.$slots, "label", { key: 0 }, () => [
          vue.createElementVNode("text", { class: "u-search__content__label" }, vue.toDisplayString(_ctx.label), 1)
        ], true) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "u-search__content__icon" }, [
          vue.createVNode(_component_u_icon, {
            onClick: $options.clickIcon,
            size: _ctx.searchIconSize,
            name: _ctx.searchIcon,
            color: _ctx.searchIconColor ? _ctx.searchIconColor : _ctx.color
          }, null, 8, ["onClick", "size", "name", "color"])
        ]),
        vue.createElementVNode("input", {
          "confirm-type": "search",
          onBlur: _cache[0] || (_cache[0] = (...args) => $options.blur && $options.blur(...args)),
          value: _ctx.value,
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.search && $options.search(...args)),
          onInput: _cache[2] || (_cache[2] = (...args) => $options.inputChange && $options.inputChange(...args)),
          disabled: _ctx.disabled,
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.getFocus && $options.getFocus(...args)),
          focus: _ctx.focus,
          maxlength: _ctx.maxlength,
          "placeholder-class": "u-search__content__input--placeholder",
          placeholder: _ctx.placeholder,
          "placeholder-style": `color: ${_ctx.placeholderColor}`,
          class: "u-search__content__input",
          type: "text",
          style: vue.normalizeStyle([{
            textAlign: _ctx.inputAlign,
            color: _ctx.color,
            backgroundColor: _ctx.bgColor,
            height: _ctx.$u.addUnit(_ctx.height)
          }, _ctx.inputStyle])
        }, null, 44, ["value", "disabled", "focus", "maxlength", "placeholder", "placeholder-style"]),
        $data.keyword && _ctx.clearabled && $data.focused ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-search__content__icon u-search__content__close",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          vue.createVNode(_component_u_icon, {
            name: "close",
            size: "11",
            color: "#ffffff",
            customStyle: "line-height: 12px"
          })
        ])) : vue.createCommentVNode("v-if", true)
      ], 4),
      vue.createElementVNode("text", {
        style: vue.normalizeStyle([_ctx.actionStyle]),
        class: vue.normalizeClass(["u-search__action", [($options.showActionBtn || $data.show) && "u-search__action--active"]]),
        onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.custom && $options.custom(...args), ["stop", "prevent"]))
      }, vue.toDisplayString(_ctx.actionText), 7)
    ], 4);
  }
  var __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-0a306a29"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-search/u-search.vue"]]);
  var props$k = {
    props: {
      isDot: {
        type: Boolean,
        default: uni.$u.props.badge.isDot
      },
      value: {
        type: [Number, String],
        default: uni.$u.props.badge.value
      },
      show: {
        type: Boolean,
        default: uni.$u.props.badge.show
      },
      max: {
        type: [Number, String],
        default: uni.$u.props.badge.max
      },
      type: {
        type: String,
        default: uni.$u.props.badge.type
      },
      showZero: {
        type: Boolean,
        default: uni.$u.props.badge.showZero
      },
      bgColor: {
        type: [String, null],
        default: uni.$u.props.badge.bgColor
      },
      color: {
        type: [String, null],
        default: uni.$u.props.badge.color
      },
      shape: {
        type: String,
        default: uni.$u.props.badge.shape
      },
      numberType: {
        type: String,
        default: uni.$u.props.badge.numberType
      },
      offset: {
        type: Array,
        default: uni.$u.props.badge.offset
      },
      inverted: {
        type: Boolean,
        default: uni.$u.props.badge.inverted
      },
      absolute: {
        type: Boolean,
        default: uni.$u.props.badge.absolute
      }
    }
  };
  const _sfc_main$G = {
    name: "u-badge",
    mixins: [uni.$u.mpMixin, props$k, uni.$u.mixin],
    computed: {
      boxStyle() {
        let style = {};
        return style;
      },
      badgeStyle() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        if (this.bgColor && !this.inverted) {
          style.backgroundColor = this.bgColor;
        }
        if (this.absolute) {
          style.position = "absolute";
          if (this.offset.length) {
            const top = this.offset[0];
            const right = this.offset[1] || top;
            style.top = uni.$u.addUnit(top);
            style.right = uni.$u.addUnit(right);
          }
        }
        return style;
      },
      showValue() {
        switch (this.numberType) {
          case "overflow":
            return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
          case "ellipsis":
            return Number(this.value) > Number(this.max) ? "..." : this.value;
          case "limit":
            return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
          default:
            return Number(this.value);
        }
      }
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? (vue.openBlock(), vue.createElementBlock("text", {
      key: 0,
      class: vue.normalizeClass([[_ctx.isDot ? "u-badge--dot" : "u-badge--not-dot", _ctx.inverted && "u-badge--inverted", _ctx.shape === "horn" && "u-badge--horn", `u-badge--${_ctx.type}${_ctx.inverted ? "--inverted" : ""}`], "u-badge"]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle), $options.badgeStyle])
    }, vue.toDisplayString(_ctx.isDot ? "" : $options.showValue), 7)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-13728ffe"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-badge/u-badge.vue"]]);
  var props$j = {
    props: {
      duration: {
        type: Number,
        default: uni.$u.props.tabs.duration
      },
      list: {
        type: Array,
        default: uni.$u.props.tabs.list
      },
      lineColor: {
        type: String,
        default: uni.$u.props.tabs.lineColor
      },
      activeStyle: {
        type: [String, Object],
        default: uni.$u.props.tabs.activeStyle
      },
      inactiveStyle: {
        type: [String, Object],
        default: uni.$u.props.tabs.inactiveStyle
      },
      lineWidth: {
        type: [String, Number],
        default: uni.$u.props.tabs.lineWidth
      },
      lineHeight: {
        type: [String, Number],
        default: uni.$u.props.tabs.lineHeight
      },
      lineBgSize: {
        type: String,
        default: uni.$u.props.tabs.lineBgSize
      },
      itemStyle: {
        type: [String, Object],
        default: uni.$u.props.tabs.itemStyle
      },
      scrollable: {
        type: Boolean,
        default: uni.$u.props.tabs.scrollable
      },
      current: {
        type: [Number, String],
        default: uni.$u.props.tabs.current
      },
      keyName: {
        type: String,
        default: uni.$u.props.tabs.keyName
      }
    }
  };
  const _sfc_main$F = {
    name: "u-tabs",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$j],
    data() {
      return {
        firstTime: true,
        scrollLeft: 0,
        scrollViewWidth: 0,
        lineOffsetLeft: 0,
        tabsRect: {
          left: 0
        },
        innerCurrent: 0,
        moving: false
      };
    },
    watch: {
      current: {
        immediate: true,
        handler(newValue, oldValue) {
          if (newValue !== this.innerCurrent) {
            this.innerCurrent = newValue;
            this.$nextTick(() => {
              this.resize();
            });
          }
        }
      },
      list() {
        this.$nextTick(() => {
          this.resize();
        });
      }
    },
    computed: {
      textStyle() {
        return (index2) => {
          const style = {};
          const customeStyle = index2 === this.innerCurrent ? uni.$u.addStyle(this.activeStyle) : uni.$u.addStyle(this.inactiveStyle);
          if (this.list[index2].disabled) {
            style.color = "#c8c9cc";
          }
          return uni.$u.deepMerge(customeStyle, style);
        };
      },
      propsBadge() {
        return uni.$u.props.badge;
      }
    },
    async mounted() {
      this.init();
    },
    methods: {
      setLineLeft() {
        const tabItem = this.list[this.innerCurrent];
        if (!tabItem) {
          return;
        }
        let lineOffsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => total + curr.rect.width, 0);
        const lineWidth = uni.$u.getPx(this.lineWidth);
        this.lineOffsetLeft = lineOffsetLeft + (tabItem.rect.width - lineWidth) / 2;
        if (this.firstTime) {
          setTimeout(() => {
            this.firstTime = false;
          }, 10);
        }
      },
      animation(x, duration = 0) {
      },
      clickHandler(item, index2) {
        this.$emit("click", __spreadProps(__spreadValues({}, item), {
          index: index2
        }));
        if (item.disabled)
          return;
        this.innerCurrent = index2;
        this.resize();
        this.$emit("change", __spreadProps(__spreadValues({}, item), {
          index: index2
        }));
      },
      init() {
        uni.$u.sleep().then(() => {
          this.resize();
        });
      },
      setScrollLeft() {
        const tabRect = this.list[this.innerCurrent];
        const offsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => {
          return total + curr.rect.width;
        }, 0);
        const windowWidth = uni.$u.sys().windowWidth;
        let scrollLeft = offsetLeft - (this.tabsRect.width - tabRect.rect.width) / 2 - (windowWidth - this.tabsRect.right) / 2 + this.tabsRect.left / 2;
        scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - this.tabsRect.width);
        this.scrollLeft = Math.max(0, scrollLeft);
      },
      resize() {
        if (this.list.length === 0) {
          return;
        }
        Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(([tabsRect, itemRect = []]) => {
          this.tabsRect = tabsRect;
          this.scrollViewWidth = 0;
          itemRect.map((item, index2) => {
            this.scrollViewWidth += item.width;
            this.list[index2].rect = item;
          });
          this.setLineLeft();
          this.setScrollLeft();
        });
      },
      getTabsRect() {
        return new Promise((resolve) => {
          this.queryRect("u-tabs__wrapper__scroll-view").then((size) => resolve(size));
        });
      },
      getAllItemRect() {
        return new Promise((resolve) => {
          const promiseAllArr = this.list.map((item, index2) => this.queryRect(`u-tabs__wrapper__nav__item-${index2}`, true));
          Promise.all(promiseAllArr).then((sizes) => resolve(sizes));
        });
      },
      queryRect(el, item) {
        return new Promise((resolve) => {
          this.$uGetRect(`.${el}`).then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-tabs" }, [
      vue.createElementVNode("view", { class: "u-tabs__wrapper" }, [
        vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
        vue.createElementVNode("view", { class: "u-tabs__wrapper__scroll-view-wrapper" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": _ctx.scrollable,
            "scroll-left": $data.scrollLeft,
            "scroll-with-animation": "",
            class: "u-tabs__wrapper__scroll-view",
            "show-scrollbar": false,
            ref: "u-tabs__wrapper__scroll-view"
          }, [
            vue.createElementVNode("view", {
              class: "u-tabs__wrapper__nav",
              ref: "u-tabs__wrapper__nav"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["u-tabs__wrapper__nav__item", [`u-tabs__wrapper__nav__item-${index2}`, item.disabled && "u-tabs__wrapper__nav__item--disabled"]]),
                  key: index2,
                  onClick: ($event) => $options.clickHandler(item, index2),
                  ref_for: true,
                  ref: `u-tabs__wrapper__nav__item-${index2}`,
                  style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.itemStyle), { flex: _ctx.scrollable ? "" : 1 }])
                }, [
                  vue.createElementVNode("text", {
                    class: vue.normalizeClass([[item.disabled && "u-tabs__wrapper__nav__item__text--disabled"], "u-tabs__wrapper__nav__item__text"]),
                    style: vue.normalizeStyle([$options.textStyle(index2)])
                  }, vue.toDisplayString(item[_ctx.keyName]), 7),
                  vue.createVNode(_component_u_badge, {
                    show: !!(item.badge && (item.badge.show || item.badge.isDot || item.badge.value)),
                    isDot: item.badge && item.badge.isDot || $options.propsBadge.isDot,
                    value: item.badge && item.badge.value || $options.propsBadge.value,
                    max: item.badge && item.badge.max || $options.propsBadge.max,
                    type: item.badge && item.badge.type || $options.propsBadge.type,
                    showZero: item.badge && item.badge.showZero || $options.propsBadge.showZero,
                    bgColor: item.badge && item.badge.bgColor || $options.propsBadge.bgColor,
                    color: item.badge && item.badge.color || $options.propsBadge.color,
                    shape: item.badge && item.badge.shape || $options.propsBadge.shape,
                    numberType: item.badge && item.badge.numberType || $options.propsBadge.numberType,
                    inverted: item.badge && item.badge.inverted || $options.propsBadge.inverted,
                    customStyle: "margin-left: 4px;"
                  }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                ], 14, ["onClick"]);
              }), 128)),
              vue.createElementVNode("view", {
                class: "u-tabs__wrapper__nav__line",
                ref: "u-tabs__wrapper__nav__line",
                style: vue.normalizeStyle([{
                  width: _ctx.$u.addUnit(_ctx.lineWidth),
                  transform: `translate(${$data.lineOffsetLeft}px)`,
                  transitionDuration: `${$data.firstTime ? 0 : _ctx.duration}ms`,
                  height: _ctx.$u.addUnit(_ctx.lineHeight),
                  background: _ctx.lineColor,
                  backgroundSize: _ctx.lineBgSize
                }])
              }, null, 4)
            ], 512)
          ], 8, ["scroll-x", "scroll-left"])
        ]),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ])
    ]);
  }
  var __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-48634e29"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-tabs/u-tabs.vue"]]);
  var props$i = {
    props: {
      show: {
        type: Boolean,
        default: uni.$u.props.transition.show
      },
      mode: {
        type: String,
        default: uni.$u.props.transition.mode
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.transition.duration
      },
      timingFunction: {
        type: String,
        default: uni.$u.props.transition.timingFunction
      }
    }
  };
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  var transition$1 = {
    methods: {
      clickHandler() {
        this.$emit("click");
      },
      vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        this.$nextTick(async () => {
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        });
      },
      vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        this.$nextTick(() => {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        });
      },
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$E = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        viewStyle: {},
        status: "",
        transitionEnded: false,
        display: false,
        classes: ""
      };
    },
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return __spreadValues(__spreadValues({
          transitionDuration: `${this.duration}ms`,
          transitionTimingFunction: this.timingFunction
        }, uni.$u.addStyle(customStyle)), viewStyle);
      }
    },
    mixins: [uni.$u.mpMixin, uni.$u.mixin, transition$1, props$i],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        immediate: true
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-transition", $data.classes]),
      ref: "u-transition",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
      style: vue.normalizeStyle([$options.mergeStyle]),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 38)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-8e60ec6e"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-transition/u-transition.vue"]]);
  var props$h = {
    props: {
      mode: {
        type: String,
        default: uni.$u.props.backtop.mode
      },
      icon: {
        type: String,
        default: uni.$u.props.backtop.icon
      },
      text: {
        type: String,
        default: uni.$u.props.backtop.text
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.backtop.duration
      },
      scrollTop: {
        type: [String, Number],
        default: uni.$u.props.backtop.scrollTop
      },
      top: {
        type: [String, Number],
        default: uni.$u.props.backtop.top
      },
      bottom: {
        type: [String, Number],
        default: uni.$u.props.backtop.bottom
      },
      right: {
        type: [String, Number],
        default: uni.$u.props.backtop.right
      },
      zIndex: {
        type: [String, Number],
        default: uni.$u.props.backtop.zIndex
      },
      iconStyle: {
        type: Object,
        default: uni.$u.props.backtop.iconStyle
      }
    }
  };
  const _sfc_main$D = {
    name: "u-back-top",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$h],
    computed: {
      backTopStyle() {
        const style = {
          bottom: uni.$u.addUnit(this.bottom),
          right: uni.$u.addUnit(this.right),
          width: "40px",
          height: "40px",
          position: "fixed",
          zIndex: 10
        };
        return style;
      },
      show() {
        return uni.$u.getPx(this.scrollTop) > uni.$u.getPx(this.top);
      },
      contentStyle() {
        const style = {};
        let radius = 0;
        if (this.mode === "circle") {
          radius = "100px";
        } else {
          radius = "4px";
        }
        style.borderTopLeftRadius = radius;
        style.borderTopRightRadius = radius;
        style.borderBottomLeftRadius = radius;
        style.borderBottomRightRadius = radius;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      backToTop() {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: this.duration
        });
        this.$emit("click");
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4$2);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      mode: "fade",
      customStyle: $options.backTopStyle,
      show: $options.show
    }, {
      default: vue.withCtx(() => [
        !_ctx.$slots.default && !_ctx.$slots.$default ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-back-top",
          style: vue.normalizeStyle([$options.contentStyle]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.backToTop && $options.backToTop(...args))
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.icon,
            "custom-style": _ctx.iconStyle
          }, null, 8, ["name", "custom-style"]),
          _ctx.text ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "u-back-top__text"
          }, vue.toDisplayString(_ctx.text), 1)) : vue.createCommentVNode("v-if", true)
        ], 4)) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
      ]),
      _: 3
    }, 8, ["customStyle", "show"]);
  }
  var __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-221951ee"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-back-top/u-back-top.vue"]]);
  const _sfc_main$C = {
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
      tabChange(index2) {
        uni.request({
          url: "http://localhost:4000/api/index/tab",
          data: {
            title: index2.name
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
      uni.request({
        url: "http://localhost:4000/api/index",
        method: "GET",
        success: (res) => {
          this.commodity = res.data;
          formatAppLog("log", "at pages/index/index.vue:105", res.data);
        }
      });
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_search = resolveEasycom(vue.resolveDynamicComponent("u-search"), __easycom_0$9);
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_1$5);
    const _component_u_back_top = resolveEasycom(vue.resolveDynamicComponent("u-back-top"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "index" }, [
        vue.createElementVNode("view", { class: "top" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("navigator", {
              url: "/pages/classification/classification",
              "open-type": "switchTab"
            }, [
              vue.createElementVNode("image", {
                src: "/static/image/fl.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("navigator", { url: "/pages/search/search" }, [
              vue.createElementVNode("view", { class: "u-search" }, [
                vue.createVNode(_component_u_search, {
                  placeholder: "\u82F9\u679C\u6570\u636E\u7EBF",
                  "show-action": false,
                  height: "60rpx"
                })
              ])
            ])
          ]),
          vue.createElementVNode("image", {
            src: "/static/image/banner.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "classifycation" }, [
          vue.createElementVNode("view", { class: "content" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(8, (item) => {
              return vue.createElementVNode("view", { key: item }, [
                vue.createElementVNode("image", { src: "/static/image/sj.png" }),
                vue.createElementVNode("text", null, "\u624B\u673A\u7279\u5356")
              ]);
            }), 64))
          ]),
          vue.createElementVNode("image", {
            class: "jdg",
            src: "/static/image/jdgreen.png",
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "qb",
            src: "/static/image/qp.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "comm" }, [
          vue.createVNode(_component_u_tabs, {
            list: $data.list2,
            lineColor: "#01c30b",
            onChange: $options.tabChange
          }, null, 8, ["list", "onChange"]),
          vue.createElementVNode("view", { class: "list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.commodity, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "item",
                key: item.commodity_id
              }, [
                vue.createElementVNode("navigator", {
                  url: "/pages/commodity/commodity?id=" + item.commodity_id
                }, [
                  vue.createElementVNode("image", {
                    src: "http://localhost:4000/images/" + item.src[0],
                    mode: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.title), 1),
                  vue.createElementVNode("view", { class: "jg" }, "\uFFE5" + vue.toDisplayString(item.newprice), 1)
                ], 8, ["url"])
              ]);
            }), 128))
          ])
        ])
      ]),
      vue.createVNode(_component_u_back_top, { "scroll-top": $data.scrollTop }, null, 8, ["scroll-top"])
    ], 64);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-57280228"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/index/index.vue"]]);
  const _sfc_main$B = {
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
        uni.request({
          url: "http://localhost:4000/api/classification",
          data: {
            classifyName: this.cateList[this.activeIndex].classifyName
          },
          method: "GET",
          success: (res) => {
            formatAppLog("log", "at pages/classification/classification.vue:88", res.data);
            this.goodList = res.data;
          }
        });
      }
    },
    onLoad() {
      uni.request({
        url: "http://localhost:4000/api/classification",
        data: {
          classifyName: this.cateList[this.activeIndex].classifyName
        },
        method: "GET",
        success: (res) => {
          formatAppLog("log", "at pages/classification/classification.vue:108", res.data);
          this.goodList = res.data;
        }
      });
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_search = resolveEasycom(vue.resolveDynamicComponent("u-search"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("view", { class: "classifycation" }, [
      vue.createElementVNode("navigator", { url: "/pages/search/search" }, [
        vue.createElementVNode("view", { class: "search" }, [
          vue.createVNode(_component_u_search, {
            placeholder: "\u7A7A\u6C14\u70B8\u9505",
            "show-action": false
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "cate-container" }, [
        vue.createElementVNode("view", { class: "cate-left" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.cateList, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["cate-item", $data.activeIndex == index2 ? "active" : ""]),
              key: index2,
              onClick: ($event) => $options.changeActive(index2)
            }, vue.toDisplayString(item.classifyName), 11, ["onClick"]);
          }), 128))
        ]),
        vue.createElementVNode("view", { class: "cate-right" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.goodList, (goodItem, goodIndex) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "cate-content",
              key: goodIndex
            }, [
              vue.createElementVNode("navigator", {
                url: "/pages/list/list?title=" + goodItem.text
              }, [
                vue.createElementVNode("image", {
                  src: "http://localhost:4000/images/" + goodItem.pic_url,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "cate-text" }, vue.toDisplayString(goodItem.text), 1)
              ], 8, ["url"])
            ]);
          }), 128))
        ])
      ])
    ]);
  }
  var PagesClassificationClassification = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-0bc2eff4"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/classification/classification.vue"]]);
  const _sfc_main$A = {
    name: "tuiListCell",
    emits: ["click"],
    props: {
      arrow: {
        type: Boolean,
        default: false
      },
      arrowColor: {
        type: String,
        default: ""
      },
      hover: {
        type: Boolean,
        default: true
      },
      unlined: {
        type: Boolean,
        default: false
      },
      lineLeft: {
        type: Boolean,
        default: true
      },
      lineRight: {
        type: Boolean,
        default: false
      },
      padding: {
        type: String,
        default: "26rpx 30rpx"
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      },
      size: {
        type: Number,
        default: 28
      },
      color: {
        type: String,
        default: "#333"
      },
      radius: {
        type: Boolean,
        default: false
      },
      arrowRight: {
        type: Boolean,
        default: true
      },
      index: {
        type: Number,
        default: 0
      }
    },
    methods: {
      handleClick() {
        this.$emit("click", {
          index: this.index
        });
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["tui-list-class tui-list-cell", [
        $props.arrow ? "tui-cell-arrow" : "",
        $props.arrow && $props.arrowRight ? "" : "tui-arrow-right",
        $props.unlined ? "tui-cell-unlined" : "",
        $props.lineLeft ? "tui-line-left" : "",
        $props.lineRight ? "tui-line-right" : "",
        $props.arrow && $props.arrowColor ? "tui-arrow-" + $props.arrowColor : "",
        $props.radius ? "tui-radius" : ""
      ]]),
      "hover-class": $props.hover ? "tui-cell-hover" : "",
      style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor, fontSize: $props.size + "rpx", color: $props.color, padding: $props.padding }),
      "hover-stay-time": 150,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 14, ["hover-class"]);
  }
  var __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-45c8ea59"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-list-cell/tui-list-cell.vue"]]);
  const _sfc_main$z = {
    name: "tuiListView",
    props: {
      title: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#666"
      },
      size: {
        type: Number,
        default: 30
      },
      backgroundColor: {
        type: String,
        default: "transparent"
      },
      unlined: {
        type: String,
        default: ""
      },
      marginTop: {
        type: String,
        default: "0"
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "tui-list-view tui-view-class",
      style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor, marginTop: $props.marginTop })
    }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "tui-list-title",
        style: vue.normalizeStyle({ color: $props.color, fontSize: $props.size + "rpx", lineHeight: 30 + "rpx" })
      }, vue.toDisplayString($props.title), 5)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["tui-list-content", [$props.unlined ? "tui-border-" + $props.unlined : ""]])
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2)
    ], 4);
  }
  var __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-72f7489f"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-list-view/tui-list-view.vue"]]);
  const _sfc_main$y = {
    data() {
      return {
        value4: 0
      };
    },
    methods: {
      click1(e) {
        formatAppLog("log", "at pages/my/my.vue:101", "click1", e);
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tui_list_cell = resolveEasycom(vue.resolveDynamicComponent("tui-list-cell"), __easycom_3$2);
    const _component_tui_list_view = resolveEasycom(vue.resolveDynamicComponent("tui-list-view"), __easycom_4$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "my" }, [
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", { class: "user" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: "/static/image/sj.png",
              mode: ""
            }),
            vue.createElementVNode("view", { class: "name" }, "\u5C0F\u660E")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("view", null, "0"),
              vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF")
            ]),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("view", null, "0"),
              vue.createElementVNode("view", null, "\u4F18\u60E0\u5238")
            ]),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("view", null, "0\u5143"),
              vue.createElementVNode("view", null, "\u5DF2\u8D5A")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "dd" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("image", {
            src: "/static/icon/classification2.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("image", {
            src: "/static/icon/classification2.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("image", {
            src: "/static/icon/classification2.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("image", {
            src: "/static/icon/classification2.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
        ])
      ]),
      vue.createElementVNode("view", { class: "dd" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "0"),
          vue.createElementVNode("view", null, "\u4EE3\u552E\u5904")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "0"),
          vue.createElementVNode("view", null, "\u5DF2\u5356\u51FA")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "0"),
          vue.createElementVNode("view", null, "\u5DF2\u4E0B\u67B6")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("image", {
            src: "/static/icon/classification2.png",
            mode: ""
          }),
          vue.createElementVNode("view", null, "\u6211\u7684\u95F2\u7F6E")
        ])
      ]),
      vue.createElementVNode("view", { class: "list" }, [
        vue.createVNode(_component_tui_list_view, { color: "#777" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_tui_list_cell, { arrow: "" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "item" }, [
                  vue.createElementVNode("image", {
                    src: "/static/icon/information1.png",
                    mode: ""
                  }),
                  vue.createElementVNode("view", null, "\u6211\u7684\u5730\u5740")
                ])
              ]),
              _: 1
            }),
            vue.createVNode(_component_tui_list_cell, { arrow: "" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "item" }, [
                  vue.createElementVNode("image", {
                    src: "/static/icon/information1.png",
                    mode: ""
                  }),
                  vue.createElementVNode("view", null, "\u6211\u7684\u5730\u5740")
                ])
              ]),
              _: 1
            }),
            vue.createVNode(_component_tui_list_cell, { arrow: "" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "item" }, [
                  vue.createElementVNode("image", {
                    src: "/static/icon/information1.png",
                    mode: ""
                  }),
                  vue.createElementVNode("view", null, "\u6211\u7684\u5730\u5740")
                ])
              ]),
              _: 1
            }),
            vue.createVNode(_component_tui_list_cell, { arrow: "" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "item" }, [
                  vue.createElementVNode("image", {
                    src: "/static/icon/information1.png",
                    mode: ""
                  }),
                  vue.createElementVNode("view", null, "\u6211\u7684\u5730\u5740")
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]);
  }
  var PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-0be17cc6"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/my/my.vue"]]);
  var props$g = {
    props: {
      text: {
        type: [Array],
        default: uni.$u.props.columnNotice.text
      },
      icon: {
        type: String,
        default: uni.$u.props.columnNotice.icon
      },
      mode: {
        type: String,
        default: uni.$u.props.columnNotice.mode
      },
      color: {
        type: String,
        default: uni.$u.props.columnNotice.color
      },
      bgColor: {
        type: String,
        default: uni.$u.props.columnNotice.bgColor
      },
      fontSize: {
        type: [String, Number],
        default: uni.$u.props.columnNotice.fontSize
      },
      speed: {
        type: [String, Number],
        default: uni.$u.props.columnNotice.speed
      },
      step: {
        type: Boolean,
        default: uni.$u.props.columnNotice.step
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.columnNotice.duration
      },
      disableTouch: {
        type: Boolean,
        default: uni.$u.props.columnNotice.disableTouch
      }
    }
  };
  const _sfc_main$x = {
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$g],
    watch: {
      text: {
        immediate: true,
        handler(newValue, oldValue) {
          if (!uni.$u.test.array(newValue)) {
            uni.$u.error("noticebar\u7EC4\u4EF6direction\u4E3Acolumn\u65F6\uFF0C\u8981\u6C42text\u53C2\u6570\u4E3A\u6570\u7EC4\u5F62\u5F0F");
          }
        }
      }
    },
    computed: {
      textStyle() {
        let style = {};
        style.color = this.color;
        style.fontSize = uni.$u.addUnit(this.fontSize);
        return style;
      },
      vertical() {
        if (this.mode == "horizontal")
          return false;
        else
          return true;
      }
    },
    data() {
      return {
        index: 0
      };
    },
    methods: {
      noticeChange(e) {
        this.index = e.detail.current;
      },
      clickHandler() {
        this.$emit("click", this.index);
      },
      close() {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-notice",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-notice__left-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.icon,
            color: _ctx.color,
            size: "19"
          }, null, 8, ["name", "color"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createElementVNode("swiper", {
        "disable-touch": _ctx.disableTouch,
        vertical: _ctx.step ? false : true,
        circular: "",
        interval: _ctx.duration,
        autoplay: true,
        class: "u-notice__swiper",
        onChange: _cache[0] || (_cache[0] = (...args) => $options.noticeChange && $options.noticeChange(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.text, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            key: index2,
            class: "u-notice__swiper__item"
          }, [
            vue.createElementVNode("text", {
              class: "u-notice__swiper__item__text u-line-1",
              style: vue.normalizeStyle([$options.textStyle])
            }, vue.toDisplayString(item), 5)
          ]);
        }), 128))
      ], 40, ["disable-touch", "vertical", "interval"]),
      ["link", "closable"].includes(_ctx.mode) ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-notice__right-icon"
      }, [
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: "arrow-right",
          size: 17,
          color: _ctx.color
        }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "closable" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 1,
          name: "close",
          size: 16,
          color: _ctx.color,
          onClick: $options.close
        }, null, 8, ["color", "onClick"])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-3bda0f19"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-column-notice/u-column-notice.vue"]]);
  var props$f = {
    props: {
      text: {
        type: String,
        default: uni.$u.props.rowNotice.text
      },
      icon: {
        type: String,
        default: uni.$u.props.rowNotice.icon
      },
      mode: {
        type: String,
        default: uni.$u.props.rowNotice.mode
      },
      color: {
        type: String,
        default: uni.$u.props.rowNotice.color
      },
      bgColor: {
        type: String,
        default: uni.$u.props.rowNotice.bgColor
      },
      fontSize: {
        type: [String, Number],
        default: uni.$u.props.rowNotice.fontSize
      },
      speed: {
        type: [String, Number],
        default: uni.$u.props.rowNotice.speed
      }
    }
  };
  const _sfc_main$w = {
    name: "u-row-notice",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$f],
    data() {
      return {
        animationDuration: "0",
        animationPlayState: "paused",
        nvueInit: true,
        show: true
      };
    },
    watch: {
      text: {
        immediate: true,
        handler(newValue, oldValue) {
          this.vue();
          if (!uni.$u.test.string(newValue)) {
            uni.$u.error("noticebar\u7EC4\u4EF6direction\u4E3Arow\u65F6\uFF0C\u8981\u6C42text\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u5F62\u5F0F");
          }
        }
      },
      fontSize() {
        this.vue();
      },
      speed() {
        this.vue();
      }
    },
    computed: {
      textStyle() {
        let style = {};
        style.color = this.color;
        style.fontSize = uni.$u.addUnit(this.fontSize);
        return style;
      },
      animationStyle() {
        let style = {};
        style.animationDuration = this.animationDuration;
        style.animationPlayState = this.animationPlayState;
        return style;
      },
      innerText() {
        let result = [], len = 20;
        const textArr = this.text.split("");
        for (let i = 0; i < textArr.length; i += len) {
          result.push(textArr.slice(i, i + len).join(""));
        }
        return result;
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page2 = pages2[pages2.length - 1];
      var currentWebview = page2.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.init();
    },
    methods: {
      init() {
        this.vue();
        if (!uni.$u.test.string(this.text)) {
          uni.$u.error("noticebar\u7EC4\u4EF6direction\u4E3Arow\u65F6\uFF0C\u8981\u6C42text\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u5F62\u5F0F");
        }
      },
      async vue() {
        let textWidth = 0;
        await uni.$u.sleep();
        textWidth = (await this.$uGetRect(".u-notice__content__text")).width;
        (await this.$uGetRect(".u-notice__content")).width;
        this.animationDuration = `${textWidth / uni.$u.getPx(this.speed)}s`;
        this.animationPlayState = "paused";
        setTimeout(() => {
          this.animationPlayState = "running";
        }, 10);
      },
      async nvue() {
      },
      loopAnimation(textWidth, boxWidth) {
      },
      getNvueRect(el) {
      },
      clickHandler(index2) {
        this.$emit("click");
      },
      close() {
        this.$emit("close");
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-notice",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-notice__left-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.icon,
            color: _ctx.color,
            size: "19"
          }, null, 8, ["name", "color"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createElementVNode("view", {
        class: "u-notice__content",
        ref: "u-notice__content"
      }, [
        vue.createElementVNode("view", {
          ref: "u-notice__content__text",
          class: "u-notice__content__text",
          style: vue.normalizeStyle([$options.animationStyle])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.innerText, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("text", {
              key: index2,
              style: vue.normalizeStyle([$options.textStyle])
            }, vue.toDisplayString(item), 5);
          }), 128))
        ], 4)
      ], 512),
      ["link", "closable"].includes(_ctx.mode) ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-notice__right-icon"
      }, [
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: "arrow-right",
          size: 17,
          color: _ctx.color
        }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "closable" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 1,
          onClick: $options.close,
          name: "close",
          size: 16,
          color: _ctx.color
        }, null, 8, ["onClick", "color"])) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-9adf94ee"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-row-notice/u-row-notice.vue"]]);
  var props$e = {
    props: {
      text: {
        type: [Array, String],
        default: uni.$u.props.noticeBar.text
      },
      direction: {
        type: String,
        default: uni.$u.props.noticeBar.direction
      },
      step: {
        type: Boolean,
        default: uni.$u.props.noticeBar.step
      },
      icon: {
        type: String,
        default: uni.$u.props.noticeBar.icon
      },
      mode: {
        type: String,
        default: uni.$u.props.noticeBar.mode
      },
      color: {
        type: String,
        default: uni.$u.props.noticeBar.color
      },
      bgColor: {
        type: String,
        default: uni.$u.props.noticeBar.bgColor
      },
      speed: {
        type: [String, Number],
        default: uni.$u.props.noticeBar.speed
      },
      fontSize: {
        type: [String, Number],
        default: uni.$u.props.noticeBar.fontSize
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.noticeBar.duration
      },
      disableTouch: {
        type: Boolean,
        default: uni.$u.props.noticeBar.disableTouch
      },
      url: {
        type: String,
        default: uni.$u.props.noticeBar.url
      },
      linkType: {
        type: String,
        default: uni.$u.props.noticeBar.linkType
      }
    }
  };
  const _sfc_main$v = {
    name: "u-notice-bar",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$e],
    data() {
      return {
        show: true
      };
    },
    methods: {
      click(index2) {
        this.$emit("click", index2);
        if (this.url && this.linkType) {
          this.openPage();
        }
      },
      close() {
        this.show = false;
        this.$emit("close");
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_column_notice = resolveEasycom(vue.resolveDynamicComponent("u-column-notice"), __easycom_0$7);
    const _component_u_row_notice = resolveEasycom(vue.resolveDynamicComponent("u-row-notice"), __easycom_1$4);
    return $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "u-notice-bar",
      style: vue.normalizeStyle([{
        backgroundColor: _ctx.bgColor
      }, _ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      _ctx.direction === "column" || _ctx.direction === "row" && _ctx.step ? (vue.openBlock(), vue.createBlock(_component_u_column_notice, {
        key: 0,
        color: _ctx.color,
        bgColor: _ctx.bgColor,
        text: _ctx.text,
        mode: _ctx.mode,
        step: _ctx.step,
        icon: _ctx.icon,
        "disable-touch": _ctx.disableTouch,
        fontSize: _ctx.fontSize,
        duration: _ctx.duration,
        onClose: $options.close,
        onClick: $options.click
      }, null, 8, ["color", "bgColor", "text", "mode", "step", "icon", "disable-touch", "fontSize", "duration", "onClose", "onClick"])) : (vue.openBlock(), vue.createBlock(_component_u_row_notice, {
        key: 1,
        color: _ctx.color,
        bgColor: _ctx.bgColor,
        text: _ctx.text,
        mode: _ctx.mode,
        fontSize: _ctx.fontSize,
        speed: _ctx.speed,
        url: _ctx.url,
        linkType: _ctx.linkType,
        icon: _ctx.icon,
        onClose: $options.close,
        onClick: $options.click
      }, null, 8, ["color", "bgColor", "text", "mode", "fontSize", "speed", "url", "linkType", "icon", "onClose", "onClick"]))
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-24c07869"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-notice-bar/u-notice-bar.vue"]]);
  let mpMixins = {};
  mpMixins = {
    data() {
      return {
        is_show: "none"
      };
    },
    watch: {
      show(newVal) {
        this.is_show = this.show;
      }
    },
    created() {
      this.swipeaction = this.getSwipeAction();
      if (this.swipeaction.children !== void 0) {
        this.swipeaction.children.push(this);
      }
    },
    mounted() {
      this.is_show = this.show;
    },
    methods: {
      closeSwipe(e) {
        if (!this.autoClose)
          return;
        this.swipeaction.closeOther(this);
      },
      change(e) {
        this.$emit("change", e.open);
        if (this.is_show !== e.open) {
          this.is_show = e.open;
        }
      },
      appTouchStart(e) {
        const {
          clientX
        } = e.changedTouches[0];
        this.clientX = clientX;
        this.timestamp = new Date().getTime();
      },
      appTouchEnd(e, index2, item, position) {
        const {
          clientX
        } = e.changedTouches[0];
        let diff = Math.abs(this.clientX - clientX);
        let time = new Date().getTime() - this.timestamp;
        if (diff < 40 && time < 300) {
          this.$emit("click", {
            content: item,
            index: index2,
            position
          });
        }
      },
      onClickForPC(index2, item, position) {
        return;
      }
    }
  };
  var mpwxs = mpMixins;
  let bindIngXMixins = {};
  let otherMixins = {};
  var block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxsswipe");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxsswipe"] = "b0fc8018";
  };
  var block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("renderswipe");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["renderswipe"] = "74bb5072";
  };
  const _sfc_main$u = {
    mixins: [mpwxs, bindIngXMixins, otherMixins],
    emits: ["click", "change"],
    props: {
      show: {
        type: String,
        default: "none"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      threshold: {
        type: Number,
        default: 20
      },
      leftOptions: {
        type: Array,
        default() {
          return [];
        }
      },
      rightOptions: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    methods: {
      uninstall() {
        if (this.swipeaction) {
          this.swipeaction.children.forEach((item, index2) => {
            if (item === this) {
              this.swipeaction.children.splice(index2, 1);
            }
          });
        }
      },
      getSwipeAction(name = "uniSwipeAction") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" \u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F app vue\u7AEF h5 \u4F7F\u7528wxs \u5B9E\u73B0"),
      vue.createElementVNode("view", { class: "uni-swipe" }, [
        vue.createElementVNode("view", {
          class: "uni-swipe_box",
          "change:prop": _ctx.wxsswipe.showWatch,
          prop: _ctx.is_show,
          "data-threshold": $props.threshold,
          "data-disabled": $props.disabled,
          onTouchstart: _cache[2] || (_cache[2] = (...args) => _ctx.wxsswipe.touchstart && _ctx.wxsswipe.touchstart(...args)),
          onTouchmove: _cache[3] || (_cache[3] = (...args) => _ctx.wxsswipe.touchmove && _ctx.wxsswipe.touchmove(...args)),
          onTouchend: _cache[4] || (_cache[4] = (...args) => _ctx.wxsswipe.touchend && _ctx.wxsswipe.touchend(...args))
        }, [
          vue.createCommentVNode(" \u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F app vue\u7AEF h5 \u4F7F\u7528wxs \u5B9E\u73B0"),
          vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--left" }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.leftOptions, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  style: vue.normalizeStyle({
                    backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                  }),
                  class: "uni-swipe_button button-hock",
                  onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                  onTouchend: ($event) => _ctx.appTouchEnd($event, index2, item, "left"),
                  onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index2, item, "left"), ["stop"])
                }, [
                  vue.createElementVNode("text", {
                    class: "uni-swipe_button-text",
                    style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                  }, vue.toDisplayString(item.text), 5)
                ], 44, ["onTouchend", "onClick"]);
              }), 128))
            ], true)
          ]),
          vue.createElementVNode("view", { class: "uni-swipe_text--center" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--right" }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.rightOptions, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  style: vue.normalizeStyle({
                    backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                  }),
                  class: "uni-swipe_button button-hock",
                  onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                  onTouchend: ($event) => _ctx.appTouchEnd($event, index2, item, "right"),
                  onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index2, item, "right"), ["stop"])
                }, [
                  vue.createElementVNode("text", {
                    class: "uni-swipe_button-text",
                    style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                  }, vue.toDisplayString(item.text), 5)
                ], 44, ["onTouchend", "onClick"]);
              }), 128))
            ], true)
          ])
        ], 40, ["change:prop", "prop", "data-threshold", "data-disabled"])
      ]),
      vue.createCommentVNode(" app nvue\u7AEF \u4F7F\u7528 bindingx "),
      vue.createCommentVNode(" \u5176\u4ED6\u5E73\u53F0\u4F7F\u7528 js \uFF0C\u957F\u5217\u8868\u6027\u80FD\u53EF\u80FD\u4F1A\u6709\u5F71\u54CD")
    ], 2112);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$u);
  if (typeof block1 === "function")
    block1(_sfc_main$u);
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-22750408"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
  const _sfc_main$t = {
    name: "uniSwipeAction",
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    methods: {
      resize() {
      },
      closeAll() {
        this.children.forEach((vm) => {
          vm.is_show = "none";
        });
      },
      closeOther(vm) {
        if (this.openItem && this.openItem !== vm) {
          this.openItem.is_show = "none";
        }
        this.openItem = vm;
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue"]]);
  const _sfc_main$s = {
    data() {
      return {
        text1: "\u8BF7\u4E0D\u8981\u8131\u79BB\u5E73\u53F0\u4EA4\u6613",
        options: [{
          text: "\u53D6\u6D88",
          style: {
            backgroundColor: "#007aff"
          }
        }, {
          text: "\u786E\u8BA4",
          style: {
            backgroundColor: "#dd524d"
          }
        }]
      };
    },
    methods: {
      aaa() {
        formatAppLog("log", "at pages/information/information.vue:56", "aaa");
      },
      swipeChange(e, index2) {
        formatAppLog("log", "at pages/information/information.vue:62", "\u5F53\u524D\u72B6\u6001\uFF1A" + e + "\uFF0C\u4E0B\u6807\uFF1A" + index2);
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_notice_bar = resolveEasycom(vue.resolveDynamicComponent("u-notice-bar"), __easycom_0$6);
    const _component_tui_list_cell = resolveEasycom(vue.resolveDynamicComponent("tui-list-cell"), __easycom_3$2);
    const _component_tui_list_view = resolveEasycom(vue.resolveDynamicComponent("tui-list-view"), __easycom_4$1);
    const _component_uni_swipe_action_item = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action-item"), __easycom_3$1);
    const _component_uni_swipe_action = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "information" }, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_u_notice_bar, { text: $data.text1 }, null, 8, ["text"])
      ]),
      vue.createElementVNode("view", { class: "list" }, [
        vue.createVNode(_component_uni_swipe_action, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_swipe_action_item, {
              "right-options": $data.options,
              onClick: _ctx.bindClick,
              onChange: _cache[0] || (_cache[0] = ($event) => $options.swipeChange($event, _ctx.index))
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", null, [
                  vue.createVNode(_component_tui_list_view, {
                    color: "#777",
                    onClick: $options.aaa
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_tui_list_cell, null, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "content" }, [
                            vue.createElementVNode("image", {
                              src: "/static/image/sj.png",
                              mode: ""
                            }),
                            vue.createElementVNode("view", null, [
                              vue.createElementVNode("view", { class: "name" }, " \u5C0F\u6C11 "),
                              vue.createElementVNode("view", null, " \u5E26\u7BAD\u5934\uFF0C\u6709\u70B9\u51FB\u6548\u679C ")
                            ]),
                            vue.createElementVNode("image", {
                              src: "/static/image/comm.png",
                              mode: ""
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              _: 1
            }, 8, ["right-options", "onClick"])
          ]),
          _: 1
        })
      ])
    ]);
  }
  var PagesInformationInformation = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-293111e0"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/information/information.vue"]]);
  const _sfc_main$r = {
    data() {
      return {
        show: true
      };
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(' <u-overlay :show="show" @click="show = true" zIndex="1" opacity="0.4">\r\n\r\n	</u-overlay> '),
      vue.createElementVNode("view", { class: "release" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", { class: "text" }, [
            vue.createElementVNode("view", null, " \u62CD\u62CD, "),
            vue.createElementVNode("view", null, " \u8BA9\u6C89\u7761\u7684\u597D\u7269\u6D3B\u8D77\u6765\u3002 ")
          ]),
          vue.createElementVNode("view", { class: "font" }, " \u51FA\u81EA / \u62CD\u62CD\u7269\u6D3B\u793E ")
        ]),
        vue.createElementVNode("view", { class: "icon" }, [
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("navigator", { url: "/pages/upload/upload" }, [
              vue.createElementVNode("image", {
                src: "/static/image/sj.png",
                mode: ""
              }),
              vue.createElementVNode("view", null, "\u5FEB\u901F\u56DE\u6536"),
              vue.createElementVNode("view", null, "\u4E13\u4E1A\u68C0\u67E5\uFF0C\u6025\u901F\u6210\u4EA4")
            ])
          ]),
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("navigator", { url: "/pages/upload/upload" }, [
              vue.createElementVNode("image", {
                src: "/static/image/sj.png",
                mode: ""
              }),
              vue.createElementVNode("view", null, "\u5FEB\u901F\u56DE\u6536"),
              vue.createElementVNode("view", null, "\u4E13\u4E1A\u68C0\u67E5\uFF0C\u6025\u901F\u6210\u4EA4")
            ])
          ])
        ])
      ])
    ], 2112);
  }
  var PagesReleaseRelease = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-0766b1d4"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/release/release.vue"]]);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$q = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return unescape(`%u${code2.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-857088fc"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue"]]);
  const isObject$2 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse$1(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse$1(format2, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text2 = "";
    while (position < format2.length) {
      let char = format2[position++];
      if (char === startDelimiter) {
        if (text2) {
          tokens.push({ type: "text", value: text2 });
        }
        text2 = "";
        let sub = "";
        char = format2[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format2[position++];
        }
        const isClosed = char === endDelimiter;
        const type2 = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type: type2 });
      } else {
        text2 += char;
      }
    }
    text2 && tokens.push({ type: "text", value: text2 });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject$2(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en = {
    "uni-goods-nav.options.shop": "shop",
    "uni-goods-nav.options.cart": "cart",
    "uni-goods-nav.buttonGroup.addToCart": "add to cart",
    "uni-goods-nav.buttonGroup.buyNow": "buy now"
  };
  var zhHans = {
    "uni-goods-nav.options.shop": "\u5E97\u94FA",
    "uni-goods-nav.options.cart": "\u8D2D\u7269\u8F66",
    "uni-goods-nav.buttonGroup.addToCart": "\u52A0\u5165\u8D2D\u7269\u8F66",
    "uni-goods-nav.buttonGroup.buyNow": "\u7ACB\u5373\u8D2D\u4E70"
  };
  var zhHant = {
    "uni-goods-nav.options.shop": "\u5E97\u92EA",
    "uni-goods-nav.options.cart": "\u8CFC\u7269\u8ECA",
    "uni-goods-nav.buttonGroup.addToCart": "\u52A0\u5165\u8CFC\u7269\u8ECA",
    "uni-goods-nav.buttonGroup.buyNow": "\u7ACB\u5373\u8CFC\u8CB7"
  };
  var messages$1 = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages$1);
  const _sfc_main$p = {
    name: "UniGoodsNav",
    emits: ["click", "buttonClick"],
    props: {
      options: {
        type: Array,
        default() {
          return [{
            icon: "shop",
            text: t("uni-goods-nav.options.shop")
          }, {
            icon: "cart",
            text: t("uni-goods-nav.options.cart")
          }];
        }
      },
      buttonGroup: {
        type: Array,
        default() {
          return [
            {
              text: t("uni-goods-nav.buttonGroup.addToCart"),
              backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
              color: "#fff"
            },
            {
              text: t("uni-goods-nav.buttonGroup.buyNow"),
              backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
              color: "#fff"
            }
          ];
        }
      },
      fill: {
        type: Boolean,
        default: false
      },
      stat: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(index2, item) {
        this.$emit("click", {
          index: index2,
          content: item
        });
      },
      buttonClick(index2, item) {
        if (uni.report && this.stat) {
          uni.report(item.text, item.text);
        }
        this.$emit("buttonClick", {
          index: index2,
          content: item
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-goods-nav" }, [
      vue.createCommentVNode(" \u5E95\u90E8\u5360\u4F4D "),
      vue.createElementVNode("view", { class: "uni-tab__seat" }),
      vue.createElementVNode("view", { class: "uni-tab__cart-box flex" }, [
        vue.createElementVNode("view", { class: "flex uni-tab__cart-sub-left" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              class: "flex uni-tab__cart-button-left uni-tab__shop-cart",
              onClick: ($event) => $options.onClick(index2, item)
            }, [
              vue.createElementVNode("view", { class: "uni-tab__icon" }, [
                vue.createVNode(_component_uni_icons, {
                  type: item.icon,
                  size: "20",
                  color: "#646566"
                }, null, 8, ["type"]),
                vue.createCommentVNode(' <image class="image" :src="item.icon" mode="widthFix" /> ')
              ]),
              vue.createElementVNode("text", { class: "uni-tab__text" }, vue.toDisplayString(item.text), 1),
              vue.createElementVNode("view", { class: "flex uni-tab__dot-box" }, [
                item.info ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  class: vue.normalizeClass([{ "uni-tab__dots": item.info > 9 }, "uni-tab__dot"]),
                  style: vue.normalizeStyle({
                    "backgroundColor": item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
                    color: item.infoColor ? item.infoColor : "#fff"
                  })
                }, vue.toDisplayString(item.info), 7)) : vue.createCommentVNode("v-if", true)
              ])
            ], 8, ["onClick"]);
          }), 128))
        ]),
        vue.createElementVNode("view", {
          class: vue.normalizeClass([{ "uni-tab__right": $props.fill }, "flex uni-tab__cart-sub-right"])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.buttonGroup, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              style: vue.normalizeStyle({ background: item.backgroundColor, color: item.color }),
              class: "flex uni-tab__cart-button-right",
              onClick: ($event) => $options.buttonClick(index2, item)
            }, [
              vue.createElementVNode("text", {
                style: vue.normalizeStyle({ color: item.color }),
                class: "uni-tab__cart-button-right-text"
              }, vue.toDisplayString(item.text), 5)
            ], 12, ["onClick"]);
          }), 128))
        ], 2)
      ])
    ]);
  }
  var __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-9e28f1b4"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/@dcloudio/uni-ui/lib/uni-goods-nav/uni-goods-nav.vue"]]);
  const _sfc_main$o = {
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
        uni.showToast({
          title: `\u70B9\u51FB${e.content.text}`,
          icon: "none"
        });
      },
      buttonClick(e) {
        formatAppLog("log", "at pages/commodity/commodity.vue:59", e);
        this.options[2].info++;
      }
    },
    onShow() {
      uni.pageScrollTo({
        scrollTop: 0
      });
    },
    onLoad(e) {
      uni.request({
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
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "commodity" }, [
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("image", {
          src: "/static/image/fl.png",
          mode: ""
        }),
        vue.createElementVNode("view", { class: "user" }, [
          vue.createElementVNode("view", null, vue.toDisplayString($data.commodity.author), 1),
          vue.createElementVNode("view", null, vue.toDisplayString($data.commodity.dz), 1)
        ])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "jg" }, [
          vue.createTextVNode(" \uFFE5"),
          vue.createElementVNode("text", null, vue.toDisplayString($data.commodity.newprice), 1),
          vue.createTextVNode(),
          vue.createElementVNode("text", null, "\u539F\u4EF7\uFFE5" + vue.toDisplayString($data.commodity.oldprice), 1)
        ]),
        vue.createElementVNode("view", { class: "title" }, [
          vue.createElementVNode("view", null, vue.toDisplayString($data.commodity.title), 1),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.commodity.src, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "img",
              key: item
            }, [
              vue.createElementVNode("image", {
                src: "http://localhost:4000/images/" + item,
                mode: ""
              }, null, 8, ["src"])
            ]);
          }), 128))
        ])
      ]),
      vue.createElementVNode("view", { class: "bottom" }, [
        vue.createVNode(_component_uni_goods_nav, {
          fill: true,
          options: $data.options,
          buttonGroup: $data.buttonGroup,
          onClick: $options.onClick,
          onButtonClick: $options.buttonClick
        }, null, 8, ["options", "buttonGroup", "onClick", "onButtonClick"])
      ])
    ]);
  }
  var PagesCommodityCommodity = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__file", "D:/xxzl/z/uniapp/paipai/pages/commodity/commodity.vue"]]);
  const _sfc_main$n = {
    data() {
      return {
        title: "",
        titleArr: [],
        hot: ["\u624B\u673A", "\u7535\u8111"]
      };
    },
    methods: {
      search(e) {
        if (uni.getStorageSync("title")) {
          this.titleArr = uni.getStorageSync("title");
          this.titleArr.forEach((item, index2) => {
            if (item === this.title) {
              this.titleArr.splice(index2, 1);
            }
          });
          this.titleArr.unshift(this.title);
          this.titleArr = this.titleArr.slice(0, 10);
          uni.setStorageSync("title", this.titleArr);
        } else {
          this.titleArr.push(this.title);
          uni.setStorageSync("title", this.titleArr);
        }
        uni.navigateTo({
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
        uni.setStorageSync("title", []);
        this.titleArr = [];
      }
    },
    onLoad() {
      if (uni.getStorageSync("title")) {
        this.titleArr = uni.getStorageSync("title");
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_search = resolveEasycom(vue.resolveDynamicComponent("u-search"), __easycom_0$9);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "search" }, [
      vue.createVNode(_component_u_search, {
        placeholder: "\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF",
        value: $data.title,
        onInput: $options.searchInp,
        onSearch: $options.search,
        onCustom: $options.search,
        clearabled: true
      }, null, 8, ["value", "onInput", "onSearch", "onCustom"]),
      vue.withDirectives(vue.createElementVNode("view", { class: "ls" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "\u5386\u53F2\u641C\u7D22"),
          vue.createVNode(_component_uni_icons, {
            type: "trash",
            size: "30",
            color: "#ccc",
            onClick: $options.remove
          }, null, 8, ["onClick"])
        ]),
        vue.createElementVNode("view", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.titleArr, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              onClick: ($event) => $options.titleTop(item)
            }, vue.toDisplayString(item), 9, ["onClick"]);
          }), 256))
        ])
      ], 512), [
        [vue.vShow, $data.titleArr.length > 0]
      ]),
      vue.createElementVNode("view", { class: "ls" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("view", null, "\u70ED\u95E8\u641C\u7D22")
        ]),
        vue.createElementVNode("view", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.hot, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              onClick: ($event) => $options.titleTop(item)
            }, vue.toDisplayString(item), 9, ["onClick"]);
          }), 256))
        ])
      ])
    ]);
  }
  var PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-4cedc0c6"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/search/search.vue"]]);
  var props$d = {
    props: {
      value: {
        type: [String, Number],
        default: uni.$u.props.textarea.value
      },
      placeholder: {
        type: [String, Number],
        default: uni.$u.props.textarea.placeholder
      },
      placeholderClass: {
        type: String,
        default: uni.$u.props.input.placeholderClass
      },
      placeholderStyle: {
        type: [String, Object],
        default: uni.$u.props.input.placeholderStyle
      },
      height: {
        type: [String, Number],
        default: uni.$u.props.textarea.height
      },
      confirmType: {
        type: String,
        default: uni.$u.props.textarea.confirmType
      },
      disabled: {
        type: Boolean,
        default: uni.$u.props.textarea.disabled
      },
      count: {
        type: Boolean,
        default: uni.$u.props.textarea.count
      },
      focus: {
        type: Boolean,
        default: uni.$u.props.textarea.focus
      },
      autoHeight: {
        type: Boolean,
        default: uni.$u.props.textarea.autoHeight
      },
      fixed: {
        type: Boolean,
        default: uni.$u.props.textarea.fixed
      },
      cursorSpacing: {
        type: Number,
        default: uni.$u.props.textarea.cursorSpacing
      },
      cursor: {
        type: [String, Number],
        default: uni.$u.props.textarea.cursor
      },
      showConfirmBar: {
        type: Boolean,
        default: uni.$u.props.textarea.showConfirmBar
      },
      selectionStart: {
        type: Number,
        default: uni.$u.props.textarea.selectionStart
      },
      selectionEnd: {
        type: Number,
        default: uni.$u.props.textarea.selectionEnd
      },
      adjustPosition: {
        type: Boolean,
        default: uni.$u.props.textarea.adjustPosition
      },
      disableDefaultPadding: {
        type: Boolean,
        default: uni.$u.props.textarea.disableDefaultPadding
      },
      holdKeyboard: {
        type: Boolean,
        default: uni.$u.props.textarea.holdKeyboard
      },
      maxlength: {
        type: [String, Number],
        default: uni.$u.props.textarea.maxlength
      },
      border: {
        type: String,
        default: uni.$u.props.textarea.border
      },
      formatter: {
        type: [Function, null],
        default: uni.$u.props.textarea.formatter
      }
    }
  };
  const _sfc_main$m = {
    name: "u-textarea",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$d],
    data() {
      return {
        innerValue: "",
        focused: false,
        firstChange: true,
        changeFromInner: false,
        innerFormatter: (value) => value
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      textareaClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-textarea--radius"]));
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-textarea--no-radius"
        ]));
        disabled && classes.push("u-textarea--disabled");
        return classes.join(" ");
      },
      textareaStyle() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      setFormatter(e) {
        this.innerFormatter = e;
      },
      onFocus(e) {
        this.$emit("focus", e);
      },
      onBlur(e) {
        this.$emit("blur", e);
        uni.$u.formValidate(this, "blur");
      },
      onLinechange(e) {
        this.$emit("linechange", e);
      },
      onInput(e) {
        let { value = "" } = e.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value);
        this.innerValue = value;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      valueChange() {
        const value = this.innerValue;
        this.$nextTick(() => {
          this.$emit("input", value);
          this.changeFromInner = true;
          this.$emit("change", value);
          uni.$u.formValidate(this, "change");
        });
      },
      onConfirm(e) {
        this.$emit("confirm", e);
      },
      onKeyboardheightchange(e) {
        this.$emit("keyboardheightchange", e);
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-textarea", $options.textareaClass]),
      style: vue.normalizeStyle([$options.textareaStyle])
    }, [
      vue.createElementVNode("textarea", {
        class: "u-textarea__field",
        value: $data.innerValue,
        style: vue.normalizeStyle({ height: _ctx.$u.addUnit(_ctx.height) }),
        placeholder: _ctx.placeholder,
        "placeholder-style": _ctx.$u.addStyle(_ctx.placeholderStyle, "string"),
        "placeholder-class": _ctx.placeholderClass,
        disabled: _ctx.disabled,
        focus: _ctx.focus,
        autoHeight: _ctx.autoHeight,
        fixed: _ctx.fixed,
        cursorSpacing: _ctx.cursorSpacing,
        cursor: _ctx.cursor,
        showConfirmBar: _ctx.showConfirmBar,
        selectionStart: _ctx.selectionStart,
        selectionEnd: _ctx.selectionEnd,
        adjustPosition: _ctx.adjustPosition,
        disableDefaultPadding: _ctx.disableDefaultPadding,
        holdKeyboard: _ctx.holdKeyboard,
        maxlength: _ctx.maxlength,
        confirmType: _ctx.confirmType,
        onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onLinechange: _cache[2] || (_cache[2] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => $options.onInput && $options.onInput(...args)),
        onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
        onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
      }, null, 44, ["value", "placeholder", "placeholder-style", "placeholder-class", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirmType"]),
      _ctx.count ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: "u-textarea__count",
        style: vue.normalizeStyle({
          "background-color": _ctx.disabled ? "transparent" : "#fff"
        })
      }, vue.toDisplayString($data.innerValue.length) + "/" + vue.toDisplayString(_ctx.maxlength), 5)) : vue.createCommentVNode("v-if", true)
    ], 6);
  }
  var uvTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-09988a29"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-textarea/u-textarea.vue"]]);
  const _sfc_main$l = {
    name: "u--textarea",
    mixins: [uni.$u.mpMixin, props$d, uni.$u.mixin],
    components: {
      uvTextarea
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvTextarea = vue.resolveComponent("uvTextarea");
    return vue.openBlock(), vue.createBlock(_component_uvTextarea, {
      value: _ctx.value,
      placeholder: _ctx.placeholder,
      height: _ctx.height,
      confirmType: _ctx.confirmType,
      disabled: _ctx.disabled,
      count: _ctx.count,
      focus: _ctx.focus,
      autoHeight: _ctx.autoHeight,
      fixed: _ctx.fixed,
      cursorSpacing: _ctx.cursorSpacing,
      cursor: _ctx.cursor,
      showConfirmBar: _ctx.showConfirmBar,
      selectionStart: _ctx.selectionStart,
      selectionEnd: _ctx.selectionEnd,
      adjustPosition: _ctx.adjustPosition,
      disableDefaultPadding: _ctx.disableDefaultPadding,
      holdKeyboard: _ctx.holdKeyboard,
      maxlength: _ctx.maxlength,
      border: _ctx.border,
      customStyle: _ctx.customStyle,
      formatter: _ctx.formatter,
      onFocus: _cache[0] || (_cache[0] = (e) => _ctx.$emit("focus")),
      onBlur: _cache[1] || (_cache[1] = (e) => _ctx.$emit("blur")),
      onLinechange: _cache[2] || (_cache[2] = (e) => _ctx.$emit("linechange", e)),
      onConfirm: _cache[3] || (_cache[3] = (e) => _ctx.$emit("confirm")),
      onInput: _cache[4] || (_cache[4] = (e) => _ctx.$emit("input", e)),
      onKeyboardheightchange: _cache[5] || (_cache[5] = (e) => _ctx.$emit("keyboardheightchange"))
    }, null, 8, ["value", "placeholder", "height", "confirmType", "disabled", "count", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "border", "customStyle", "formatter"]);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u--textarea/u--textarea.vue"]]);
  const _sfc_main$k = {
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
      reUpLoad(index2) {
        this.$set(this.statusArr, index2, "2");
        this.change();
        this.uploadImage(index2, this.imageList[index2]).then(() => {
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
      toast(text2) {
        text2 && uni.showToast({
          title: text2,
          icon: "none"
        });
      },
      chooseImage: function() {
        let _this = this;
        uni.chooseImage({
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
                let format2 = "";
                format2 = path.split(".")[path.split(".").length - 1];
                if (_this.imageFormat.indexOf(format2) == -1) {
                  let text2 = `\u53EA\u80FD\u4E0A\u4F20 ${_this.imageFormat.join(",")} \u683C\u5F0F\u56FE\u7247\uFF01`;
                  _this.toast(text2);
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
              let index2 = start + j;
              if (_this.serverUrl) {
                _this.uploadImage(index2, imageArr[j]).then(() => {
                  _this.change();
                }).catch(() => {
                  _this.change();
                });
              } else {
                _this.$set(_this.statusArr, index2, "1");
                _this.change();
              }
            }
          }
        });
      },
      uploadImage: function(index2, url2, serverUrl) {
        let _this = this;
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: this.serverUrl || serverUrl,
            name: this.fileKeyName,
            header: this.header,
            formData: this.formData,
            filePath: url2,
            success: function(res) {
              if (res.statusCode == 200) {
                let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}");
                if (d.code % 100 === 0) {
                  d.url && (_this.imageList[index2] = d.url);
                  _this.$set(_this.statusArr, index2, d.url ? "1" : "3");
                } else {
                  _this.$set(_this.statusArr, index2, "3");
                }
                resolve(index2);
              } else {
                _this.$set(_this.statusArr, index2, "3");
                reject(index2);
              }
            },
            fail: function(res) {
              _this.$set(_this.statusArr, index2, "3");
              reject(index2);
            }
          });
        });
      },
      delImage: function(index2) {
        let that = this;
        if (this.delConfirm) {
          uni.showModal({
            title: "\u63D0\u793A",
            content: "\u786E\u8BA4\u5220\u9664\u8BE5\u56FE\u7247\u5417\uFF1F",
            showCancel: true,
            cancelColor: "#555",
            confirmColor: "#eb0909",
            confirmText: "\u786E\u5B9A",
            success(res) {
              if (res.confirm) {
                that.imageList.splice(index2, 1);
                that.statusArr.splice(index2, 1);
                that.$emit("remove", {
                  index: index2,
                  params: that.params
                });
                that.change();
              }
            }
          });
        } else {
          that.imageList.splice(index2, 1);
          that.statusArr.splice(index2, 1);
          that.$emit("remove", {
            index: index2,
            params: that.params
          });
          that.change();
        }
      },
      previewImage: function(index2) {
        if (!this.imageList.length)
          return;
        uni.previewImage({
          current: this.imageList[index2],
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
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tui-container" }, [
      vue.createElementVNode("view", { class: "tui-upload-box" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.imageList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "tui-image-item",
            style: vue.normalizeStyle({ width: $props.width + "rpx", height: $props.height + "rpx" }),
            key: index2
          }, [
            vue.createElementVNode("image", {
              src: item,
              class: "tui-item-img",
              style: vue.normalizeStyle({ width: $props.width + "rpx", height: $props.height + "rpx" }),
              onClick: vue.withModifiers(($event) => $options.previewImage(index2), ["stop"]),
              mode: "aspectFill"
            }, null, 12, ["src", "onClick"]),
            !$props.forbidDel ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "tui-img-del",
              onClick: vue.withModifiers(($event) => $options.delImage(index2), ["stop"])
            }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            $data.statusArr[index2] != 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "tui-upload-mask"
            }, [
              $data.statusArr[index2] == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "tui-upload-loading"
              })) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "tui-tips" }, vue.toDisplayString($data.statusArr[index2] == 2 ? "\u4E0A\u4F20\u4E2D..." : "\u4E0A\u4F20\u5931\u8D25"), 1),
              $data.statusArr[index2] == 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "tui-mask-btn",
                onClick: vue.withModifiers(($event) => $options.reUpLoad(index2), ["stop"]),
                "hover-class": "tui-btn-hover",
                "hover-stay-time": 150
              }, "\u91CD\u65B0\u4E0A\u4F20", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true)
          ], 4);
        }), 128)),
        $options.isShowAdd ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "tui-upload-add",
          style: vue.normalizeStyle({ width: $props.width + "rpx", height: $props.height + "rpx" }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseImage && $options.chooseImage(...args))
        }, [
          vue.createElementVNode("view", { class: "tui-upload-icon tui-icon-plus" })
        ], 4)) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-05d2307f"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-upload/tui-upload.vue"]]);
  var props$c = {
    props: {
      show: {
        type: Boolean,
        default: uni.$u.props.toolbar.show
      },
      cancelText: {
        type: String,
        default: uni.$u.props.toolbar.cancelText
      },
      confirmText: {
        type: String,
        default: uni.$u.props.toolbar.confirmText
      },
      cancelColor: {
        type: String,
        default: uni.$u.props.toolbar.cancelColor
      },
      confirmColor: {
        type: String,
        default: uni.$u.props.toolbar.confirmColor
      },
      title: {
        type: String,
        default: uni.$u.props.toolbar.title
      }
    }
  };
  const _sfc_main$j = {
    name: "u-toolbar",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$c],
    methods: {
      cancel() {
        this.$emit("cancel");
      },
      confirm() {
        this.$emit("confirm");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "u-toolbar",
      onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"]))
    }, [
      vue.createElementVNode("view", {
        class: "u-toolbar__cancel__wrapper",
        "hover-class": "u-hover-class"
      }, [
        vue.createElementVNode("text", {
          class: "u-toolbar__wrapper__cancel",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args)),
          style: vue.normalizeStyle({
            color: _ctx.cancelColor
          })
        }, vue.toDisplayString(_ctx.cancelText), 5)
      ]),
      _ctx.title ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: "u-toolbar__title u-line-1"
      }, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: "u-toolbar__confirm__wrapper",
        "hover-class": "u-hover-class"
      }, [
        vue.createElementVNode("text", {
          class: "u-toolbar__wrapper__confirm",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
          style: vue.normalizeStyle({
            color: _ctx.confirmColor
          })
        }, vue.toDisplayString(_ctx.confirmText), 5)
      ])
    ], 32)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-55c89db1"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-toolbar/u-toolbar.vue"]]);
  var props$b = {
    props: {
      show: {
        type: Boolean,
        default: uni.$u.props.loadingIcon.show
      },
      color: {
        type: String,
        default: uni.$u.props.loadingIcon.color
      },
      textColor: {
        type: String,
        default: uni.$u.props.loadingIcon.textColor
      },
      vertical: {
        type: Boolean,
        default: uni.$u.props.loadingIcon.vertical
      },
      mode: {
        type: String,
        default: uni.$u.props.loadingIcon.mode
      },
      size: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.size
      },
      textSize: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.textSize
      },
      text: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.text
      },
      timingFunction: {
        type: String,
        default: uni.$u.props.loadingIcon.timingFunction
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.loadingIcon.duration
      },
      inactiveColor: {
        type: String,
        default: uni.$u.props.loadingIcon.inactiveColor
      }
    }
  };
  const _sfc_main$i = {
    name: "u-loading-icon",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$b],
    data() {
      return {
        array12: Array.from({
          length: 12
        }),
        aniAngel: 360,
        webviewHide: false,
        loading: false
      };
    },
    computed: {
      otherBorderColor() {
        const lightColor = uni.$u.colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
        ref: "ani",
        style: vue.normalizeStyle({
          color: _ctx.color,
          width: _ctx.$u.addUnit(_ctx.size),
          height: _ctx.$u.addUnit(_ctx.size),
          borderTopColor: _ctx.color,
          borderBottomColor: $options.otherBorderColor,
          borderLeftColor: $options.otherBorderColor,
          borderRightColor: $options.otherBorderColor,
          "animation-duration": `${_ctx.duration}ms`,
          "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
        })
      }, [
        _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($data.array12, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index2,
            class: "u-loading-icon__dot"
          });
        }), 128)) : vue.createCommentVNode("v-if", true)
      ], 6)) : vue.createCommentVNode("v-if", true),
      _ctx.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: "u-loading-icon__text",
        style: vue.normalizeStyle({
          fontSize: _ctx.$u.addUnit(_ctx.textSize),
          color: _ctx.textColor
        })
      }, vue.toDisplayString(_ctx.text), 5)) : vue.createCommentVNode("v-if", true)
    ], 6)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-0fe228ae"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue"]]);
  var props$a = {
    props: {
      show: {
        type: Boolean,
        default: uni.$u.props.overlay.show
      },
      zIndex: {
        type: [String, Number],
        default: uni.$u.props.overlay.zIndex
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.overlay.duration
      },
      opacity: {
        type: [String, Number],
        default: uni.$u.props.overlay.opacity
      }
    }
  };
  const _sfc_main$h = {
    name: "u-overlay",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$a],
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4$2);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.show,
      "custom-class": "u-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["show", "duration", "custom-style", "onClick"]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-1625041b"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-overlay/u-overlay.vue"]]);
  var props$9 = {
    props: {
      bgColor: {
        type: String,
        default: uni.$u.props.statusBar.bgColor
      }
    }
  };
  const _sfc_main$g = {
    name: "u-status-bar",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$9],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = uni.$u.addUnit(uni.$u.sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle([$options.style]),
      class: "u-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-124d52a9"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-status-bar/u-status-bar.vue"]]);
  var props$8 = {
    props: {}
  };
  const _sfc_main$f = {
    name: "u-safe-bottom",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$8],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
      style: vue.normalizeStyle([$options.style])
    }, null, 6);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-40b3d0de"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom.vue"]]);
  var props$7 = {
    props: {
      show: {
        type: Boolean,
        default: uni.$u.props.popup.show
      },
      overlay: {
        type: Boolean,
        default: uni.$u.props.popup.overlay
      },
      mode: {
        type: String,
        default: uni.$u.props.popup.mode
      },
      duration: {
        type: [String, Number],
        default: uni.$u.props.popup.duration
      },
      closeable: {
        type: Boolean,
        default: uni.$u.props.popup.closeable
      },
      overlayStyle: {
        type: [Object, String],
        default: uni.$u.props.popup.overlayStyle
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: uni.$u.props.popup.closeOnClickOverlay
      },
      zIndex: {
        type: [String, Number],
        default: uni.$u.props.popup.zIndex
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: uni.$u.props.popup.safeAreaInsetBottom
      },
      safeAreaInsetTop: {
        type: Boolean,
        default: uni.$u.props.popup.safeAreaInsetTop
      },
      closeIconPos: {
        type: String,
        default: uni.$u.props.popup.closeIconPos
      },
      round: {
        type: [Boolean, String, Number],
        default: uni.$u.props.popup.round
      },
      zoom: {
        type: Boolean,
        default: uni.$u.props.popup.zoom
      },
      bgColor: {
        type: String,
        default: uni.$u.props.popup.bgColor
      },
      overlayOpacity: {
        type: [Number, String],
        default: uni.$u.props.popup.overlayOpacity
      }
    }
  };
  const _sfc_main$e = {
    name: "u-popup",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$7],
    data() {
      return {
        overlayDuration: this.duration + 50
      };
    },
    watch: {
      show(newValue, oldValue) {
      }
    },
    computed: {
      transitionStyle() {
        const style = {
          zIndex: this.zIndex,
          position: "fixed",
          display: "flex"
        };
        style[this.mode] = 0;
        if (this.mode === "left") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "right") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "top") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "bottom") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "center") {
          return uni.$u.deepMerge(style, {
            alignItems: "center",
            "justify-content": "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
        }
      },
      contentStyle() {
        const style = {};
        uni.$u.sys();
        if (this.mode !== "center") {
          style.flex = 1;
        }
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.round) {
          const value = uni.$u.addUnit(this.round);
          if (this.mode === "top") {
            style.borderBottomLeftRadius = value;
            style.borderBottomRightRadius = value;
          } else if (this.mode === "bottom") {
            style.borderTopLeftRadius = value;
            style.borderTopRightRadius = value;
          } else if (this.mode === "center") {
            style.borderRadius = value;
          }
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      position() {
        if (this.mode === "center") {
          return this.zoom ? "fade-zoom" : "fade";
        }
        if (this.mode === "left") {
          return "slide-left";
        }
        if (this.mode === "right") {
          return "slide-right";
        }
        if (this.mode === "bottom") {
          return "slide-up";
        }
        if (this.mode === "top") {
          return "slide-down";
        }
      }
    },
    methods: {
      overlayClick() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      close(e) {
        this.$emit("close");
      },
      afterEnter() {
        this.$emit("open");
      },
      clickHandler() {
        if (this.mode === "center") {
          this.overlayClick();
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_0$1);
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$1);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-popup" }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_u_overlay, {
        key: 0,
        show: _ctx.show,
        onClick: $options.overlayClick,
        duration: $data.overlayDuration,
        customStyle: _ctx.overlayStyle,
        opacity: _ctx.overlayOpacity
      }, null, 8, ["show", "onClick", "duration", "customStyle", "opacity"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_u_transition, {
        show: _ctx.show,
        customStyle: $options.transitionStyle,
        mode: $options.position,
        duration: _ctx.duration,
        onAfterEnter: $options.afterEnter,
        onClick: $options.clickHandler
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "u-popup__content",
            style: vue.normalizeStyle([$options.contentStyle]),
            onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
          }, [
            _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
            _ctx.closeable ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
              class: vue.normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
              "hover-class": "u-popup__content__close--hover",
              "hover-stay-time": "150"
            }, [
              vue.createVNode(_component_u_icon, {
                name: "close",
                color: "#909399",
                size: "18",
                bold: ""
              })
            ], 2)) : vue.createCommentVNode("v-if", true),
            _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 2 })) : vue.createCommentVNode("v-if", true)
          ], 4)
        ]),
        _: 3
      }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
    ]);
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-3a231fda"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-popup/u-popup.vue"]]);
  var props$6 = {
    props: {
      show: {
        type: Boolean,
        default: uni.$u.props.picker.show
      },
      showToolbar: {
        type: Boolean,
        default: uni.$u.props.picker.showToolbar
      },
      title: {
        type: String,
        default: uni.$u.props.picker.title
      },
      columns: {
        type: Array,
        default: uni.$u.props.picker.columns
      },
      loading: {
        type: Boolean,
        default: uni.$u.props.picker.loading
      },
      itemHeight: {
        type: [String, Number],
        default: uni.$u.props.picker.itemHeight
      },
      cancelText: {
        type: String,
        default: uni.$u.props.picker.cancelText
      },
      confirmText: {
        type: String,
        default: uni.$u.props.picker.confirmText
      },
      cancelColor: {
        type: String,
        default: uni.$u.props.picker.cancelColor
      },
      confirmColor: {
        type: String,
        default: uni.$u.props.picker.confirmColor
      },
      visibleItemCount: {
        type: [String, Number],
        default: uni.$u.props.picker.visibleItemCount
      },
      keyName: {
        type: String,
        default: uni.$u.props.picker.keyName
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: uni.$u.props.picker.closeOnClickOverlay
      },
      defaultIndex: {
        type: Array,
        default: uni.$u.props.picker.defaultIndex
      },
      immediateChange: {
        type: Boolean,
        default: uni.$u.props.picker.immediateChange
      }
    }
  };
  const _sfc_main$d = {
    name: "u-picker",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$6],
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
        if (uni.$u.test.object(item)) {
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
          value: this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]),
          values: this.innerColumns
        });
      },
      changeHandler(e) {
        const {
          value
        } = e.detail;
        let index2 = 0, columnIndex = 0;
        for (let i = 0; i < value.length; i++) {
          let item = value[i];
          if (item !== (this.lastIndex[i] || 0)) {
            columnIndex = i;
            index2 = item;
            break;
          }
        }
        this.columnIndex = columnIndex;
        const values = this.innerColumns;
        this.setLastIndex(value);
        this.setIndexs(value);
        this.$emit("change", {
          picker: this,
          value: this.innerColumns.map((item, index3) => item[value[index3]]),
          index: index2,
          indexs: value,
          values,
          columnIndex
        });
      },
      setIndexs(index2, setLastIndex) {
        this.innerIndex = uni.$u.deepClone(index2);
        if (setLastIndex) {
          this.setLastIndex(index2);
        }
      },
      setLastIndex(index2) {
        this.lastIndex = uni.$u.deepClone(index2);
      },
      setColumnValues(columnIndex, values) {
        this.innerColumns.splice(columnIndex, 1, values);
        let tmpIndex = uni.$u.deepClone(this.innerIndex);
        for (let i = 0; i < this.innerColumns.length; i++) {
          if (i > this.columnIndex) {
            tmpIndex[i] = 0;
          }
        }
        this.setIndexs(tmpIndex);
      },
      getColumnValues(columnIndex) {
        (async () => {
          await uni.$u.sleep();
        })();
        return this.innerColumns[columnIndex];
      },
      setColumns(columns) {
        this.innerColumns = uni.$u.deepClone(columns);
        if (this.innerIndex.length === 0) {
          this.innerIndex = new Array(columns.length).fill(0);
        }
      },
      getIndexs() {
        return this.innerIndex;
      },
      getValues() {
        (async () => {
          await uni.$u.sleep();
        })();
        return this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]);
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_toolbar = resolveEasycom(vue.resolveDynamicComponent("u-toolbar"), __easycom_0$3);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0$2);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      show: _ctx.show,
      onClose: $options.closeHandler
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-picker" }, [
          _ctx.showToolbar ? (vue.openBlock(), vue.createBlock(_component_u_toolbar, {
            key: 0,
            cancelColor: _ctx.cancelColor,
            confirmColor: _ctx.confirmColor,
            cancelText: _ctx.cancelText,
            confirmText: _ctx.confirmText,
            title: _ctx.title,
            onCancel: $options.cancel,
            onConfirm: $options.confirm
          }, null, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "onCancel", "onConfirm"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("picker-view", {
            class: "u-picker__view",
            indicatorStyle: `height: ${_ctx.$u.addUnit(_ctx.itemHeight)}`,
            value: $data.innerIndex,
            immediateChange: _ctx.immediateChange,
            style: vue.normalizeStyle({
              height: `${_ctx.$u.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`
            }),
            onChange: _cache[0] || (_cache[0] = (...args) => $options.changeHandler && $options.changeHandler(...args))
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.innerColumns, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("picker-view-column", {
                key: index2,
                class: "u-picker__view__column"
              }, [
                _ctx.$u.test.array(item) ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(item, (item1, index1) => {
                  return vue.openBlock(), vue.createElementBlock("text", {
                    class: "u-picker__view__column__item u-line-1",
                    key: index1,
                    style: vue.normalizeStyle({
                      height: _ctx.$u.addUnit(_ctx.itemHeight),
                      lineHeight: _ctx.$u.addUnit(_ctx.itemHeight),
                      fontWeight: index1 === $data.innerIndex[index2] ? "bold" : "normal"
                    })
                  }, vue.toDisplayString($options.getItemText(item1)), 5);
                }), 128)) : vue.createCommentVNode("v-if", true)
              ]);
            }), 128))
          ], 44, ["indicatorStyle", "value", "immediateChange"]),
          _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-picker--loading"
          }, [
            vue.createVNode(_component_u_loading_icon, { mode: "circle" })
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      _: 1
    }, 8, ["show", "onClose"]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-f45a262e"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-picker/u-picker.vue"]]);
  var props$5 = {
    props: {
      value: {
        type: [String, Number],
        default: uni.$u.props.input.value
      },
      type: {
        type: String,
        default: uni.$u.props.input.type
      },
      fixed: {
        type: Boolean,
        default: uni.$u.props.input.fixed
      },
      disabled: {
        type: Boolean,
        default: uni.$u.props.input.disabled
      },
      disabledColor: {
        type: String,
        default: uni.$u.props.input.disabledColor
      },
      clearable: {
        type: Boolean,
        default: uni.$u.props.input.clearable
      },
      password: {
        type: Boolean,
        default: uni.$u.props.input.password
      },
      maxlength: {
        type: [String, Number],
        default: uni.$u.props.input.maxlength
      },
      placeholder: {
        type: String,
        default: uni.$u.props.input.placeholder
      },
      placeholderClass: {
        type: String,
        default: uni.$u.props.input.placeholderClass
      },
      placeholderStyle: {
        type: [String, Object],
        default: uni.$u.props.input.placeholderStyle
      },
      showWordLimit: {
        type: Boolean,
        default: uni.$u.props.input.showWordLimit
      },
      confirmType: {
        type: String,
        default: uni.$u.props.input.confirmType
      },
      confirmHold: {
        type: Boolean,
        default: uni.$u.props.input.confirmHold
      },
      holdKeyboard: {
        type: Boolean,
        default: uni.$u.props.input.holdKeyboard
      },
      focus: {
        type: Boolean,
        default: uni.$u.props.input.focus
      },
      autoBlur: {
        type: Boolean,
        default: uni.$u.props.input.autoBlur
      },
      disableDefaultPadding: {
        type: Boolean,
        default: uni.$u.props.input.disableDefaultPadding
      },
      cursor: {
        type: [String, Number],
        default: uni.$u.props.input.cursor
      },
      cursorSpacing: {
        type: [String, Number],
        default: uni.$u.props.input.cursorSpacing
      },
      selectionStart: {
        type: [String, Number],
        default: uni.$u.props.input.selectionStart
      },
      selectionEnd: {
        type: [String, Number],
        default: uni.$u.props.input.selectionEnd
      },
      adjustPosition: {
        type: Boolean,
        default: uni.$u.props.input.adjustPosition
      },
      inputAlign: {
        type: String,
        default: uni.$u.props.input.inputAlign
      },
      fontSize: {
        type: [String, Number],
        default: uni.$u.props.input.fontSize
      },
      color: {
        type: String,
        default: uni.$u.props.input.color
      },
      prefixIcon: {
        type: String,
        default: uni.$u.props.input.prefixIcon
      },
      prefixIconStyle: {
        type: [String, Object],
        default: uni.$u.props.input.prefixIconStyle
      },
      suffixIcon: {
        type: String,
        default: uni.$u.props.input.suffixIcon
      },
      suffixIconStyle: {
        type: [String, Object],
        default: uni.$u.props.input.suffixIconStyle
      },
      border: {
        type: String,
        default: uni.$u.props.input.border
      },
      readonly: {
        type: Boolean,
        default: uni.$u.props.input.readonly
      },
      shape: {
        type: String,
        default: uni.$u.props.input.shape
      },
      formatter: {
        type: [Function, null],
        default: uni.$u.props.input.formatter
      }
    }
  };
  const _sfc_main$c = {
    name: "u-input",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$5],
    data() {
      return {
        innerValue: "",
        focused: false,
        firstChange: true,
        changeFromInner: false,
        innerFormatter: (value) => value
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(newVal, oldVal) {
          this.innerValue = newVal;
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      isShowClear() {
        const { clearable, readonly, focused, innerValue } = this;
        return !!clearable && !readonly && !!focused && innerValue !== "";
      },
      inputClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
        classes.push(`u-input--${shape}`);
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-input--no-radius"
        ]));
        return classes.join(" ");
      },
      wrapperStyle() {
        const style = {};
        if (this.disabled) {
          style.backgroundColor = this.disabledColor;
        }
        if (this.border === "none") {
          style.padding = "0";
        } else {
          style.paddingTop = "6px";
          style.paddingBottom = "6px";
          style.paddingLeft = "9px";
          style.paddingRight = "9px";
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      inputStyle() {
        const style = {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          textAlign: this.inputAlign
        };
        return style;
      }
    },
    methods: {
      setFormatter(e) {
        this.innerFormatter = e;
      },
      onInput(e) {
        let { value = "" } = e.detail || {};
        const formatter = this.formatter || this.innerFormatter;
        const formatValue = formatter(value);
        this.innerValue = value;
        this.$nextTick(() => {
          this.innerValue = formatValue;
          this.valueChange();
        });
      },
      onBlur(event) {
        this.$emit("blur", event.detail.value);
        uni.$u.sleep(50).then(() => {
          this.focused = false;
        });
        uni.$u.formValidate(this, "blur");
      },
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      onConfirm(event) {
        this.$emit("confirm", this.innerValue);
      },
      onkeyboardheightchange() {
        this.$emit("keyboardheightchange");
      },
      valueChange() {
        const value = this.innerValue;
        this.$nextTick(() => {
          this.$emit("input", value);
          this.changeFromInner = true;
          this.$emit("change", value);
          uni.$u.formValidate(this, "change");
        });
      },
      onClear() {
        this.innerValue = "";
        this.$nextTick(() => {
          this.valueChange();
          this.$emit("clear");
        });
      },
      clickHandler() {
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-input", $options.inputClass]),
      style: vue.normalizeStyle([$options.wrapperStyle])
    }, [
      vue.createElementVNode("view", { class: "u-input__content" }, [
        _ctx.prefixIcon || _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-input__content__prefix-icon"
        }, [
          vue.renderSlot(_ctx.$slots, "prefix", {}, () => [
            vue.createVNode(_component_u_icon, {
              name: _ctx.prefixIcon,
              size: "18",
              customStyle: _ctx.prefixIconStyle
            }, null, 8, ["name", "customStyle"])
          ], true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "u-input__content__field-wrapper",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
        }, [
          vue.createCommentVNode(" \u6839\u636Euni-app\u7684input\u7EC4\u4EF6\u6587\u6863\uFF0CH5\u548CAPP\u4E2D\u53EA\u8981\u58F0\u660E\u4E86password\u53C2\u6570(\u65E0\u8BBAtrue\u8FD8\u662Ffalse)\uFF0Ctype\u5747\u5931\u6548\uFF0C\u6B64\u65F6\n					\u4E3A\u4E86\u9632\u6B62type=number\u65F6\uFF0C\u53C8\u5B58\u5728password\u5C5E\u6027\uFF0Ctype\u65E0\u6548\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6Epassword\u4E3Aundefined\n				 "),
          vue.createElementVNode("input", {
            class: "u-input__content__field-wrapper__field",
            style: vue.normalizeStyle([$options.inputStyle]),
            type: _ctx.type,
            focus: _ctx.focus,
            cursor: _ctx.cursor,
            value: $data.innerValue,
            "auto-blur": _ctx.autoBlur,
            disabled: _ctx.disabled || _ctx.readonly,
            maxlength: _ctx.maxlength,
            placeholder: _ctx.placeholder,
            "placeholder-style": _ctx.placeholderStyle,
            "placeholder-class": _ctx.placeholderClass,
            "confirm-type": _ctx.confirmType,
            "confirm-hold": _ctx.confirmHold,
            "hold-keyboard": _ctx.holdKeyboard,
            "cursor-spacing": _ctx.cursorSpacing,
            "adjust-position": _ctx.adjustPosition,
            "selection-end": _ctx.selectionEnd,
            "selection-start": _ctx.selectionStart,
            password: _ctx.password || _ctx.type === "password" || void 0,
            onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
            onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
            onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
          }, null, 44, ["type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password"])
        ]),
        $options.isShowClear ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-input__content__clear",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
        }, [
          vue.createVNode(_component_u_icon, {
            name: "close",
            size: "11",
            color: "#ffffff",
            customStyle: "line-height: 12px"
          })
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.suffixIcon || _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "u-input__content__subfix-icon"
        }, [
          vue.renderSlot(_ctx.$slots, "suffix", {}, () => [
            vue.createVNode(_component_u_icon, {
              name: _ctx.suffixIcon,
              size: "18",
              customStyle: _ctx.suffixIconStyle
            }, null, 8, ["name", "customStyle"])
          ], true)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ], 6);
  }
  var uvInput = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-113bc24f"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-input/u-input.vue"]]);
  const _sfc_main$b = {
    name: "u--input",
    mixins: [uni.$u.mpMixin, props$5, uni.$u.mixin],
    components: {
      uvInput
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvInput = vue.resolveComponent("uvInput");
    return vue.openBlock(), vue.createBlock(_component_uvInput, {
      value: _ctx.value,
      type: _ctx.type,
      fixed: _ctx.fixed,
      disabled: _ctx.disabled,
      disabledColor: _ctx.disabledColor,
      clearable: _ctx.clearable,
      password: _ctx.password,
      maxlength: _ctx.maxlength,
      placeholder: _ctx.placeholder,
      placeholderClass: _ctx.placeholderClass,
      placeholderStyle: _ctx.placeholderStyle,
      showWordLimit: _ctx.showWordLimit,
      confirmType: _ctx.confirmType,
      confirmHold: _ctx.confirmHold,
      holdKeyboard: _ctx.holdKeyboard,
      focus: _ctx.focus,
      autoBlur: _ctx.autoBlur,
      disableDefaultPadding: _ctx.disableDefaultPadding,
      cursor: _ctx.cursor,
      cursorSpacing: _ctx.cursorSpacing,
      selectionStart: _ctx.selectionStart,
      selectionEnd: _ctx.selectionEnd,
      adjustPosition: _ctx.adjustPosition,
      inputAlign: _ctx.inputAlign,
      fontSize: _ctx.fontSize,
      color: _ctx.color,
      prefixIcon: _ctx.prefixIcon,
      suffixIcon: _ctx.suffixIcon,
      suffixIconStyle: _ctx.suffixIconStyle,
      prefixIconStyle: _ctx.prefixIconStyle,
      border: _ctx.border,
      readonly: _ctx.readonly,
      shape: _ctx.shape,
      customStyle: _ctx.customStyle,
      formatter: _ctx.formatter,
      onFocus: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("focus")),
      onBlur: _cache[1] || (_cache[1] = (e) => _ctx.$emit("blur", e)),
      onKeyboardheightchange: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("keyboardheightchange")),
      onChange: _cache[3] || (_cache[3] = (e) => _ctx.$emit("change", e)),
      onInput: _cache[4] || (_cache[4] = (e) => _ctx.$emit("input", e)),
      onConfirm: _cache[5] || (_cache[5] = (e) => _ctx.$emit("confirm", e)),
      onClear: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("clear")),
      onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("click"))
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "prefix", { slot: "prefix" }),
        vue.renderSlot(_ctx.$slots, "suffix", { slot: "suffix" })
      ]),
      _: 3
    }, 8, ["value", "type", "fixed", "disabled", "disabledColor", "clearable", "password", "maxlength", "placeholder", "placeholderClass", "placeholderStyle", "showWordLimit", "confirmType", "confirmHold", "holdKeyboard", "focus", "autoBlur", "disableDefaultPadding", "cursor", "cursorSpacing", "selectionStart", "selectionEnd", "adjustPosition", "inputAlign", "fontSize", "color", "prefixIcon", "suffixIcon", "suffixIconStyle", "prefixIconStyle", "border", "readonly", "shape", "customStyle", "formatter"]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u--input/u--input.vue"]]);
  var props$4 = {
    props: {
      color: {
        type: String,
        default: uni.$u.props.line.color
      },
      length: {
        type: [String, Number],
        default: uni.$u.props.line.length
      },
      direction: {
        type: String,
        default: uni.$u.props.line.direction
      },
      hairline: {
        type: Boolean,
        default: uni.$u.props.line.hairline
      },
      margin: {
        type: [String, Number],
        default: uni.$u.props.line.margin
      },
      dashed: {
        type: Boolean,
        default: uni.$u.props.line.dashed
      }
    }
  };
  const _sfc_main$a = {
    name: "u-line",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$4],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-line",
      style: vue.normalizeStyle([$options.lineStyle])
    }, null, 4);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-727e452e"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-line/u-line.vue"]]);
  var props$3 = {
    props: {
      label: {
        type: String,
        default: uni.$u.props.formItem.label
      },
      prop: {
        type: String,
        default: uni.$u.props.formItem.prop
      },
      borderBottom: {
        type: [String, Boolean],
        default: uni.$u.props.formItem.borderBottom
      },
      labelWidth: {
        type: [String, Number],
        default: uni.$u.props.formItem.labelWidth
      },
      rightIcon: {
        type: String,
        default: uni.$u.props.formItem.rightIcon
      },
      leftIcon: {
        type: String,
        default: uni.$u.props.formItem.leftIcon
      },
      required: {
        type: Boolean,
        default: uni.$u.props.formItem.required
      },
      leftIconStyle: {
        type: [String, Object],
        default: uni.$u.props.formItem.leftIconStyle
      }
    }
  };
  const _sfc_main$9 = {
    name: "u-form-item",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$3],
    data() {
      return {
        message: "",
        parentData: {
          labelPosition: "left",
          labelAlign: "left",
          labelStyle: {},
          labelWidth: 45,
          errorType: "message"
        }
      };
    },
    computed: {
      propsLine() {
        return uni.$u.props.line;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          uni.$u.error("u-form-item\u9700\u8981\u7ED3\u5408u-form\u7EC4\u4EF6\u4F7F\u7528");
        }
      },
      updateParentData() {
        this.getParentData("u-form");
      },
      clearValidate() {
        this.message = null;
      },
      resetField() {
        const value = uni.$u.getProperty(this.parent.originalModel, this.prop);
        uni.$u.setProperty(this.parent.model, this.prop, value);
        this.message = null;
      },
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form-item" }, [
      vue.createElementVNode("view", {
        class: "u-form-item__body",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle), {
          flexDirection: $data.parentData.labelPosition === "left" ? "row" : "column"
        }])
      }, [
        vue.createCommentVNode(' \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u5C06\u4E00\u4E2A\u53C2\u6570\u8BBE\u7F6E\u7A7A\u5B57\u7B26\u4E32\uFF0C\u7ED3\u679C\u4F1A\u53D8\u6210\u5B57\u7B26\u4E32"true" '),
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createCommentVNode(" {{required}} "),
          _ctx.required || _ctx.leftIcon || _ctx.label ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-form-item__body__left",
            style: vue.normalizeStyle({
              width: _ctx.$u.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
              marginBottom: $data.parentData.labelPosition === "left" ? 0 : "5px"
            })
          }, [
            vue.createCommentVNode(" \u4E3A\u4E86\u5757\u5BF9\u9F50 "),
            vue.createElementVNode("view", { class: "u-form-item__body__left__content" }, [
              vue.createCommentVNode(" nvue\u4E0D\u652F\u6301\u4F2A\u5143\u7D20before "),
              _ctx.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "u-form-item__body__left__content__required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              _ctx.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "u-form-item__body__left__content__icon"
              }, [
                vue.createVNode(_component_u_icon, {
                  name: _ctx.leftIcon,
                  "custom-style": _ctx.leftIconStyle
                }, null, 8, ["name", "custom-style"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", {
                class: "u-form-item__body__left__content__label",
                style: vue.normalizeStyle([$data.parentData.labelStyle, {
                  justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
                }])
              }, vue.toDisplayString(_ctx.label), 5)
            ])
          ], 4)) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createElementVNode("view", { class: "u-form-item__body__right" }, [
          vue.createElementVNode("view", { class: "u-form-item__body__right__content" }, [
            vue.createElementVNode("view", { class: "u-form-item__body__right__content__slot" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _ctx.$slots.right ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "item__body__right__content__icon"
            }, [
              vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ], 4),
      vue.renderSlot(_ctx.$slots, "error", {}, () => [
        !!$data.message && $data.parentData.errorType === "message" ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "u-form-item__body__right__message",
          style: vue.normalizeStyle({
            marginLeft: _ctx.$u.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
          })
        }, vue.toDisplayString($data.message), 5)) : vue.createCommentVNode("v-if", true)
      ], true),
      _ctx.borderBottom ? (vue.openBlock(), vue.createBlock(_component_u_line, {
        key: 0,
        color: $data.message && $data.parentData.errorType === "border-bottom" ? _ctx.$u.color.error : $options.propsLine.color,
        customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
      }, null, 8, ["color", "customStyle"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-067e4733"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-form-item/u-form-item.vue"]]);
  var props$2 = {
    props: {
      model: {
        type: Object,
        default: uni.$u.props.form.model
      },
      rules: {
        type: [Object, Function, Array],
        default: uni.$u.props.form.rules
      },
      errorType: {
        type: String,
        default: uni.$u.props.form.errorType
      },
      borderBottom: {
        type: Boolean,
        default: uni.$u.props.form.borderBottom
      },
      labelPosition: {
        type: String,
        default: uni.$u.props.form.labelPosition
      },
      labelWidth: {
        type: [String, Number],
        default: uni.$u.props.form.labelWidth
      },
      labelAlign: {
        type: String,
        default: uni.$u.props.form.labelAlign
      },
      labelStyle: {
        type: Object,
        default: uni.$u.props.form.labelStyle
      }
    }
  };
  const formatRegExp = /%[sdj%]/g;
  let warning = function warning2() {
  };
  if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning2(type2, errors) {
      if (typeof console !== "undefined" && console.warn) {
        if (errors.every((e) => typeof e === "string")) {
          formatAppLog("warn", "at uni_modules/uview-ui/libs/util/async-validator.js:28", type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    const fields = {};
    errors.forEach((error2) => {
      const { field } = error2;
      fields[field] = fields[field] || [];
      fields[field].push(error2);
    });
    return fields;
  }
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    let i = 1;
    const f = args[0];
    const len = args.length;
    if (typeof f === "function") {
      return f.apply(null, args.slice(1));
    }
    if (typeof f === "string") {
      let str = String(f).replace(formatRegExp, (x) => {
        if (x === "%%") {
          return "%";
        }
        if (i >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x;
        }
      });
      for (let arg = args[i]; i < len; arg = args[++i]) {
        str += ` ${arg}`;
      }
      return str;
    }
    return f;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
  }
  function isEmptyValue(value, type2) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func2, callback) {
    const results = [];
    let total = 0;
    const arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach((a) => {
      func2(a, count);
    });
  }
  function asyncSerialArray(arr, func2, callback) {
    let index2 = 0;
    const arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      const original = index2;
      index2 += 1;
      if (original < arrLength) {
        func2(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    const ret = [];
    Object.keys(objArr).forEach((k) => {
      ret.push.apply(ret, objArr[k]);
    });
    return ret;
  }
  function asyncMap(objArr, option, func2, callback) {
    if (option.first) {
      const _pending = new Promise((resolve, reject) => {
        const next = function next2(errors) {
          callback(errors);
          return errors.length ? reject({
            errors,
            fields: convertFieldsError(errors)
          }) : resolve();
        };
        const flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func2, next);
      });
      _pending.catch((e) => e);
      return _pending;
    }
    let firstFields = option.firstFields || [];
    if (firstFields === true) {
      firstFields = Object.keys(objArr);
    }
    const objArrKeys = Object.keys(objArr);
    const objArrLength = objArrKeys.length;
    let total = 0;
    const results = [];
    const pending = new Promise((resolve, reject) => {
      const next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject({
            errors: results,
            fields: convertFieldsError(results)
          }) : resolve();
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve();
      }
      objArrKeys.forEach((key) => {
        const arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func2, next);
        } else {
          asyncParallelArray(arr, func2, next);
        }
      });
    });
    pending.catch((e) => e);
    return pending;
  }
  function complementError(rule) {
    return function(oe) {
      if (oe && oe.message) {
        oe.field = oe.field || rule.fullField;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge$2(target, source) {
    if (source) {
      for (const s in source) {
        if (source.hasOwnProperty(s)) {
          const value = source[s];
          if (typeof value === "object" && typeof target[s] === "object") {
            target[s] = __spreadValues(__spreadValues({}, target[s]), value);
          } else {
            target[s] = value;
          }
        }
      }
    }
    return target;
  }
  function required(rule, value, source, errors, options, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  }
  function whitespace(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  }
  const pattern = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer2(value) {
      return /^(-)?\d+$/.test(value);
    },
    float: function float(value) {
      return /^(-)?\d+(\.\d+)?$/.test(value);
    },
    array: function array2(value) {
      return Array.isArray(value);
    },
    regexp: function regexp2(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e) {
        return false;
      }
    },
    date: function date2(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
    },
    number: function number2(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof +value === "number";
    },
    object: function object2(value) {
      return typeof value === "object" && !types.array(value);
    },
    method: function method2(value) {
      return typeof value === "function";
    },
    email: function email2(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url: function url2(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern.hex);
    }
  };
  function type(rule, value, source, errors, options) {
    if (rule.required && value === void 0) {
      required(rule, value, source, errors, options);
      return;
    }
    const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    const ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  }
  function range$2(rule, value, source, errors, options) {
    const len = typeof rule.len === "number";
    const min = typeof rule.min === "number";
    const max = typeof rule.max === "number";
    const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    let val = value;
    let key = null;
    const num = typeof value === "number";
    const str = typeof value === "string";
    const arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  }
  const ENUM = "enum";
  function enumerable(rule, value, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (rule[ENUM].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
    }
  }
  function pattern$1(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        const _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  }
  const rules = {
    required,
    whitespace,
    type,
    range: range$2,
    enum: enumerable,
    pattern: pattern$1
  };
  function string$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function method(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function number$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function _boolean(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function regexp(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function integer(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function floatFn(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function array$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "array") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "array");
      if (!isEmptyValue(value, "array")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function object$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  const ENUM$1 = "enum";
  function enumerable$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules[ENUM$1](rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function pattern$2(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function date$1(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        let dateObject;
        if (typeof value === "number") {
          dateObject = new Date(value);
        } else {
          dateObject = value;
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function required$1(rule, value, callback, source, options) {
    const errors = [];
    const type2 = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options, type2);
    callback(errors);
  }
  function type$1(rule, value, callback, source, options) {
    const ruleType = rule.type;
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function any(rule, value, callback, source, options) {
    const errors = [];
    const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
    }
    callback(errors);
  }
  const validators = {
    string: string$1,
    method,
    number: number$1,
    boolean: _boolean,
    regexp,
    integer,
    float: floatFn,
    array: array$1,
    object: object$1,
    enum: enumerable$1,
    pattern: pattern$2,
    date: date$1,
    url: type$1,
    hex: type$1,
    email: type$1,
    required: required$1,
    any
  };
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone2() {
        const cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  const messages = newMessages();
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  Schema.prototype = {
    messages: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge$2(newMessages(), _messages);
      }
      return this._messages;
    },
    define: function define(rules2) {
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      let z;
      let item;
      for (z in rules2) {
        if (rules2.hasOwnProperty(z)) {
          item = rules2[z];
          this.rules[z] = Array.isArray(item) ? item : [item];
        }
      }
    },
    validate: function validate(source_, o, oc) {
      const _this = this;
      if (o === void 0) {
        o = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      let source = source_;
      let options = o;
      let callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback();
        }
        return Promise.resolve();
      }
      function complete(results) {
        let i;
        let errors = [];
        let fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            let _errors;
            errors = (_errors = errors).concat.apply(_errors, e);
          } else {
            errors.push(e);
          }
        }
        for (i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          errors = null;
          fields = null;
        } else {
          fields = convertFieldsError(errors);
        }
        callback(errors, fields);
      }
      if (options.messages) {
        let messages$12 = this.messages();
        if (messages$12 === messages) {
          messages$12 = newMessages();
        }
        deepMerge$2(messages$12, options.messages);
        options.messages = messages$12;
      } else {
        options.messages = this.messages();
      }
      let arr;
      let value;
      const series = {};
      const keys = options.keys || Object.keys(this.rules);
      keys.forEach((z) => {
        arr = _this.rules[z];
        value = source[z];
        arr.forEach((r) => {
          let rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = __spreadValues({}, source);
            }
            value = source[z] = rule.transform(value);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = __spreadValues({}, rule);
          }
          rule.validator = _this.getValidationMethod(rule);
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this.getType(rule);
          if (!rule.validator) {
            return;
          }
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value,
            source,
            field: z
          });
        });
      });
      const errorFields = {};
      return asyncMap(series, options, (data, doIt) => {
        const { rule } = data;
        let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullfield(key, schema) {
          return __spreadProps(__spreadValues({}, schema), { fullField: `${rule.fullField}.${key}` });
        }
        function cb(e) {
          if (e === void 0) {
            e = [];
          }
          let errors = e;
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          if (!options.suppressWarning && errors.length) {
            Schema.warning("async-validator:", errors);
          }
          if (errors.length && rule.message) {
            errors = [].concat(rule.message);
          }
          errors = errors.map(complementError(rule));
          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }
          if (!deep) {
            doIt(errors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [options.error(rule, format(options.messages.required, rule.field))];
              } else {
                errors = [];
              }
              return doIt(errors);
            }
            let fieldsSchema = {};
            if (rule.defaultField) {
              for (const k in data.value) {
                if (data.value.hasOwnProperty(k)) {
                  fieldsSchema[k] = rule.defaultField;
                }
              }
            }
            fieldsSchema = __spreadValues(__spreadValues({}, fieldsSchema), data.rule.fields);
            for (const f in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f)) {
                const fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
              }
            }
            const schema = new Schema(fieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, (errs) => {
              const finalErrors = [];
              if (errors && errors.length) {
                finalErrors.push.apply(finalErrors, errors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        let res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || `${rule.field} fails`);
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(() => cb(), (e) => cb(e));
        }
      }, (results) => {
        complete(results);
      });
    },
    getType: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    },
    getValidationMethod: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      const keys = Object.keys(rule);
      const messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || false;
    }
  };
  Schema.register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  Schema.warning = warning;
  Schema.messages = messages;
  Schema.warning = function() {
  };
  const _sfc_main$8 = {
    name: "u-form",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$2],
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
            this.originalModel = uni.$u.deepClone(n);
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
      setRules(rules2) {
        if (Object.keys(rules2).length === 0)
          return;
        if (Object.keys(this.model).length === 0) {
          uni.$u.error("\u8BBE\u7F6Erules\uFF0Cmodel\u5FC5\u987B\u8BBE\u7F6E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
          return;
        }
        this.formRules = rules2;
        this.validator = new Schema(rules2);
      },
      resetFields() {
        this.resetModel();
      },
      resetModel(obj) {
        this.children.map((child) => {
          const prop = child == null ? void 0 : child.prop;
          const value = uni.$u.getProperty(this.originalModel, prop);
          uni.$u.setProperty(this.model, prop, value);
        });
      },
      clearValidate(props2) {
        props2 = [].concat(props2);
        this.children.map((child) => {
          if (props2[0] === void 0 || props2.includes(child.prop)) {
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
              const propertyVal = uni.$u.getProperty(this.model, child.prop);
              const propertyChain = child.prop.split(".");
              const propertyName = propertyChain[propertyChain.length - 1];
              const rule = this.formRules[child.prop];
              if (!rule)
                return;
              const rules2 = [].concat(rule);
              for (let i = 0; i < rules2.length; i++) {
                const ruleItem = rules2[i];
                const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
                if (event && !trigger.includes(event))
                  continue;
                const validator = new Schema({
                  [propertyName]: ruleItem
                });
                validator.validate({
                  [propertyName]: propertyVal
                }, (errors, fields) => {
                  var _a, _b;
                  if (uni.$u.test.array(errors)) {
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
          uni.$u.error("\u672A\u8BBE\u7F6Erules\uFF0C\u8BF7\u770B\u6587\u6863\u8BF4\u660E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
          return;
        }
        return new Promise((resolve, reject) => {
          this.$nextTick(() => {
            const formItemProps = this.children.map((item) => item.prop);
            this.validateField(formItemProps, (errors) => {
              if (errors.length) {
                this.errorType === "toast" && uni.$u.toast(errors[0].message);
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var uvForm = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-form/u-form.vue"]]);
  const _sfc_main$7 = {
    name: "u--form",
    mixins: [uni.$u.mpMixin, props$2, uni.$u.mixin],
    components: {
      uvForm
    },
    created() {
      this.children = [];
    },
    methods: {
      setRules(rules2) {
        this.$refs.uForm.setRules(rules2);
      },
      validate() {
        return this.$refs.uForm.validate();
      },
      validateField(value, callback) {
        return this.$refs.uForm.validateField(value, callback);
      },
      resetFields() {
        return this.$refs.uForm.resetFields();
      },
      clearValidate(props2) {
        return this.$refs.uForm.clearValidate(props2);
      },
      setMpData() {
        this.$refs.uForm.children = this.children;
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvForm = vue.resolveComponent("uvForm");
    return vue.openBlock(), vue.createBlock(_component_uvForm, {
      ref: "uForm",
      model: _ctx.model,
      rules: _ctx.rules,
      errorType: _ctx.errorType,
      borderBottom: _ctx.borderBottom,
      labelPosition: _ctx.labelPosition,
      labelWidth: _ctx.labelWidth,
      labelAlign: _ctx.labelAlign,
      labelStyle: _ctx.labelStyle,
      customStyle: _ctx.customStyle
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["model", "rules", "errorType", "borderBottom", "labelPosition", "labelWidth", "labelAlign", "labelStyle", "customStyle"]);
  }
  var __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u--form/u--form.vue"]]);
  var props$1 = {
    props: {
      hairline: {
        type: Boolean,
        default: uni.$u.props.button.hairline
      },
      type: {
        type: String,
        default: uni.$u.props.button.type
      },
      size: {
        type: String,
        default: uni.$u.props.button.size
      },
      shape: {
        type: String,
        default: uni.$u.props.button.shape
      },
      plain: {
        type: Boolean,
        default: uni.$u.props.button.plain
      },
      disabled: {
        type: Boolean,
        default: uni.$u.props.button.disabled
      },
      loading: {
        type: Boolean,
        default: uni.$u.props.button.loading
      },
      loadingText: {
        type: [String, Number],
        default: uni.$u.props.button.loadingText
      },
      loadingMode: {
        type: String,
        default: uni.$u.props.button.loadingMode
      },
      loadingSize: {
        type: [String, Number],
        default: uni.$u.props.button.loadingSize
      },
      openType: {
        type: String,
        default: uni.$u.props.button.openType
      },
      formType: {
        type: String,
        default: uni.$u.props.button.formType
      },
      appParameter: {
        type: String,
        default: uni.$u.props.button.appParameter
      },
      hoverStopPropagation: {
        type: Boolean,
        default: uni.$u.props.button.hoverStopPropagation
      },
      lang: {
        type: String,
        default: uni.$u.props.button.lang
      },
      sessionFrom: {
        type: String,
        default: uni.$u.props.button.sessionFrom
      },
      sendMessageTitle: {
        type: String,
        default: uni.$u.props.button.sendMessageTitle
      },
      sendMessagePath: {
        type: String,
        default: uni.$u.props.button.sendMessagePath
      },
      sendMessageImg: {
        type: String,
        default: uni.$u.props.button.sendMessageImg
      },
      showMessageCard: {
        type: Boolean,
        default: uni.$u.props.button.showMessageCard
      },
      dataName: {
        type: String,
        default: uni.$u.props.button.dataName
      },
      throttleTime: {
        type: [String, Number],
        default: uni.$u.props.button.throttleTime
      },
      hoverStartTime: {
        type: [String, Number],
        default: uni.$u.props.button.hoverStartTime
      },
      hoverStayTime: {
        type: [String, Number],
        default: uni.$u.props.button.hoverStayTime
      },
      text: {
        type: [String, Number],
        default: uni.$u.props.button.text
      },
      icon: {
        type: String,
        default: uni.$u.props.button.icon
      },
      iconColor: {
        type: String,
        default: uni.$u.props.button.icon
      },
      color: {
        type: String,
        default: uni.$u.props.button.color
      }
    }
  };
  const _sfc_main$6 = {
    name: "u-button",
    mixins: [uni.$u.mpMixin, uni.$u.mixin, props$1],
    data() {
      return {};
    },
    computed: {
      bemClass() {
        if (!this.color) {
          return this.bem("button", ["type", "shape", "size"], ["disabled", "plain", "hairline"]);
        } else {
          return this.bem("button", ["shape", "size"], ["disabled", "plain", "hairline"]);
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : uni.$u.config.color[`u-${this.type}`];
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      }
    },
    methods: {
      clickHandler() {
        if (!this.disabled && !this.loading) {
          uni.$u.throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      },
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_0$2);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("button", {
      "hover-start-time": Number(_ctx.hoverStartTime),
      "hover-stay-time": Number(_ctx.hoverStayTime),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
      class: vue.normalizeClass(["u-button u-reset-button", $options.bemClass]),
      style: vue.normalizeStyle([$options.baseColor, _ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createVNode(_component_u_loading_icon, {
          mode: _ctx.loadingMode,
          size: _ctx.loadingSize * 1.15,
          color: $options.loadingColor
        }, null, 8, ["mode", "size", "color"]),
        vue.createElementVNode("text", {
          class: "u-button__loading-text",
          style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
        }, vue.toDisplayString(_ctx.loadingText || _ctx.text), 5)
      ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          name: _ctx.icon,
          color: $options.iconColorCom,
          size: $options.textSize * 1.35,
          customStyle: { marginRight: "2px" }
        }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", {
            class: "u-button__text",
            style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
          }, vue.toDisplayString(_ctx.text), 5)
        ], true)
      ], 64))
    ], 46, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class"]);
  }
  var __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-2bf0e569"], ["__file", "D:/xxzl/z/uniapp/paipai/uni_modules/uview-ui/components/u-button/u-button.vue"]]);
  const _sfc_main$5 = {
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
              return uni.$u.test.amount(value) && value < 1e5;
            },
            message: "\u8BF7\u6B63\u786E\u8F93\u5165\u4EF7\u683C,\u4E0D\u80FD\u5927\u4E8E100000,\u5C0F\u6570\u70B9\u540E\u6700\u591A\u4E24\u4F4D",
            trigger: ["change", "blur"]
          },
          "userInfo.jg": {
            validator: (rule, value, callback) => {
              return uni.$u.test.amount(value) && value < 1e5;
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
          uni.$u.toast("\u6821\u9A8C\u901A\u8FC7");
        }).catch((errors) => {
          uni.$u.toast("\u6821\u9A8C\u5931\u8D25");
        });
      },
      remove() {
        formatAppLog("log", "at pages/upload/upload.vue:104", "xx");
      },
      wzClose() {
        this.show = false;
      },
      changeHandler(e) {
        const {
          columnIndex,
          value,
          values,
          index: index2,
          picker: picker2 = this.$refs.uPicker
        } = e;
        if (columnIndex === 0) {
          picker2.setColumnValues(1, this.columnData[index2]);
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__textarea = resolveEasycom(vue.resolveDynamicComponent("u--textarea"), __easycom_0$4);
    const _component_tui_upload = resolveEasycom(vue.resolveDynamicComponent("tui-upload"), __easycom_1$2);
    const _component_u_picker = resolveEasycom(vue.resolveDynamicComponent("u-picker"), __easycom_2);
    const _component_tui_list_cell = resolveEasycom(vue.resolveDynamicComponent("tui-list-cell"), __easycom_3$2);
    const _component_tui_list_view = resolveEasycom(vue.resolveDynamicComponent("tui-list-view"), __easycom_4$1);
    const _component_u__input = resolveEasycom(vue.resolveDynamicComponent("u--input"), __easycom_5);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_6);
    const _component_u__form = resolveEasycom(vue.resolveDynamicComponent("u--form"), __easycom_7);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "upload" }, [
      vue.createElementVNode("view", null, [
        vue.createCommentVNode(" \u6587\u672C\u8F93\u5165 "),
        vue.createVNode(_component_u__textarea, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value2 = $event),
          border: "none",
          height: "300rpx",
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          count: ""
        }, null, 8, ["modelValue"]),
        vue.createCommentVNode(" \u56FE\u7247\u4E0A\u4F20 "),
        vue.createVNode(_component_tui_upload, {
          value: _ctx.value,
          serverUrl: _ctx.serverUrl,
          onComplete: _ctx.result,
          onRemove: $options.remove
        }, null, 8, ["value", "serverUrl", "onComplete", "onRemove"]),
        vue.createCommentVNode(" \u4F4D\u7F6E\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "wz" }, [
          vue.createVNode(_component_u_picker, {
            show: $data.show,
            ref: "uPicker",
            columns: $data.columns,
            onConfirm: $options.confirm,
            onChange: $options.changeHandler,
            onClose: $options.wzClose,
            onCancel: $options.wzClose
          }, null, 8, ["show", "columns", "onConfirm", "onChange", "onClose", "onCancel"]),
          vue.createCommentVNode(' <u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler">\r\n				</u-picker> '),
          vue.createVNode(_component_tui_list_view, { color: "#777" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_tui_list_cell, {
                arrow: "",
                onClick: _cache[1] || (_cache[1] = ($event) => $data.show = true),
                padding: "26rpx 0"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString($data.location), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        vue.createCommentVNode(" \u4EF7\u683C "),
        vue.createElementVNode("view", { class: "jg" }, [
          vue.createVNode(_component_u__form, {
            labelPosition: "left",
            model: $data.model1,
            rules: $data.rules,
            ref: "form1"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_form_item, {
                label: "\u539F\u4EF7",
                prop: "userInfo.yj",
                "border-bottom": "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    border: "none",
                    value: $data.model1.userInfo.yj,
                    onInput: $options.yjInput
                  }, null, 8, ["value", "onInput"])
                ]),
                _: 1
              }),
              vue.createVNode(_component_u_form_item, {
                label: "\u4EF7\u683C",
                prop: "userInfo.jg",
                "border-bottom": "true"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_u__input, {
                    border: "none",
                    value: $data.model1.userInfo.jg,
                    onInput: $options.jgInput
                  }, null, 8, ["value", "onInput"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ])
      ]),
      vue.createElementVNode("view", { class: "emit" }, [
        vue.createVNode(_component_u_button, {
          type: "primary",
          text: "\u786E\u5B9A",
          onClick: $options.submit
        }, null, 8, ["onClick"])
      ])
    ]);
  }
  var PagesUploadUpload = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/xxzl/z/uniapp/paipai/pages/upload/upload.vue"]]);
  const _sfc_main$4 = {
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
        uni.getSystemInfo({
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
      swichTabs: function(index2) {
        let item = this.tabs[index2];
        if (item && item.disabled)
          return;
        if (this.currentTab == index2) {
          return false;
        } else {
          this.$emit("change", {
            index: Number(index2)
          });
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.tabsWidth > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["tui-tabs-view", [$props.isFixed ? "tui-tabs-fixed" : "tui-tabs-relative", $props.unlined ? "tui-unlined" : ""]]),
      style: vue.normalizeStyle({
        width: $data.tabsWidth + "px",
        height: $props.height + "rpx",
        padding: `0 ${$props.padding}rpx`,
        background: $props.backgroundColor,
        top: $props.isFixed ? $props.top + "px" : "auto",
        zIndex: $props.isFixed ? $props.zIndex : "auto"
      })
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.tabs, (item, index2) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: index2,
          class: "tui-tabs-item",
          style: vue.normalizeStyle({ width: $props.itemWidth, height: $props.height + "rpx" }),
          onClick: vue.withModifiers(($event) => $options.swichTabs(index2), ["stop"])
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["tui-tabs-title", { "tui-tabs-active": $props.currentTab == index2, "tui-tabs-disabled": item.disabled }]),
            style: vue.normalizeStyle({
              color: $props.currentTab == index2 ? $props.selectedColor : $props.color,
              fontSize: $props.size + "rpx",
              fontWeight: $props.bold && $props.currentTab == index2 ? "bold" : "normal"
            })
          }, [
            vue.createTextVNode(vue.toDisplayString(item.name) + " ", 1),
            item.num || item.isDot ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: vue.normalizeClass([item.isDot ? "tui-badge__dot" : "tui-tabs__badge"]),
              style: vue.normalizeStyle({ color: $props.badgeColor, backgroundColor: $props.badgeBgColor })
            }, vue.toDisplayString(item.isDot ? "" : item.num), 7)) : vue.createCommentVNode("v-if", true)
          ], 6)
        ], 12, ["onClick"]);
      }), 128)),
      $props.isSlider ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "tui-tabs-slider",
        style: vue.normalizeStyle({
          transform: "translateX(" + $data.scrollLeft + "px)",
          width: $props.sliderWidth + "rpx",
          height: $props.sliderHeight + "rpx",
          borderRadius: $props.sliderRadius,
          bottom: $props.bottom,
          background: $props.sliderBgColor,
          marginBottom: $props.bottom == "50%" ? "-" + $props.sliderHeight / 2 + "rpx" : 0
        })
      }, null, 4)) : vue.createCommentVNode("v-if", true)
    ], 6)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-e238c142"], ["__file", "D:/xxzl/z/uniapp/paipai/node_modules/thorui-uni/lib/thorui/tui-tabs/tui-tabs.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$1(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type2 = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type2, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type2 = args.type;
        if (!options || !options.root) {
          type2 = namespace + type2;
          if (!store2._actions[type2]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type2);
            return;
          }
        }
        return store2.dispatch(type2, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type2 = args.type;
        if (!options || !options.root) {
          type2 = namespace + type2;
          if (!store2._mutations[type2]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type2);
            return;
          }
        }
        store2.commit(type2, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type2) {
        if (type2.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type2.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type2];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type2, handler, local) {
    var entry = store2._mutations[type2] || (store2._mutations[type2] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type2, handler, local) {
    var entry = store2._actions[type2] || (store2._actions[type2] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type2, rawGetter, local) {
    if (store2._wrappedGetters[type2]) {
      {
        console.error("[vuex] duplicate getter key: " + type2);
      }
      return;
    }
    store2._wrappedGetters[type2] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type2, payload, options) {
    if (isObject$1(type2) && type2.type) {
      options = payload;
      payload = type2;
      type2 = type2.type;
    }
    {
      assert(typeof type2 === "string", "expects string as the type, but found " + typeof type2 + ".");
    }
    return { type: type2, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type2) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type2, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type2, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type2 + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type2, payload) {
      return dispatch.call(store2, type2, payload);
    };
    this.commit = function boundCommit(type2, payload, options2) {
      return commit.call(store2, type2, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type2 = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type: type2, payload };
    var entry = this._mutations[type2];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type2);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type2 + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type2 = ref.type;
    var payload = ref.payload;
    var action = { type: type2, payload };
    var entry = this._actions[type2];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type2);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error2);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error2);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const store = createStore({
    state: {
      "username": "foo",
      "age": 18
    }
  });
  const _sfc_main$3 = {
    data() {
      return {
        currentTab: 0,
        commodity: [],
        title: "",
        tabs: [{
          name: "\u7EFC\u5408"
        }, {
          name: "\u6700\u65B0\u53D1\u5E03"
        }, {
          name: "\u540C\u57CE"
        }, {
          name: "\u4EF7\u683C\u6700\u4F4E"
        }]
      };
    },
    methods: {
      change(e) {
        this.currentTab = e.index;
      }
    },
    onLoad(e) {
      this.title = e.title;
      uni.request({
        url: "http://localhost:4000/api/list",
        data: {
          title: this.title
        },
        method: "GET",
        success: (res) => {
          this.commodity = res.data;
          formatAppLog("log", "at pages/list/list.vue:69", this.commodity);
        }
      });
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_search = resolveEasycom(vue.resolveDynamicComponent("u-search"), __easycom_0$9);
    const _component_tui_tabs = resolveEasycom(vue.resolveDynamicComponent("tui-tabs"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "list" }, [
      vue.createElementVNode("navigator", { url: "/pages/search/search" }, [
        vue.createElementVNode("view", { class: "u-search" }, [
          vue.createVNode(_component_u_search, {
            placeholder: "\u82F9\u679C\u6570\u636E\u7EBF",
            "show-action": false,
            height: "60rpx",
            value: $data.title
          }, null, 8, ["value"])
        ])
      ]),
      vue.createVNode(_component_tui_tabs, {
        tabs: $data.tabs,
        currentTab: $data.currentTab,
        onChange: $options.change
      }, null, 8, ["tabs", "currentTab", "onChange"]),
      vue.createElementVNode("view", { class: "commodity" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.commodity, (item) => {
          return vue.openBlock(), vue.createElementBlock("navigator", {
            url: "/pages/commodity/commodity?id=" + item.commodity_id
          }, [
            vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("image", {
                  src: "http://localhost:4000/images/" + item.src[0],
                  mode: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.title), 1),
                vue.createElementVNode("view", { class: "jg" }, [
                  vue.createTextVNode(" \uFFE5"),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.newprice), 1),
                  vue.createTextVNode(),
                  vue.createElementVNode("text", null, "\u539F\u4EF7\uFFE5" + vue.toDisplayString(item.oldprice), 1)
                ])
              ])
            ])
          ], 8, ["url"]);
        }), 256))
      ])
    ]);
  }
  var PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-7d5e07c6"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/list/list.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        currentTab: 0,
        tabs: [{
          name: "\u5168\u90E8"
        }, {
          name: "\u5F85\u4ED8\u6B3E"
        }, {
          name: "\u5F85\u53D1\u8D27"
        }, {
          name: "\u5F85\u6536\u8D27"
        }]
      };
    },
    methods: {
      change(e) {
        this.currentTab = e.index;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tui_tabs = resolveEasycom(vue.resolveDynamicComponent("tui-tabs"), __easycom_0);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "order" }, [
      vue.createVNode(_component_tui_tabs, {
        tabs: $data.tabs,
        currentTab: $data.currentTab,
        onChange: $options.change
      }, null, 8, ["tabs", "currentTab", "onChange"]),
      vue.createElementVNode("view", { class: "list" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createTextVNode("\u5C0F\u660E "),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_u_icon, {
                  name: "chat",
                  size: "40rpx"
                })
              ])
            ]),
            vue.createElementVNode("view", null, "\u8BA2\u5355\u5B8C\u6210")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/image/comm.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "title" }, "\u5C0F\u7C73\u624B\u673A3 2gb\u5185\u5B58\u7248\u767D\u8272\u79FB\u52A84g\u624B\u673A\u5565\u5730\u65B9\u548C\u9644\u8FD1\u7684\u8EAB\u4EFD\u548C"),
            vue.createElementVNode("view", null, " \uFFE5176.00")
          ])
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createTextVNode("\u5C0F\u660E "),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_u_icon, {
                  name: "chat",
                  size: "40rpx"
                })
              ])
            ]),
            vue.createElementVNode("view", null, "\u8BA2\u5355\u5B8C\u6210")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/image/comm.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "title" }, "\u5C0F\u7C73\u624B\u673A3 2gb\u5185\u5B58\u7248\u767D\u8272\u79FB\u52A84g\u624B\u673A\u5565\u5730\u65B9\u548C\u9644\u8FD1\u7684\u8EAB\u4EFD\u548C"),
            vue.createElementVNode("view", null, " \uFFE5176.00")
          ])
        ])
      ])
    ]);
  }
  var PagesOrderOrder = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-127632e4"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/order/order.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        currentTab: 0,
        tabs: [{
          name: "\u6211\u53D1\u5E03\u7684"
        }, {
          name: "\u6211\u4E70\u51FA\u7684"
        }, {
          name: "\u4E0B\u67B6\u5546\u54C1"
        }]
      };
    },
    methods: {
      change(e) {
        this.currentTab = e.index;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tui_tabs = resolveEasycom(vue.resolveDynamicComponent("tui-tabs"), __easycom_0);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "order" }, [
      vue.createVNode(_component_tui_tabs, {
        tabs: $data.tabs,
        currentTab: $data.currentTab,
        onChange: $options.change
      }, null, 8, ["tabs", "currentTab", "onChange"]),
      vue.createElementVNode("view", { class: "list" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createTextVNode("\u5C0F\u660E "),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_u_icon, {
                  name: "chat",
                  size: "40rpx"
                })
              ])
            ]),
            vue.createElementVNode("view", null, "\u8BA2\u5355\u5B8C\u6210")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/image/comm.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "title" }, "\u5C0F\u7C73\u624B\u673A3 2gb\u5185\u5B58\u7248\u767D\u8272\u79FB\u52A84g\u624B\u673A\u5565\u5730\u65B9\u548C\u9644\u8FD1\u7684\u8EAB\u4EFD\u548C"),
            vue.createElementVNode("view", null, " \uFFE5176.00")
          ])
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createTextVNode("\u5C0F\u660E "),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_u_icon, {
                  name: "chat",
                  size: "40rpx"
                })
              ])
            ]),
            vue.createElementVNode("view", null, "\u8BA2\u5355\u5B8C\u6210")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("image", {
                src: "/static/image/comm.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "title" }, "\u5C0F\u7C73\u624B\u673A3 2gb\u5185\u5B58\u7248\u767D\u8272\u79FB\u52A84g\u624B\u673A\u5565\u5730\u65B9\u548C\u9644\u8FD1\u7684\u8EAB\u4EFD\u548C"),
            vue.createElementVNode("view", null, " \uFFE5176.00")
          ])
        ])
      ])
    ]);
  }
  var PagesIdleIdle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-48338cf4"], ["__file", "D:/xxzl/z/uniapp/paipai/pages/idle/idle.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/classification/classification", PagesClassificationClassification);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/information/information", PagesInformationInformation);
  __definePage("pages/release/release", PagesReleaseRelease);
  __definePage("pages/commodity/commodity", PagesCommodityCommodity);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/upload/upload", PagesUploadUpload);
  __definePage("pages/list/list", PagesListList);
  __definePage("pages/order/order", PagesOrderOrder);
  __definePage("pages/idle/idle", PagesIdleIdle);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", uni.$u.config.v);
      formatAppLog("log", "at App.vue:5", "\u9875\u9762\u52A0\u8F7D");
      uni.request({
        url: "http://localhost:4000/api/index",
        data: {
          text: "11111111111111111111111111111111111111111111111111111111111111111111"
        },
        method: "GET",
        success: (res) => {
          formatAppLog("log", "at App.vue:16", res.data);
        }
      });
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:22", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:25", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/xxzl/z/uniapp/paipai/App.vue"]]);
  var mixin = {
    props: {
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: ""
      },
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      $u() {
        return uni.$u.deepMerge(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  var mpMixin = {};
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$1() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$1(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$1({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  var adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile(__spreadValues(__spreadValues(__spreadValues({}, _config), otherConfig), mergeKeys$1(optionalKeys, config2)));
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request(__spreadValues(__spreadValues({}, _config), mergeKeys$1(optionalKeys, config2)));
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  var dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  var mergeConfig = (globalsConfig, config2 = {}) => {
    const method2 = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method: method2,
      url: config2.url || "",
      params: config2.params || {},
      custom: __spreadValues(__spreadValues({}, globalsConfig.custom || {}), config2.custom || {}),
      header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));
    if (method2 === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method2 === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultsKeys, globalsConfig, config2));
    }
    return config3;
  };
  var defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type2) {
      return type2 != null && obj instanceof type2;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value) {
              resolve(_clone(value, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value) {
            var entryChild = _clone(value, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/uview-ui/libs/luch-request/core/Request.js:39", "\u8BBE\u7F6E\u5168\u5C40\u53C2\u6570\u5FC5\u987B\u63A5\u6536\u4E00\u4E2AObject");
      }
      this.config = clone(__spreadValues(__spreadValues({}, defaults), arg));
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        method: "GET"
      }, options));
    }
    post(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "POST"
      }, options));
    }
    put(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "PUT"
      }, options));
    }
    delete(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "DELETE"
      }, options));
    }
    options(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "OPTIONS"
      }, options));
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        params: {},
        animationType: "pop-in",
        animationDuration: 300,
        intercept: false
      };
      this.route = this.route.bind(this);
    }
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = uni.$u.deepClone(options, this.config);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === uni.$u.page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = uni.$u.deepMerge(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    openPage(config2) {
      const {
        url: url2,
        type: type2,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  var route = new Router().route;
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  var colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty$1(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code$1(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image$1(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty: empty$1,
    isEmpty: empty$1,
    jsonString,
    landline,
    object,
    array,
    code: code$1,
    func,
    promise,
    video,
    image: image$1,
    regExp,
    string
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at node_modules/uview-ui/libs/function/digit.js:45", `${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (test.number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_c) => (_c = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$u) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)()) != null ? _c : "px")()) {
    value = String(value);
    return test.number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = test.array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at node_modules/uview-ui/libs/function/index.js:235", `uView\u63D0\u793A\uFF1A${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError("fillString must be String");
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      "d": date2.getDate().toString().padStart(2, "0"),
      "h": date2.getHours().toString().padStart(2, "0"),
      "M": date2.getMinutes().toString().padStart(2, "0"),
      "s": date2.getSeconds().toString().padStart(2, "0")
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format2 = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = new Date().getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (format2 === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = timeFormat(timestamp, format2);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast$1(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type2 = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type2) == -1)
      type2 = "success";
    let iconName = "";
    switch (type2) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem2 = uni.$u.$parent.call(instance, "u-form-item");
    const form2 = uni.$u.$parent.call(instance, "u-form");
    if (formItem2 && form2) {
      form2.validateField(formItem2.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a, _b;
    const pages2 = getCurrentPages();
    return `/${(_b = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route) != null ? _b : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$u;
    uni.$u.config = deepMerge2(uni.$u.config, config2);
    uni.$u.props = deepMerge2(uni.$u.props, props2);
    uni.$u.color = deepMerge2(uni.$u.color, color2);
    uni.$u.zIndex = deepMerge2(uni.$u.zIndex, zIndex2);
  }
  var index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast: toast$1,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    setConfig
  };
  const version = "2.0.31";
  {
    formatAppLog("log", "at node_modules/uview-ui/libs/config/config.js:6", `
 %c uView V${version} %c https://www.uviewui.com/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  var config = {
    v: version,
    version,
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    unit: "px"
  };
  var actionSheet = {
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  var album = {
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  var alert = {
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  var avatar = {
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  var avatarGroup = {
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  var backtop = {
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  var badge = {
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  var button = {
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  var calendar = {
    calendar: {
      title: "\u65E5\u671F\u9009\u62E9",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "\u5F00\u59CB",
      endText: "\u7ED3\u675F",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "\u786E\u5B9A",
      confirmDisabledText: "\u786E\u5B9A",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  var carKeyboard = {
    carKeyboard: {
      random: false
    }
  };
  var cell = {
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  var cellGroup = {
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  var checkbox = {
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  var checkboxGroup = {
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  var circleProgress = {
    circleProgress: {
      percentage: 30
    }
  };
  var code = {
    code: {
      seconds: 60,
      startText: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
      changeText: "X\u79D2\u91CD\u65B0\u83B7\u53D6",
      endText: "\u91CD\u65B0\u83B7\u53D6",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  var codeInput = {
    codeInput: {
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  var col = {
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  var collapse = {
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  var collapseItem = {
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  var columnNotice = {
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  var countDown = {
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  var countTo = {
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  var datetimePicker = {
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: () => []
    }
  };
  var divider = {
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  var empty = {
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  var form = {
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  var formItem = {
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  var gap = {
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  var grid = {
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  var gridItem = {
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  var icon = {
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  var image = {
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  var indexAnchor = {
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  var indexList = {
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  var input = {
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  var keyboard = {
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      autoChange: false
    }
  };
  var line = {
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  var lineProgress = {
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  var link = {
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u6253\u5F00",
      lineColor: "",
      text: ""
    }
  };
  var list = {
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  var listItem = {
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  var loadingIcon = {
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  var loadingPage = {
    loadingPage: {
      loadingText: "\u6B63\u5728\u52A0\u8F7D",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      loadingColor: "#C8C8C8"
    }
  };
  var loadmore = {
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "\u52A0\u8F7D\u66F4\u591A",
      loadingText: "\u6B63\u5728\u52A0\u8F7D...",
      nomoreText: "\u6CA1\u6709\u66F4\u591A\u4E86",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false
    }
  };
  var modal = {
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  var navbar = {
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  var noNetwork = {
    noNetwork: {
      tips: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u4FE1\u53F7\u4E22\u5931",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  var noticeBar = {
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  var notify = {
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  var numberBox = {
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  var numberKeyboard = {
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  var overlay = {
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  var parse = {
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  var picker = {
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      singleIndex: 0,
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  var popup = {
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  var radio = {
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  var radioGroup = {
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  var rate = {
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  var readMore = {
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "\u5C55\u5F00\u9605\u8BFB\u5168\u6587",
      openText: "\u6536\u8D77",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  var row = {
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  var rowNotice = {
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  var scrollList = {
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  var search = {
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "\u641C\u7D22",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  var section = {
    section: {
      title: "",
      subTitle: "\u66F4\u591A",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  var skeleton = {
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  var slider = {
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  var statusBar = {
    statusBar: {
      bgColor: "transparent"
    }
  };
  var steps = {
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  var stepsItem = {
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  var sticky = {
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  var subsection = {
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  var swipeAction = {
    swipeAction: {
      autoClose: true
    }
  };
  var swipeActionItem = {
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  var swiper = {
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  var swipterIndicator = {
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  var _switch = {
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  var tabbar = {
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  var tabbarItem = {
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  var tabs = {
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  var tag = {
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  var text = {
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  var textarea = {
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  var toast = {
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  var toolbar = {
    toolbar: {
      show: true,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  var tooltip = {
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  var transition = {
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  var upload = {
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  var props = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, actionSheet), album), alert), avatar), avatarGroup), backtop), badge), button), calendar), carKeyboard), cell), cellGroup), checkbox), checkboxGroup), circleProgress), code), codeInput), col), collapse), collapseItem), columnNotice), countDown), countTo), datetimePicker), divider), empty), form), formItem), gap), grid), gridItem), icon), image), indexAnchor), indexList), input), keyboard), line), lineProgress), link), list), listItem), loadingIcon), loadingPage), loadmore), modal), navbar), noNetwork), noticeBar), notify), numberBox), numberKeyboard), overlay), parse), picker), popup), radio), radioGroup), rate), readMore), row), rowNotice), scrollList), search), section), skeleton), slider), statusBar), steps), stepsItem), sticky), subsection), swipeAction), swipeActionItem), swiper), swipterIndicator), _switch), tabbar), tabbarItem), tabs), tag), text), textarea), toast), toolbar), tooltip), transition), upload);
  var zIndex = {
    toast: 10090,
    noNetwork: 10080,
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  var platform$1 = platform;
  const $u = __spreadProps(__spreadValues({
    route,
    date: index.timeFormat,
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: ["primary", "success", "error", "warning", "info"],
    http: new Request(),
    config,
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props
  }, index), {
    color,
    platform: platform$1
  });
  uni.$u = $u;
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(uni.VueShared, Vue);
