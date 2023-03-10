import { api } from "./api";

const setAuthToken = (token: string) => {
  if (token) {
    console.log("setting token");
    api.defaults.headers["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    console.log("deleting header");
    delete api.defaults.headers["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
