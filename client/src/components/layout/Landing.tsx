import { Fragment, useContext } from "react";
import { api } from "../../utils/api";
import { AlertContext } from "../../context/AlertContext";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "./Spinner";

function Landing() {
  const { loading, currentUser, logout } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const deleteAccount = async () => {
    try {
      await api.delete("/profile");

      logout();
      setAlert("Your account has been permanently deleted", "error");
    } catch (err) {
      setAlert("Error deleting your shiz", "error");
    }
  };

  return (
    <Fragment>
      {loading || currentUser === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>This is the signed in version my boi</h1>
          <button
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => deleteAccount()}
            id="delete"
          >
            {" "}
            Delete Account{" "}
          </button>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Landing;
