"use strict";
const utils_http = require("../utils/http.js");
const carBrandList = () => {
  return utils_http.http({
    method: "GET",
    url: "/user/brandList"
  });
};
const carSeriesList = (dictValue) => {
  return utils_http.http({
    method: "GET",
    url: `/user/selectBrand?dictValue=${dictValue}`
  });
};
const updatePartList = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/refit/fitpartByCarid/${id}`
  });
};
const getCategory = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/user/productkind/${id}`
  });
};
exports.carBrandList = carBrandList;
exports.carSeriesList = carSeriesList;
exports.getCategory = getCategory;
exports.updatePartList = updatePartList;
