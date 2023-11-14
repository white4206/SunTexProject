"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const orderTypes = common_vendor.ref([
      { type: "1", text: "购物车" }
    ]);
    const toShopCar = () => {
      common_vendor.index.switchTab({ url: "/pages/shopcart/shopcart" });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({}, {
        a: common_vendor.unref(safeAreaInsets).top + "px",
        b: common_vendor.o(toShopCar),
        c: common_vendor.f(orderTypes.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.type,
            c: common_vendor.o(toShopCar, item.type)
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
