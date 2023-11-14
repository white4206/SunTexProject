"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "CustomNavbar",
  props: {
    title: {
      type: String
    }
  },
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const handleBack = () => {
      common_vendor.index.navigateBack({ delta: 1 });
    };
    const handleBackHome = () => [
      common_vendor.index.switchTab({ url: "/pages/index/index" })
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleBack),
        b: common_vendor.o(handleBackHome),
        c: common_vendor.t(__props.title),
        d: common_vendor.unref(safeAreaInsets).top + 6 + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/components/CustomNavbar/CustomNavbar.vue"]]);
wx.createComponent(Component);
