"use strict";
const utils_http = require("../utils/http.js");
const swiperImg = () => {
  return utils_http.http({
    method: "GET",
    url: "/user/rotation"
  });
};
exports.swiperImg = swiperImg;
