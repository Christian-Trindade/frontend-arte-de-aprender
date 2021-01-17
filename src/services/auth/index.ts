import { api } from "../api";
export const TOKEN_KEY = "@Arte_de_aprender";

export const isAuthenticated = () =>
  window.localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => window.localStorage.getItem(TOKEN_KEY);
export const getUserData = () => window.localStorage.getItem("user") || "";

export const login = async (params: object) => {
  let Issuccess: boolean = false;

  await api
    .post("login", params)
    .then(async (response) => {
      window.localStorage.setItem(TOKEN_KEY, response.data.access_token);
      Issuccess = true;
      await getServerUserData();
    })
    .catch((error) => {
      console.error(error);
    });

  return Issuccess;
};

export const create = async (params: object) => {
  let Issuccess: boolean = false;

  await api
    .post("create", params)
    .then(async (response) => {
      window.localStorage.setItem(TOKEN_KEY, response.data.access_token);
      Issuccess = true;
      await getServerUserData();
    })
    .catch((error) => {
      console.error(error);
    });

  return Issuccess;
};

export const getServerUserData = async () => {
  await api
    .get("users/me")
    .then((response) => {
      window.localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem("user");
  window.location.reload();
};
