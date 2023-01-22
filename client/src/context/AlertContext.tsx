import { createContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import {
  AlertState,
  AlertReducer,
  initialState,
} from "../reducers/AlertReducer";

export const AlertContext = createContext<AlertState>(initialState);

export const AlertProvider = (props: any) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  useEffect(() => {}, []);

  const setAlert = (msg: string, alertType: string) => {
    const timeout = 3000;
    const id = uuid();
    dispatch({
      type: "SET_ALERT",
      payload: { msg, alertType, id },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert: setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
