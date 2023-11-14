"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_title2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_title = () => "../../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_title + _easycom_uni_search_bar)();
}
const _sfc_main = {
  __name: "CustomNavbar",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const searchValue = common_vendor.ref();
    const search = () => {
    };
    const input = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "h1",
          title: "圣科旗舰店"
        }),
        b: common_vendor.o(search),
        c: common_vendor.o(input),
        d: common_vendor.o(($event) => searchValue.value = $event),
        e: common_vendor.p({
          radius: "100",
          bgColor: "#ffffff",
          cancelButton: "none",
          placeholder: "请输入搜索内容",
          modelValue: searchValue.value
        }),
        f: common_vendor.unref(safeAreaInsets).top + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/index/components/CustomNavbar.vue"]]);
wx.createComponent(Component);
