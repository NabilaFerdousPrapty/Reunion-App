import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Verify from "./pages/Verify";
import AdminDashboard from "./pages/AdminDashboard";
import logo from "./img/logo.png";

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-5 py-2.5 flex items-center justify-between gap-5 flex-wrap">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="College logo" className="w-11 h-11 object-contain" />
          <span className="flex flex-col leading-tight text-maroon font-bold text-sm">
            <span>Nawab Siraj Ud Daulah</span>
            <span>Government College, Natore</span>
          </span>
        </Link>

        <div className="flex items-center gap-5 flex-wrap flex-1 justify-center text-sm text-gray-800">
          <Link to="/" className="hover:text-maroon">Home</Link>
          <Link to="/#about" className="hover:text-maroon">About</Link>
          <Link to="/#schedule" className="hover:text-maroon">Event</Link>
          <Link to="/register" className="hover:text-maroon">Registration</Link>
          <Link to="/#schedule" className="hover:text-maroon">Schedule</Link>
          <Link to="/#gallery" className="hover:text-maroon">Gallery</Link>
          <Link to="/#contact" className="hover:text-maroon">Contact</Link>
        </div>

        <div className="flex items-center gap-3.5 shrink-0">
          {user ? (
            <>
              <span className="text-sm text-gray-600">Hi, {user.name.split(" ")[0]}</span>
              <button
                className="bg-maroon text-white font-semibold text-xs px-3.5 py-1.5 rounded-md hover:bg-maroon-dark"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:text-maroon">Log In</Link>
              <Link to="/signup">
                <button className="bg-maroon text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-maroon-dark">
                  Register Now &nbsp;👤
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="/verify/:alumniId" element={<Verify />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}