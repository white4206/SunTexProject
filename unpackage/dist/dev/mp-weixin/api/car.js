"use strict";
const utils_http = require("../utils/http.js");
const carBrandList = () => {
  return utils_http.http({
    method: "GET",
    url: "/user/brandList"
  });
};
const selectBrand = (brandName) => {
  return utils_http.http({
    method: "GET",
    url: `/user/selectBrand`,
    params: {
      brandName
    }
  });
};
exports.carBrandList = carBrandList;
exports.selectBrand = selectBrand;
