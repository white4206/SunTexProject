"use strict";
const common_vendor = require("../../common/vendor.js");
const api_case = require("../../api/case.js");
const api_update = require("../../api/update.js");
const api_kind = require("../../api/kind.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  _easycom_uni_segmented_control2();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (CustomNavbar + _easycom_uni_segmented_control)();
}
const CustomNavbar = () => "../../components/CustomNavbar/CustomNavbar.js";
const _sfc_main = {
  __name: "updateDetail",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const title = common_vendor.ref();
    const updateId = common_vendor.ref();
    const categoryId = common_vendor.ref();
    const barItems = common_vendor.ref(["案例", "改装"]);
    const current = common_vendor.ref(0);
    common_vendor.onLoad((options) => {
      title.value = options.title;
      updateId.value = options.updateId;
    });
    const onClickItem = (e) => {
      current.value = e.currentIndex;
    };
    const updateCases = common_vendor.ref();
    const getUpdateCategory = () => {
      api_kind.getKind("retrofitting").then((res) => {
        if (res.data) {
          categoryList.value = res.data.map((item) => {
            return {
              name: item.sonKind,
              id: item.id
            };
          });
          categoryId.value = categoryList.value[0].id;
          getUpdatePartList(categoryList.value[0].id, 0);
        }
      });
    };
    const getUpdateCase = (id) => {
      api_case.updateCase(id).then((res) => {
        if (res.data !== "无样例数据") {
          updateCases.value = res.data.map((item) => {
            return {
              title: item.title,
              caseImage: item.imageUrl,
              id: item.cases.id
            };
          });
        }
      });
    };
    const getUpdatePartList = (kindId, index) => {
      activeIndex.value = index;
      categoryId.value = kindId;
      api_update.getCategory(kindId).then((res) => {
        tempSubCategoryList.value = res.data.map((item) => {
          return {
            picture: "http://140.143.139.167" + item.headimage,
            id: item.id,
            price: item.minprice || item.maxprice,
            name: item.name
          };
        });
        api_update.updatePartList(updateId.value).then((res2) => {
          subCategoryList.value = [];
          res2.data.forEach((item) => {
            tempSubCategoryList.value.forEach((categoryItem) => {
              if (item.id === categoryItem.id)
                subCategoryList.value.push(categoryItem);
            });
          });
        });
      });
    };
    common_vendor.onMounted(() => {
      getUpdateCase(updateId.value);
      getUpdateCategory();
    });
    const categoryList = common_vendor.ref([]);
    const tempSubCategoryList = common_vendor.ref([]);
    const subCategoryList = common_vendor.ref([]);
    const activeIndex = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: title.value
        }),
        b: common_vendor.o(onClickItem),
        c: common_vendor.p({
          current: current.value,
          values: barItems.value,
          ["style-type"]: "button",
          ["active-color"]: "#337ecc"
        }),
        d: current.value === 0
      }, current.value === 0 ? {
        e: common_vendor.f(updateCases.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.f(item.caseImage, (imgURL, index, i1) => {
              return common_vendor.e({
                a: index < 3
              }, index < 3 ? {
                b: "http://140.143.139.167" + imgURL
              } : {});
            }),
            c: item,
            d: item.id,
            e: `/pages/updateCaseDetail/updateCaseDetail?title=${item.title}&id=${item.id}`
          };
        })
      } : {}, {
        f: current.value === 1
      }, current.value === 1 ? {
        g: common_vendor.f(categoryList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id,
            c: index === activeIndex.value ? 1 : "",
            d: common_vendor.o(($event) => getUpdatePartList(item.id, index), item.id)
          };
        }),
        h: common_vendor.f(subCategoryList.value, (goods, k0, i0) => {
          return {
            a: goods.picture,
            b: common_vendor.t(goods.name),
            c: common_vendor.t("￥" + goods.price),
            d: goods.id,
            e: `/pages/goodsDetail/goodsDetail?id=${goods.id}&goodsTitle=${goods.name}&goodsPrice=${goods.price}&goodsPicture=${goods.picture}`
          };
        })
      } : {}, {
        i: common_vendor.unref(safeAreaInsets).top + 46 + "px"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/updateDetail/updateDetail.vue"]]);
wx.createPage(MiniProgramPage);
