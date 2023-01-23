import { api } from "./api";

const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers["x-auth-token"] = token.slice(1, -1);
    localStorage.setItem("token", token);
  } else {
    console.log("deleting header");
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
