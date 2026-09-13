import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Verify from "./pages/Verify";
import AdminDashboard from "./pages/AdminDashboard";

function NavBar() {
  return (
    <div style={{ background: "white", borderBottom: "1px solid #eee", padding: "12px 16px" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Batch 2002 Reunion</strong>
        <div>
          <Link to="/" style={{ marginRight: 16 }}>Home</Link>
          <Link to="/register" style={{ marginRight: 16 }}>Register</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/verify/:alumniId" element={<Verify />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
