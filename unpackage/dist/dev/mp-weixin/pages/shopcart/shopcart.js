"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_input_number_box2 = common_vendor.resolveComponent("vk-data-input-number-box");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_vk_data_input_number_box2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_vk_data_input_number_box = () => "../../components/vk-data-input-number-box/vk-data-input-number-box.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_vk_data_input_number_box + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = {
  __name: "shopcart",
  props: {
    safeAreaInsetBottom: {
      type: Boolean
    }
  },
  setup(__props) {
    common_vendor.index.getSystemInfoSync();
    const cartList = common_vendor.ref([
      {
        name: "韩泰（Hankook）轮胎/汽车轮胎 205/55R16 91V K415 原配大众宝来/高尔夫/朗逸",
        imgURL: "https://img12.360buyimg.com/n1/jfs/t1/137440/39/31493/133415/6433b91aFc3311067/90e1d9e53b866b21.jpg",
        attrsText: "轮胎1",
        price: 308,
        count: 1,
        skuId: 2,
        id: 1
      }
    ]);
    common_vendor.ref(true);
    common_vendor.onShow(() => {
    });
    common_vendor.computed(() => {
      return cartList.value.length && cartList.value.every((v) => v.selected);
    });
    const selectedCartList = common_vendor.computed(() => {
      return cartList.value.filter((v) => v.selected);
    });
    common_vendor.computed(() => {
      return selectedCartList.value.reduce((sum, item) => sum + item.count, 0);
    });
    common_vendor.computed(() => {
      return selectedCartList.value.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({}, {
        j: common_vendor.o((...args) => _ctx.onScrolltolower && _ctx.onScrolltolower(...args))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/shopcart/shopcart.vue"]]);
wx.createPage(MiniProgramPage);
