import { http } from "../utils/http";

export const getKind = (kindname) => {
  return http({
    method: "GET",
    url: `/user/sonmenu/${kindname}`,
  });
};