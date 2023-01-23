import { createContext, useEffect, useReducer } from "react";
import { AuthState, AuthReducer, initialState } from "../reducers/AuthReducer";
import { api } from "../utils/api";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext<AuthState>(initialState);

export const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.token));
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state]);

  const createDefaultLists = async () => {
  try {
    const watchlist = {
      name: 'Watchlist',
      description: 'Movies I need to watch'
    };
    const watched = {
      name: 'Watched',
      description: 'Movies I have watched'
    };
    const liked = {
      name: 'Liked',
      description: 'Movies I like'
    };
    await api.post('/lists', watchlist);
    await api.post('/lists', watched);
    await api.post('/lists', liked);
  } catch (err) {
    console.log(err)
  }
};

  const loadUser = async () => {
    try {
      const res = await api.get("/auth");

      console.log(res.data);
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  const login = async (email: string, password: string) => {
    const loginPayload = { email, password };
    try {
      const res = await api.post("/auth", loginPayload);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      return res.data;
    } catch (err: any) {
      dispatch({
        type: "LOGIN_ERROR",
        error: err.response.data.errors,
      });
    }
  };

  const register = async (registerPayload: any) => {
    try {
      const res = await api.post("/users", registerPayload);

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });
      createDefaultLists()
      setAuthToken(res.data.token);
    } catch (err: any) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => console.log(error.errorMessage));
      }

      dispatch({
        type: "REGISTER_FAIL",
      });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: false,
        isAuthenticated: state.isAuthenticated,
        errorMessage: "",
        login: login,
        logout: logout,
        register: register,
        loadUser: loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
