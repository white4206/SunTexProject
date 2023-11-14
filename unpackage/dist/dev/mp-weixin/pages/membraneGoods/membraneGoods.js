"use strict";
const common_vendor = require("../../common/vendor.js");
const api_membrane = require("../../api/membrane.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (CustomNavbar + _easycom_uni_search_bar)();
}
const CustomNavbar = () => "../../components/CustomNavbar/CustomNavbar.js";
const _sfc_main = {
  __name: "membraneGoods",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const title = common_vendor.ref();
    const categoryId = common_vendor.ref();
    const goodsList = common_vendor.ref([]);
    common_vendor.onLoad((options) => {
      title.value = options.title;
      categoryId.value = options.categoryId;
    });
    const getCategoryList = (id) => {
      api_membrane.getCategory(id).then((res) => {
        console.log(res);
        goodsList.value = res.data.map((item) => {
          return {
            imgURL: "http://140.143.139.167" + item.headimage,
            id: item.id,
            price: parseInt(item.minprice),
            title: item.name,
            desc: item.desc || "加入购物车，到店安装..."
          };
        });
        console.log(goodsList.value);
      });
    };
    common_vendor.onMounted(() => {
      getCategoryList(categoryId.value);
    });
    const searchValue = common_vendor.ref();
    const filterGoodsList = common_vendor.computed(() => {
      return goodsList.value.filter(
        (data) => !searchValue.value || data.title.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    });
    const currentIndex = common_vendor.ref(1);
    const isAscending = common_vendor.ref(false);
    const handleSelected = () => {
      currentIndex.value = 2;
      isAscending.value = !isAscending.value;
      goodsList.value = goodsList.value.sort((start, next) => {
        if (isAscending.value)
          return start.price - next.price;
        else
          return next.price - start.price;
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: title.value
        }),
        b: common_vendor.o(($event) => searchValue.value = $event),
        c: common_vendor.p({
          radius: "100",
          cancelButton: "none",
          radius: 5,
          placeholder: "请输入搜索内容",
          bgColor: "#ffffff",
          modelValue: searchValue.value
        }),
        d: currentIndex.value === 1 ? 1 : "",
        e: common_vendor.o(($event) => currentIndex.value = 1),
        f: currentIndex.value !== 2
      }, currentIndex.value !== 2 ? {} : {}, {
        g: currentIndex.value === 2 && isAscending.value
      }, currentIndex.value === 2 && isAscending.value ? {} : {}, {
        h: currentIndex.value === 2 && !isAscending.value
      }, currentIndex.value === 2 && !isAscending.value ? {} : {}, {
        i: currentIndex.value === 2 ? 1 : "",
        j: common_vendor.o(handleSelected),
        k: currentIndex.value === 3 ? 1 : "",
        l: common_vendor.o(($event) => currentIndex.value = 3),
        m: common_vendor.unref(safeAreaInsets).top + 46 + "px",
        n: common_vendor.f(common_vendor.unref(filterGoodsList), (item, k0, i0) => {
          return {
            a: item.imgURL,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.desc),
            d: common_vendor.t("￥" + item.price),
            e: item.id,
            f: `/pages/goodsDetail/goodsDetail?id=${item.id}&goodsTitle=${item.title}&goodsPrice=${item.price}&goodsPicture=${item.imgURL}`
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/membraneGoods/membraneGoods.vue"]]);
wx.createPage(MiniProgramPage);
