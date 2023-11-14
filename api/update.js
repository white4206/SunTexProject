import { http } from "../utils/http";

export const carBrandList = () => {
  return http({
    method: "GET",
    url: "/user/brandList",
  });
};
export const carSeriesList = (dictValue) => {
  return http({
    method: "GET",
    url: `/user/selectBrand?dictValue=${dictValue}`,
  });
};
export const carSelect = (params) => {
  return http({
    method: "GET",
    url: `/user/selectSeries`,
    params: params,
  });
};
export const newCarSeriesList = (brandName) => {
  return http({
    method: "GET",
    url: `/user/isnew/${brandName}`,
  });
};
export const updatePartList = (id) => {
  return http({
    method: "GET",
    url: `/refit/fitpartByCarid/${id}`,
  });
};
export const getCategory = (id) => {
  return http({
    method: "GET",
    url: `/user/productkind/${id}`,
  });
};