import { useContext } from "react";
import { AlertContext } from "../../context/AlertContext";

const Alert = () => {
  const { alerts } = useContext(AlertContext);
  return (
    <>
      {alerts &&
        alerts.map((alert: any) => (
          <div
            key={alert.id}
            id="alert"
            className={`alert alert-${alert.alertType}`}
          >
            {alert.msg}
          </div>
        ))}
    </>
  );
};

export default Alert;
