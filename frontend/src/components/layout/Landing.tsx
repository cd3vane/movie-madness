import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Landing() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Welcome to the signed in version my password knowing friend
        </h1>
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
