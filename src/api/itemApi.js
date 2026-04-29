import axios from "axios";

const getApiBaseUrl = () => {
  const defaultUrl = import.meta.env.DEV
    ? "http://localhost:5000/api"
    : "https://item-management-backend-production.up.railway.app/api";
  const configuredUrl = import.meta.env.VITE_API_URL || defaultUrl;
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
