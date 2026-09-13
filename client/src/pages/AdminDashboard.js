import { useEffect, useState } from "react";
import { api, adminHeaders, fileBase } from "../api";

export default function AdminDashboard() {
  const [adminKey, setAdminKey] = useState(localStorage.getItem("adminKey") || "");
  const [unlocked, setUnlocked] = useState(!!localStorage.getItem("adminKey"));
  const [registrants, setRegistrants] = useState([]);
  const [error, setError] = useState("");

  const load = async (key) => {
    try {
      const res = await api.get("/registrants", adminHeaders(key));
      setRegistrants(res.data);
      setError("");
    } catch (err) {
      setError("Invalid admin key");
      setUnlocked(false);
      localStorage.removeItem("adminKey");
    }
  };

  useEffect(() => {
    if (unlocked) load(adminKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked]);

  const handleUnlock = (e) => {
    e.preventDefault();
    localStorage.setItem("adminKey", adminKey);
    setUnlocked(true);
  };

  const approve = async (id) => {
    await api.patch(`/registrants/${id}/approve`, {}, adminHeaders(adminKey));
    load(adminKey);
  };

  const reject = async (id) => {
    await api.patch(`/registrants/${id}/reject`, {}, adminHeaders(adminKey));
    load(adminKey);
  };

  if (!unlocked) {
    return (
      <div className="container">
        <div className="card">
          <h2>Admin Login</h2>
          <form onSubmit={handleUnlock}>
            <label>
              Admin Key
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                required
              />
            </label>
            <button className="btn" type="submit">Unlock</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Registrants ({registrants.length})</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Dept</th>
                <th>Year</th>
                <th>Txn ID</th>
                <th>Status</th>
                <th>Alumni ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {registrants.map((r) => (
                <tr key={r._id}>
                  <td>{r.name}</td>
                  <td>{r.department}</td>
                  <td>{r.passingYear}</td>
                  <td>{r.transactionId}</td>
                  <td className={`status-${r.paymentStatus}`}>{r.paymentStatus}</td>
                  <td>{r.alumniId || "-"}</td>
                  <td>
                    {r.paymentStatus !== "approved" && (
                      <button className="btn" onClick={() => approve(r._id)} style={{ marginRight: 6 }}>
                        Approve
                      </button>
                    )}
                    {r.paymentStatus !== "rejected" && (
                      <button
                        className="btn"
                        style={{ background: "#888" }}
                        onClick={() => reject(r._id)}
                      >
                        Reject
                      </button>
                    )}
                    {r.paymentScreenshotUrl && (
                      <div>
                        <a href={`${fileBase}${r.paymentScreenshotUrl}`} target="_blank" rel="noreferrer">
                          View payment proof
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
