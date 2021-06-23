import axios from "axios";

const api = axios.create({ baseURL: "https://ec-qbo.herokuapp.com/" });

export async function getBanners() {
  const { data } = await api.get("/banners");

  return data;
}

export async function getHomeCategories() {
  const { data } = await api.get("/categories");

  return data;
}

export async function getOfertas() {
  const { data } = await api.get("/oferts");

  return data;
}

export async function getPopulares() {
  const { data } = await api.get("/populars");

  return data;
}
