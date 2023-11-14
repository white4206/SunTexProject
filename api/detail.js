import { http } from "../utils/http";

export const goodsDetail = (partId) => {
  return http({
    method: "GET",
    url: `/user/partdetail/${partId}`,
  });
};
