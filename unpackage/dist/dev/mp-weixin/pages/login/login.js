"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const code = "";
    common_vendor.onLoad(() => {
      common_vendor.wx$1.login().then((res) => code = res.code);
    });
    const onGetphonenumber = (e) => {
      const emcrytedData = e.detail.emcrytedData;
      const iv = e.detail.iv;
      console.log(emcrytedData, iv);
      api_login.wechatMinAppLogin({
        code,
        emcrytedData,
        iv
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetphonenumber),
        b: common_vendor.o(() => {
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
