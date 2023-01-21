import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/auth/Login";
import Discover from "./components/movies/Discover";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="container mx-auto">
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
    </div>
  );
}

export default App;
