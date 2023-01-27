import { Fragment, useContext } from "react";
import { api } from "../../utils/api";
import { AlertContext } from "../../context/AlertContext";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "./Spinner";

function Landing() {
  const { loading, user } = useContext(AuthContext);
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

  return(
  <Fragment>
      {loading || user === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>This is the signed in version my boi</h1>
          </Fragment>)}
    </Fragment>
  )
  }


export default Landing;
