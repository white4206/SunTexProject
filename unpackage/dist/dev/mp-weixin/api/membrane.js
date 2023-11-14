"use strict";
const utils_http = require("../utils/http.js");
const getCategory = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/user/productkind/${id}`
  });
};
exports.getCategory = getCategory;
