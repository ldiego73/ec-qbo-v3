import { api } from "../../../api";

export async function getBanners() {
  const { data } = await api.get("/banners");

  return data;
}
