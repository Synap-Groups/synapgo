import axios from "axios";
import { ENV } from "./env";

export const api = axios.create({
    baseURL: ENV.BACKEND_URL || 'http://localhost:3000',
    withCredentials: false,
})