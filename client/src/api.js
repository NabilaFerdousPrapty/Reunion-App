import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const api = axios.create({ baseURL: `${API_BASE}/api` });
export const fileBase = API_BASE; // used to prefix /uploads/... paths returned by the server

export function adminHeaders(adminKey) {
  return { headers: { "x-admin-key": adminKey } };
}
