import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/signup", { name, email, password });
      login(res.data.token, res.data.user);
      navigate("/register");
    } catch (err) {
      setError(err.response?.data?.error || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-5 bg-cream">
      <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-[380px] w-full shadow-sm">
        <h2 className="text-maroon text-2xl mb-1">Create Your Account</h2>
        <p className="text-gray-500 text-sm mb-5">
          Join as a member to register for the reunion.
        </p>
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-3 font-semibold text-sm">
            Full Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </label>
          <label className="block mb-3 font-semibold text-sm">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </label>
          <label className="block mb-4 font-semibold text-sm">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </label>
          <button
            className="w-full bg-maroon text-white font-semibold text-sm py-2.5 rounded-md hover:bg-maroon-dark disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already a member?{" "}
          <Link to="/login" className="text-maroon font-semibold">Log in</Link>
        </p>
      </div>
    </div>
  );
}