import axios from "axios";
import { logout, getToken } from "../auth";

// configurações de chamada de api
var server = "https://ccr.berap.com.br/api/";

export const api = axios.create({
  baseURL: server,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.data?.status == "Token is Expired") {
      alert("Sua sessão expirou, faça login novamente");
      logout();
    }

    if (error?.response?.data?.status == "Token is Invalid") {
      alert("Credenciais inválidas, faça login novamente");
      logout();
    }

    return Promise.reject(error);
  }
);
