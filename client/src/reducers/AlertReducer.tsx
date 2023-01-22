interface Alert {
  msg: string;
  alertType: string;
  id: string;
}

export type AlertState = {
  alerts: Alert[];
  setAlert: (arg0: string, arg1: string) => void;
};

type ReducerAction =
  | { type: "SET_ALERT"; payload: any }
  | { type: "REMOVE_ALERT"; payload: string };

export const initialState: AlertState = {
  alerts: [],
  setAlert: () => {},
};

export const AlertReducer = (state: AlertState, action: ReducerAction) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        alerts: state.alerts.filter(
          (alert: Alert) => alert.id !== action.payload
        ),
      };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};
