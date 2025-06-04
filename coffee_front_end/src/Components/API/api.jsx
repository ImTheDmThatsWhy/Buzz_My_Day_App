import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_ENDPOINT;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

export default api;
