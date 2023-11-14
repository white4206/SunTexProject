"use strict";
const common_vendor = require("../../common/vendor.js");
const api_kind = require("../../api/kind.js");
const api_maintenance = require("../../api/maintenance.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Math) {
  CustomNavbar();
}
const CustomNavbar = () => "../../components/CustomNavbar/CustomNavbar.js";
const _sfc_main = {
  __name: "maintenancePage",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const title = common_vendor.ref();
    const kindname = common_vendor.ref();
    const maintenanceItems = common_vendor.ref([]);
    common_vendor.ref();
    common_vendor.onLoad((options) => {
      title.value = options.title;
      kindname.value = options.kindname;
    });
    const recommendedItems = common_vendor.ref([]);
    const getCategoryList = () => {
      api_kind.getKind(kindname.value).then((res) => {
        maintenanceItems.value = res.data.map((item) => {
          return {
            imgURL: "http://140.143.139.167" + item.headImage,
            title: item.sonKind,
            id: item.id
          };
        });
        getSubCategoryList();
      });
    };
    const getSubCategoryList = () => {
      console.log(maintenanceItems.value[0].id);
      api_maintenance.getCategory(maintenanceItems.value[0].id).then((res) => {
        console.log(res);
        recommendedItems.value = res.data.map((item) => {
          return {
            imgURL: "http://140.143.139.167" + item.headimage,
            id: item.id,
            price: item.minprice || item.maxprice,
            title: item.name
          };
        });
        console.log(recommendedItems.value);
      });
    };
    common_vendor.onMounted(() => {
      getCategoryList();
    });
    const isAdd = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: title.value
        }),
        b: common_vendor.t(isAdd.value ? "路虎揽胜" : "您还未添加车辆"),
        c: common_vendor.f(maintenanceItems.value, (item, k0, i0) => {
          return {
            a: item.imgURL,
            b: common_vendor.t(item.title),
            c: `/pages/maintenanceGoods/maintenanceGoods?categoryId=${item.id}`,
            d: item.id
          };
        }),
        d: common_vendor.f(recommendedItems.value, (item, k0, i0) => {
          return {
            a: item.imgURL,
            b: common_vendor.t(item.title),
            c: common_vendor.t("￥" + item.price),
            d: `/pages/goodsDetail/goodsDetail?id=${item.id}&goodsTitle=${item.title}&goodsPrice=${item.price}&goodsPicture=${item.imgURL}`,
            e: item.id
          };
        }),
        e: common_vendor.unref(safeAreaInsets).top + 46 + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/maintenancePage/maintenancePage.vue"]]);
wx.createPage(MiniProgramPage);
