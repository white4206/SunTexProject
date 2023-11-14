"use strict";
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_member = require("../stores/modules/member.js");
const baseURL = "http://140.143.139.167:8001";
const httpInterceptor = {
  // 拦截前触发
  invoke(options) {
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    options.timeout = 1e4;
    options.header = {
      ...options,
      "source-client": "miniapp"
    };
    const memberStore = stores_modules_member.useMemberStore();
    const token = memberStore.profile.token;
    if (token) {
      options.header.Authorization = token;
    }
  }
};
common_vendor.index.addInterceptor("request", httpInterceptor);
common_vendor.index.addInterceptor("uploadFile", httpInterceptor);
const http = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      ...options,
      // 响应成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          const memberStore = stores_modules_member.useMemberStore();
          memberStore.clearProfile();
          common_vendor.index.navigateTo({ url: "/pages/index/index" });
          reject(res);
        } else {
          console.log(res);
          common_vendor.index.showToast({
            title: res.data.msg || "请求错误",
            icon: "error",
            mask: true
          });
        }
      },
      fail(err) {
        console.log(err);
        common_vendor.index.showToast({
          title: "网络错误",
          icon: "error",
          mask: true
        });
        reject(err.data);
      }
    });
  });
};
exports.http = http;
