import { http } from "../utils/http";

export const swiperImg = () => {
  return http({
    method: "GET",
    url: "/user/rotation",
  });
};
