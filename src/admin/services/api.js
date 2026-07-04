import axios from "axios";

const api = axios.create({
  baseURL: "https://darkorchid-curlew-311953.hostingersite.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;