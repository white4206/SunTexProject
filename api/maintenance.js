import { http } from "../utils/http";

export const getCategory = (id) => {
  return http({
    method: "GET",
    url: `/user/productkind/${id}`,
  });
};
