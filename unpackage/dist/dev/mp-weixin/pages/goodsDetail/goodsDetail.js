"use strict";
const common_vendor = require("../../common/vendor.js");
const api_detail = require("../../api/detail.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_swiper_dot2 + _easycom_uni_popup2 + _easycom_vk_data_goods_sku_popup2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (CustomNavbar + _easycom_uni_swiper_dot + _easycom_uni_popup + _easycom_vk_data_goods_sku_popup + _easycom_uni_goods_nav)();
}
const CustomNavbar = () => "../../components/CustomNavbar/CustomNavbar.js";
const _sfc_main = {
  __name: "goodsDetail",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const swiperItems = common_vendor.ref([]);
    const goodsId = common_vendor.ref();
    const goodsPrice = common_vendor.ref();
    const goodsTitle = common_vendor.ref();
    const goodsPicture = common_vendor.ref();
    const tempSkuList = common_vendor.ref();
    const tempSpecList = common_vendor.ref();
    const goodsDetailData = common_vendor.ref();
    common_vendor.onLoad((options2) => {
      goodsId.value = options2.id;
      goodsTitle.value = options2.goodsTitle;
      goodsPrice.value = options2.goodsPrice;
      goodsPicture.value = options2.goodsPicture;
      console.log(options2);
    });
    common_vendor.onMounted(() => {
      api_detail.goodsDetail(goodsId.value).then((res) => {
        console.log(res);
        swiperItems.value = res.data.rotationImageUrl.map((item, index) => {
          return {
            imgURL: "http://140.143.139.167" + item,
            id: index + 1
          };
        });
        tempSkuList.value = res.data.specificationsTable.map((item) => {
          return {
            "_id": item.id,
            "goods_id": item.goodsId,
            "goods_name": item.specificationsName,
            "image": goodsPicture.value,
            "price": item.specificationsPreferentialPrice * 100,
            "sku_name_arr": [item.specificationsName],
            "stock": item.specificationsInventory
          };
        });
        tempSpecList.value = res.data.specificationsTable.map((item) => {
          return {
            name: item.specificationsName
          };
        });
        goodsDetailData.value = {
          "_id": goodsId.value,
          "name": goodsTitle.value,
          "goods_thumb": res.data.rotationImageUrl[0],
          "sku_list": tempSkuList.value,
          "spec_list": [{
            "list": tempSpecList.value,
            "name": "规格"
          }]
        };
      });
    });
    const customButtonGroup = common_vendor.ref([
      {
        text: "加入购物车",
        backgroundColor: "linear-gradient(90deg,#337ecc,#79bbff)",
        color: "#ffffff"
      }
    ]);
    const options = common_vendor.ref([{
      icon: "cart",
      text: "购物车",
      info: 0
    }]);
    const instructionPopup = common_vendor.ref();
    const instructionOpen = () => {
      instructionPopup.value.open();
    };
    const instructionClose = () => {
      instructionPopup.value.close();
    };
    const servicePopup = common_vendor.ref();
    const serviceOpen = () => {
      servicePopup.value.open();
    };
    const serviceClose = () => {
      servicePopup.value.close();
    };
    const addToShopCartSKU = common_vendor.ref({
      selectArr: []
    });
    const selectArrText = common_vendor.computed(() => {
      return addToShopCartSKU.value.selectArr.join(" ").trim() || "请选择规格";
    });
    const isShowSKU = common_vendor.ref(false);
    const addToShopCart = () => {
      isShowSKU.value = true;
    };
    const handleAddCart = (e) => {
      console.log(e);
    };
    const toShopCar = () => {
      common_vendor.index.switchTab({ url: "/pages/shopcart/shopcart" });
    };
    const current = common_vendor.ref();
    const onPreviewImage = (url) => {
      common_vendor.index.previewImage({
        urls: swiperItems.value.map((item) => item.imgURL),
        current: url
      });
    };
    const swiperChange = (e) => {
      current.value = e.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "商品详情"
        }),
        b: common_vendor.f(swiperItems.value, (item, k0, i0) => {
          return {
            a: item.imgURL,
            b: common_vendor.o(($event) => onPreviewImage(item.url), item.id),
            c: item.id
          };
        }),
        c: common_vendor.o(swiperChange),
        d: common_vendor.p({
          mode: "default",
          current: current.value,
          info: swiperItems.value
        }),
        e: common_vendor.t("￥" + goodsPrice.value),
        f: common_vendor.t(goodsTitle.value),
        g: common_vendor.o(serviceClose),
        h: common_vendor.sr(servicePopup, "22e2c784-2", {
          "k": "servicePopup"
        }),
        i: common_vendor.p({
          type: "bottom"
        }),
        j: common_vendor.o(serviceOpen),
        k: common_vendor.t(common_vendor.unref(selectArrText)),
        l: common_vendor.sr(addToShopCartSKU, "22e2c784-3", {
          "k": "addToShopCartSKU"
        }),
        m: common_vendor.o(handleAddCart),
        n: common_vendor.o(($event) => isShowSKU.value = $event),
        o: common_vendor.p({
          ["add-cart-background-color"]: "#337ecc",
          ["price-color"]: "#cf4444",
          mode: 2,
          ["actived-style"]: {
            backgroundColor: "#337ecc40",
            border: "1px solid #337ecc",
            color: "#337ecc"
          },
          localdata: goodsDetailData.value,
          modelValue: isShowSKU.value
        }),
        p: common_vendor.o(addToShopCart),
        q: common_vendor.o(instructionClose),
        r: common_vendor.sr(instructionPopup, "22e2c784-4", {
          "k": "instructionPopup"
        }),
        s: common_vendor.p({
          type: "bottom"
        }),
        t: common_vendor.o(instructionOpen),
        v: common_vendor.unref(safeAreaInsets).top + 46 + "px",
        w: common_vendor.o(toShopCar),
        x: common_vendor.o(addToShopCart),
        y: common_vendor.p({
          options: options.value,
          fill: true,
          ["button-group"]: customButtonGroup.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/goodsDetail/goodsDetail.vue"]]);
wx.createPage(MiniProgramPage);
