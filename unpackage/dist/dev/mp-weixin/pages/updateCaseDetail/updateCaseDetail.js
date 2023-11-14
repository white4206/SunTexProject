"use strict";
const common_vendor = require("../../common/vendor.js");
const api_case = require("../../api/case.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  (_easycom_uni_section2 + _easycom_uni_title2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
if (!Math) {
  (CustomNavbar + _easycom_uni_section + _easycom_uni_title)();
}
const CustomNavbar = () => "../../components/CustomNavbar/CustomNavbar.js";
const _sfc_main = {
  __name: "updateCaseDetail",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const title = common_vendor.ref();
    const id = common_vendor.ref();
    common_vendor.onLoad((options) => {
      title.value = options.title;
      id.value = options.id;
      console.log(id.value);
    });
    const caseDetail = common_vendor.ref();
    const caseImage = common_vendor.ref();
    const getUpdateCaseDetail = (id2) => {
      api_case.updateCaseDetail(id2).then((res) => {
        caseDetail.value = res.data.cases;
        caseImage.value = res.data.imageUrl;
      });
    };
    common_vendor.onMounted(() => {
      getUpdateCaseDetail(id.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "案例详情"
        }),
        b: common_vendor.p({
          title: title.value,
          ["sub-title"]: "预约电话:" + caseDetail.value.reservation,
          type: "line"
        }),
        c: common_vendor.p({
          titleColor: "#cf4444",
          title: "优惠价格:￥" + caseDetail.value.present,
          ["sub-title"]: "花费:￥" + caseDetail.value.original,
          type: "pointer"
        }),
        d: common_vendor.p({
          type: "h3",
          title: "改装效果:"
        }),
        e: common_vendor.f(caseImage.value, (item, k0, i0) => {
          return {
            a: "http://140.143.139.167" + item,
            b: item
          };
        }),
        f: common_vendor.p({
          type: "h3",
          title: "详细信息:"
        }),
        g: caseDetail.value.introduce,
        h: common_vendor.unref(safeAreaInsets).top + 46 + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/updateCaseDetail/updateCaseDetail.vue"]]);
wx.createPage(MiniProgramPage);
