

export type AuthState = {
  currentUser: any;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean | null;
  errorMessage: string;
  login: any;
  logout: any;
  register: any;
  loadUser: any;
};

export const initialState: AuthState = {
  currentUser: localStorage.getItem("user"),
  token: localStorage.getItem("token"),
  loading: true,
  isAuthenticated: !!localStorage.getItem("token") ? false : true,
  errorMessage: "",
  login: () => {},
  logout: () => {},
  register: () => {},
  loadUser: () => {},
};

type ReducerAction =
  | { type: "USER_LOADED"; payload: any }
  | { type: "AUTH_ERROR" }
  | { type: "LOGIN_SUCCESS"; payload: any }
  | { type: "REGISTER_SUCCESS"; payload: any }
  | { type: "REGISTER_FAIL" }
  | { type: "LOGOUT" }
  | { type: "ACCOUNT_DELETED" }
  | { type: "LOGIN_ERROR"; error: string };

export const AuthReducer = (state: AuthState, action: ReducerAction) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentUser: action.payload,
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...action.payload,
        currentUser: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case "ACCOUNT_DELETED":
    case "AUTH_ERROR":
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        token: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
