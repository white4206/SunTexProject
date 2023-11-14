"use strict";
const utils_http = require("../utils/http.js");
const goodsDetail = (partId) => {
  return utils_http.http({
    method: "GET",
    url: `/user/partdetail/${partId}`
  });
};
exports.goodsDetail = goodsDetail;
