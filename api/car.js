import { http } from "../utils/http";

export const carBrandList = () => {
  return http({
    method: "GET",
    url: "/user/brandList",
  });
};
export const selectBrand = (brandName) => {
  return http({
    method: "GET",
    url: `/user/selectBrand`,
    params: {
      brandName: brandName,
    },
  });
};
