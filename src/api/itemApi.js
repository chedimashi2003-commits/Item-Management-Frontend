import axios from "axios";

const getApiBaseUrl = () => {
  const configuredUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  const isLocalUrl = configuredUrl.startsWith("http://localhost") || configuredUrl.startsWith("http://127.0.0.1");

  if (!isLocalUrl && configuredUrl.startsWith("http://")) {
    return configuredUrl.replace("http://", "https://");
  }

  return configuredUrl;
};

const API = axios.create({
  baseURL: getApiBaseUrl(),
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;
