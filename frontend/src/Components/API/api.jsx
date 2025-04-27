import axios from "axios";

const API_BASE_URL = "https://buzz-my-day-app-xaqh.onrender.com/";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

export default api;
