import axios, { InternalAxiosRequestConfig } from "axios";

const $host = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
});

const $authHost = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
});

const authInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
