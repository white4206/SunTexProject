"use strict";
const common_vendor = require("../../common/vendor.js");
const api_home = require("../../api/home.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  (_easycom_uni_swiper_dot2 + _easycom_uni_title2)();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
if (!Math) {
  (common_vendor.unref(CustomNavBar) + _easycom_uni_swiper_dot + _easycom_uni_title)();
}
const CustomNavBar = () => "./components/CustomNavbar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const swiperItems = common_vendor.ref();
    const getSwiperImg = () => {
      api_home.swiperImg().then((res) => {
        console.log(res);
        swiperItems.value = res.data;
      });
    };
    const current = common_vendor.ref();
    const membraneItems = common_vendor.ref([
      { title: "窗膜", imgURL: "../../static/images/fenestratedMembrane.png", id: 1, kindname: "WindowFilm" },
      { title: "漆面保护膜", imgURL: "../../static/images/lacquerProtectiveMembrane.png", id: 2, kindname: "LacquerProtectiveFilm" },
      { title: "改色膜", imgURL: "../../static/images/colorChangeMembrane.png", id: 3, kindname: "ColorChangeFilm" },
      { title: "家居膜", imgURL: "../../static/images/homeProtectorMembrane.png", id: 4, kindname: "HomeScreenProtector" }
    ]);
    const carServiceItems = common_vendor.ref([
      { title: "新能源专区", imgURL: "../../static/images/maintenance.png", id: 1, navigator: "/pages/updateCategory/updateCategory?title=新能源专区", kindname: "NewEnergyZone" },
      { title: "原厂改装专区", imgURL: "../../static/images/maintenance.png", id: 2, navigator: "/pages/updateCategory/updateCategory?title=原厂改装专区", kindname: "OriginalModificationArea" },
      { title: "维修保养专区", imgURL: "../../static/images/maintenance.png", id: 3, navigator: "/pages/maintenancePage/maintenancePage?title=维修保养专区", kindname: "MaintenanceArea" }
    ]);
    const swiperChange = (e) => {
      current.value = e.detail.current;
    };
    common_vendor.onMounted(() => {
      getSwiperImg();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(swiperItems.value, (item, k0, i0) => {
          return {
            a: "http://140.143.139.167" + item.imageUrl,
            b: item.id
          };
        }),
        b: common_vendor.o(swiperChange),
        c: common_vendor.p({
          mode: "default",
          current: current.value,
          info: swiperItems.value
        }),
        d: common_vendor.p({
          type: "h3",
          title: "膜类专区"
        }),
        e: common_vendor.f(membraneItems.value, (item, k0, i0) => {
          return {
            a: item.imgURL,
            b: common_vendor.t(item.title),
            c: item.id,
            d: `/pages/membraneCategory/membraneCategory?title=${item.title}&kindname=${item.kindname}`
          };
        }),
        f: common_vendor.p({
          type: "h3",
          title: "汽车服务专区"
        }),
        g: common_vendor.f(carServiceItems.value, (item, k0, i0) => {
          return {
            a: item.imgURL,
            b: common_vendor.t(item.title),
            c: item.navigator + `&kindname=${item.kindname}`,
            d: item.id
          };
        }),
        h: common_vendor.p({
          type: "h3",
          title: ""
        }),
        i: 2 * common_vendor.unref(safeAreaInsets).top + 240 + "rpx"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
