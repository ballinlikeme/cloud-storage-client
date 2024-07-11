import axios from "axios";

export const $host = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
});
