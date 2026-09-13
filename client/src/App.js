import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

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


/* =========================================================
   NAVBAR
========================================================= */

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate("/");
  };

  const scrollToSection = (section) => {
    closeMobileMenu();

    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

        <div className="max-w-[1200px] mx-auto px-4 sm:px-5">

          <div className="h-[70px] flex items-center justify-between">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2.5 min-w-0"
            >
              <img
                src={logo}
                alt="College logo"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0"
              />

              <span className="flex flex-col leading-tight text-maroon font-bold text-[11px] sm:text-sm">
                <span>Nawab Siraj Ud Daulah</span>
                <span>Government College, Natore</span>
              </span>
            </Link>


            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 ml-auto mr-7">

              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-maroon font-semibold"
                    : "text-gray-700 hover:text-maroon"
                }`}
              >
                Home
              </Link>

              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-gray-700 hover:text-maroon transition-colors"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("schedule")}
                className="text-sm font-medium text-gray-700 hover:text-maroon transition-colors"
              >
                Event
              </button>

              <Link
                to="/register"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/register"
                    ? "text-maroon font-semibold"
                    : "text-gray-700 hover:text-maroon"
                }`}
              >
                Registration
              </Link>

              <button
                onClick={() => scrollToSection("schedule")}
                className="text-sm font-medium text-gray-700 hover:text-maroon transition-colors"
              >
                Schedule
              </button>

              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm font-medium text-gray-700 hover:text-maroon transition-colors"
              >
                Gallery
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-gray-700 hover:text-maroon transition-colors"
              >
                Contact
              </button>

            </nav>


            {/* ================= DESKTOP AUTH ================= */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">

              {user ? (
                <>
                  <span className="text-sm text-gray-600">
                    Hi, {user.name?.split(" ")[0]}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="bg-maroon text-white font-semibold text-xs px-3.5 py-2 rounded-md hover:bg-maroon-dark transition"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-700 hover:text-maroon transition"
                  >
                    Log In
                  </Link>

                  <Link to="/signup">
                    <button
                      className="bg-maroon text-white font-semibold text-sm px-4 py-2.5 rounded-md hover:bg-maroon-dark transition"
                    >
                      Register Now
                      <span className="ml-1">👤</span>
                    </button>
                  </Link>
                </>
              )}

            </div>


            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-maroon hover:bg-gray-50 transition"
            >
              {mobileMenuOpen ? (
                /* Close icon */
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                /* Hamburger */
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>


          {/* ================= MOBILE MENU ================= */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">

              <nav className="flex flex-col">

                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-maroon"
                >
                  Home
                </Link>

                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-maroon"
                >
                  About
                </button>

                <button
                  onClick={() => scrollToSection("schedule")}
                  className="text-left px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-maroon"
                >
                  Event
                </button>

                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-maroon"
                >
                  Registration
                </Link>

                <button
                  onClick={() => scrollToSection("schedule")}
                  className="text-left px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-maroon"
                >
                  Schedule
                </button>

                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-maroon"
                >
                  Gallery
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-maroon"
                >
                  Contact
                </button>


                {/* ================= MOBILE AUTH ================= */}
                <div className="border-t border-gray-100 mt-2 pt-4">

                  {user ? (
                    <div className="flex flex-col gap-3">

                      <div className="px-3 text-sm text-gray-600">
                        Hi,{" "}
                        <span className="font-semibold text-maroon">
                          {user.name?.split(" ")[0]}
                        </span>
                      </div>

                      <button
                        onClick={handleLogout}
                        className="mx-3 bg-maroon text-white font-semibold text-sm py-2.5 rounded-md hover:bg-maroon-dark transition"
                      >
                        Log Out
                      </button>

                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">

                      <Link
                        to="/login"
                        onClick={closeMobileMenu}
                        className="mx-3 text-center border border-gray-300 text-gray-700 font-medium text-sm py-2.5 rounded-md hover:border-maroon hover:text-maroon transition"
                      >
                        Log In
                      </Link>

                      <Link
                        to="/signup"
                        onClick={closeMobileMenu}
                        className="mx-3"
                      >
                        <button
                          className="w-full bg-maroon text-white font-semibold text-sm py-2.5 rounded-md hover:bg-maroon-dark transition"
                        >
                          Register Now 👤
                        </button>
                      </Link>

                    </div>
                  )}

                </div>

              </nav>

            </div>
          )}

        </div>
      </header>
    </>
  );
}


/* =========================================================
   BREADCRUMB
========================================================= */

function Breadcrumb() {
  const location = useLocation();

  const pathNames = {
    "/login": "Login",
    "/signup": "Sign Up",
    "/register": "Registration",
    "/success": "Registration Successful",
    "/admin": "Admin Dashboard",
  };

  // Home doesn't need breadcrumb
  if (location.pathname === "/") {
    return null;
  }

  const currentPage =
    pathNames[location.pathname] ||
    (location.pathname.startsWith("/verify/")
      ? "Verify Alumni"
      : "Page");

  return (
    <div className="bg-[#f8f5ee] border-b border-[#e7ddc9]">

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-3">

        <div className="flex items-center gap-2 text-xs sm:text-sm">

          <Link
            to="/"
            className="text-gray-500 hover:text-maroon transition"
          >
            Home
          </Link>

          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>

          <span className="text-maroon font-semibold">
            {currentPage}
          </span>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <AuthProvider>

      <BrowserRouter>

        <NavBar />

        <Breadcrumb />

        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <Register />
                </ProtectedRoute>
              }
            />

            <Route
              path="/success"
              element={<Success />}
            />

            <Route
              path="/verify/:alumniId"
              element={<Verify />}
            />

            <Route
              path="/admin"
              element={<AdminDashboard />}
            />

          </Routes>
        </main>

      </BrowserRouter>

    </AuthProvider>
  );
}