import { http } from "../utils/http";

export const updateCase = (carId) => {
  return http({
    method: "GET",
    url: `/refit/backcase/${carId}`,
  });
};
export const updateCaseDetail = (caseid) => {
  return http({
    method: "GET",
    url: `/refit/casedetails/${caseid}`,
  });
};
