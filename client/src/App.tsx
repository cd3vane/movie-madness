import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { AlertProvider } from "./context/AlertContext";
import Login from "./components/auth/Login";
import Discover from "./components/movies/Discover";
import Alert from "./components/layout/Alert";
import Profile from "./components/profile/Profile";
import Profiles from "./components/profiles/Profiles";
import CreateProfile from "./components/auth/CreateProfile";
import setAuthToken from "./utils/setAuthToken";

function App() {
  const { loadUser, logout } = useContext(AuthContext);
  useEffect(() => {
    loadUser;
    // @ts-ignore
    var value = JSON.parse(localStorage.getItem("token"));
    if (!value) {
      console.log("token is empty");
      logout;
    } else {
      setAuthToken(localStorage.token);
    }
  }, []);
  return (
    <div className="App">
      <AlertProvider>
        <AuthProvider>
          <Router>
            <Navbar />
            <div className="container mx-auto">
              <Alert />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/account/dashboard" element={<Landing />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/create-profile" element={<CreateProfile />} />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
