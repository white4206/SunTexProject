"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
require("./stores/modules/member.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/shopcart/shopcart.js";
  "./pages/user/user.js";
  "./pages/membraneCategory/membraneCategory.js";
  "./pages/membraneGoods/membraneGoods.js";
  "./pages/goodsDetail/goodsDetail.js";
  "./pages/updateCategory/updateCategory.js";
  "./pages/updateDetail/updateDetail.js";
  "./pages/updateCaseDetail/updateCaseDetail.js";
  "./pages/maintenancePage/maintenancePage.js";
  "./pages/addYourCarPage/addYourCarPage.js";
  "./pages/maintenanceGoods/maintenanceGoods.js";
  "./pages/JustForTest/JustForTest.js";
}
const _sfc_main = {};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/white_/CodeSpace/HbuilderProjects/SunTexProject/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(stores_index.pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
