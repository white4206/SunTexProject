"use strict";
const utils_http = require("../utils/http.js");
const updateCase = (carId) => {
  return utils_http.http({
    method: "GET",
    url: `/refit/backcase/${carId}`
  });
};
const updateCaseDetail = (caseid) => {
  return utils_http.http({
    method: "GET",
    url: `/refit/casedetails/${caseid}`
  });
};
exports.updateCase = updateCase;
exports.updateCaseDetail = updateCaseDetail;
