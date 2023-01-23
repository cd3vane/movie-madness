import { api } from "./api";

const setAuthToken = (token: string) => {
  if (token) {
    console.log(token)
    api.defaults.headers["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    console.log("deleting header");
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
