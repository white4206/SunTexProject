"use strict";
const common_vendor = require("../../common/vendor.js");
const api_update = require("../../api/update.js");
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
  __name: "updateCategory",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const activeIndex = common_vendor.ref(0);
    const title = common_vendor.ref();
    const kindname = common_vendor.ref();
    common_vendor.onLoad((options) => {
      title.value = options.title;
      kindname.value = options.kindname;
      console.log(kindname.value);
    });
    const categoryList = common_vendor.ref([]);
    const subCategoryList = common_vendor.ref([]);
    const getCategoryList = () => {
      api_update.carBrandList().then((res) => {
        if (res.data) {
          console.log(res);
          categoryList.value = res.data.map((item) => {
            return {
              name: item.dictLabel,
              id: item.dictCode,
              value: item.dictValue
            };
          });
          getSubCategoryList(categoryList.value[0].value, 0);
        }
      });
    };
    const getSubCategoryList = (value, index) => {
      activeIndex.value = index;
      api_update.carSeriesList(value).then((res) => {
        console.log(res);
        subCategoryList.value = res.data.map((item) => {
          return {
            picture: "http://140.143.139.167" + item.logo,
            id: item.id,
            name: item.carSeries,
            kind: item.carKind
          };
        });
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
      return common_vendor.e({
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
            d: common_vendor.o(($event) => getSubCategoryList(item.value, index), item.id)
          };
        }),
        e: kindname.value === "OriginalModificationArea"
      }, kindname.value === "OriginalModificationArea" ? {
        f: common_vendor.f(common_vendor.unref(filterSubCategoryList), (goods, k0, i0) => {
          return common_vendor.e({
            a: goods.kind !== 0
          }, goods.kind !== 0 ? {
            b: goods.picture,
            c: common_vendor.t(goods.name),
            d: `/pages/updateDetail/updateDetail?updateId=${goods.id}`
          } : {}, {
            e: goods.id
          });
        })
      } : {}, {
        g: kindname.value === "NewEnergyZone"
      }, kindname.value === "NewEnergyZone" ? {
        h: common_vendor.f(common_vendor.unref(filterSubCategoryList), (goods, k0, i0) => {
          return common_vendor.e({
            a: goods.kind === 0
          }, goods.kind === 0 ? {
            b: goods.picture,
            c: common_vendor.t(goods.name),
            d: `/pages/updateDetail/updateDetail?updateId=${goods.id}`
          } : {}, {
            e: goods.id
          });
        })
      } : {}, {
        i: common_vendor.unref(safeAreaInsets).top + 46 + "px"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/updateCategory/updateCategory.vue"]]);
wx.createPage(MiniProgramPage);
