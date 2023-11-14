"use strict";
const utils_http = require("../utils/http.js");
const getKind = (kindname) => {
  return utils_http.http({
    method: "GET",
    url: `/user/sonmenu/${kindname}`
  });
};
exports.getKind = getKind;
