import { Credentials } from "../types";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") || "").user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") || "").auth_token
  : "";

export type AuthState = {
  userDetails: string;
  token: string;
  loading: boolean;
  isAuthenticated: boolean;
  errorMessage: string;
  login: any;
  logout: any;
  register: any;
};

type ReducerAction =
  | { type: "USER_LOADED"; payload: any }
  | { type: "AUTH_ERROR" }
  | { type: "LOGIN_SUCCESS"; payload: any }
  | { type: "REGISTER_SUCCESS"; payload: any }
  | { type: "REGISTER_FAIL" }
  | { type: "LOGOUT" }
  | { type: "LOGIN_ERROR"; error: string };

export const initialState: AuthState = {
  userDetails: "" || user,
  token: "" || token,
  loading: true,
  isAuthenticated: false,
  errorMessage: "",
  login: () => {},
  logout: () => {},
  register: () => {}
};

export const AuthReducer = (initialState: AuthState, action: ReducerAction) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...initialState,
        isAuthenticated: true,
        userLoading: false,
        user: action.payload
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        ...action.payload,
        token: action.payload.token,
        loading: false,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      return {
        ...initialState,
        loading: false,
        user: "",
        token: "",
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};
