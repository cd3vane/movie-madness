import { createContext, useEffect, useReducer } from "react";
import { AuthState, AuthReducer, initialState } from "../reducers/AuthReducer";
import { api } from "../utils/api";

export const AuthContext = createContext<AuthState>(initialState);

export const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state]);

  const login = async (email: string, password: string) => {
    const loginPayload = { email, password };
    dispatch({ type: "REQUEST_LOGIN", payload: loginPayload });
    try {
      const res = await api.post("/auth", loginPayload);
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err: any) {
      dispatch({
        type: "LOGIN_ERROR",
        error: err.response.data.errors,
      });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        userDetails: state.userDetails,
        token: state.token,
        loading: false,
        isAuthenticated: state.token ? true : false,
        errorMessage: "",
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
