"use strict";
const common_vendor = require("../../common/vendor.js");
const api_membrane = require("../../api/membrane.js");
const api_kind = require("../../api/kind.js");
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
  __name: "membraneCategory",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const activeIndex = common_vendor.ref(0);
    const title = common_vendor.ref();
    const kindname = common_vendor.ref();
    const categoryId = common_vendor.ref();
    common_vendor.onLoad((options) => {
      title.value = options.title;
      kindname.value = options.kindname;
    });
    const categoryList = common_vendor.ref([]);
    const subCategoryList = common_vendor.ref([]);
    const getCategoryList = () => {
      api_kind.getKind(kindname.value).then((res) => {
        if (res.data) {
          console.log(res);
          categoryList.value = res.data.map((item) => {
            return {
              name: item.sonKind,
              id: item.id
            };
          });
          categoryId.value = categoryList.value[0].id;
          getSubCategoryList(categoryList.value[0].id, 0);
        }
      });
    };
    const getSubCategoryList = (id, index) => {
      console.log(id, index);
      activeIndex.value = index;
      categoryId.value = id;
      api_membrane.getCategory(id).then((res) => {
        console.log(res);
        subCategoryList.value = res.data.map((item) => {
          return {
            picture: "http://140.143.139.167" + item.headimage,
            id: item.id,
            price: item.minprice || item.maxprice,
            name: item.name
          };
        });
        console.log(subCategoryList.value);
      });
    };
    const searchValue = common_vendor.ref();
    const filterSubCategoryList = common_vendor.computed(() => {
      return subCategoryList.value.filter(
        (data) => !searchValue.value || data.name.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    });
    common_vendor.onMounted(() => {
      getCategoryList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: title.value + "分类"
        }),
        b: common_vendor.o(($event) => searchValue.value = $event),
        c: common_vendor.p({
          radius: "5",
          placeholder: "搜索车型",
          clearButton: "auto",
          cancelButton: "none",
          modelValue: searchValue.value
        }),
        d: common_vendor.f(categoryList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id,
            c: index === activeIndex.value ? 1 : "",
            d: common_vendor.o(($event) => getSubCategoryList(item.id, index), item.id)
          };
        }),
        e: `/pages/membraneGoods/membraneGoods?categoryId=${categoryId.value}`,
        f: common_vendor.f(common_vendor.unref(filterSubCategoryList), (goods, k0, i0) => {
          return {
            a: goods.picture,
            b: common_vendor.t(goods.name),
            c: common_vendor.t(goods.price),
            d: goods.id,
            e: `/pages/goodsDetail/goodsDetail?id=${goods.id}&goodsTitle=${goods.name}&goodsPrice=${goods.price}&goodsPicture=${goods.picture}`
          };
        }),
        g: common_vendor.unref(safeAreaInsets).top + 46 + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/membraneCategory/membraneCategory.vue"]]);
wx.createPage(MiniProgramPage);
