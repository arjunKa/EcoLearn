import axios from "axios";
import { API_BASE_URL } from "../config/appConfig";

const AxiosInstance = axios.create({
  baseURL: API_BASE_URL || undefined,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default AxiosInstance;
