import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import { AuthProvider } from "./context/AuthContext";
import { AlertProvider } from "./context/AlertContext";
import Login from "./components/auth/Login";
import Discover from "./components/movies/Discover";
import Alert from "./components/layout/Alert";

function App() {
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
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
