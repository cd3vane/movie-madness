import { useContext } from "react";
import { api } from "../../utils/api";
import { AlertContext } from "../../context/AlertContext";
import { AuthContext } from "../../context/AuthContext";

function Landing() {
  const { isAuthenticated } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const deleteAccount = () => async () => {
    console.log('pressing it')
    try {
      await api.delete("/profile");

      setAlert("Your account has been permanently deleted", "error");
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Welcome to the signed in version my password knowing friend
        </h1>
        <div className="my-2">
          <button type="button" id="delete" className="btn btn-danger" onClick={deleteAccount}>
            Delete My Account
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Welcome to Movie Madness
        </h1>
      </div>
    );
  }
}

export default Landing;
