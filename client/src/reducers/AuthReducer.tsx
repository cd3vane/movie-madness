export type AuthState = {
  user: string;
  token: string;
  loading: boolean;
  isAuthenticated: boolean;
  errorMessage: string;
  login: any;
  logout: any;
  register: any;
  loadUser: any;
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
  user: JSON.parse(localStorage.getItem("user") || '""'),
  token: JSON.parse(localStorage.getItem("token") || '""'),
  loading: true,
  isAuthenticated: false,
  errorMessage: "",
  login: () => {},
  logout: () => {},
  register: () => {},
  loadUser: () => {},
};

export const AuthReducer = (initialState: AuthState, action: ReducerAction) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...initialState,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload,
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        ...action.payload,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload,
        loading: false,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      return {
        ...initialState,
        loading: false,
        isAuthenticated: false,
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
