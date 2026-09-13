
import { useEffect, useState } from "react";
import { api, adminHeaders, fileBase } from "../api";

const statusColors = {
  pending: "text-yellow-700",
  approved: "text-green-700",
  rejected: "text-red-700",
};

export default function AdminDashboard() {
  const [adminKey, setAdminKey] = useState(
    localStorage.getItem("adminKey") || ""
  );

  const [unlocked, setUnlocked] = useState(
    !!localStorage.getItem("adminKey")
  );

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
    if (unlocked) {
      load(adminKey);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked]);

  const handleUnlock = (e) => {
    e.preventDefault();

    localStorage.setItem("adminKey", adminKey);
    setUnlocked(true);
  };

  const approve = async (id) => {
    try {
      await api.patch(
        `/registrants/${id}/approve`,
        {},
        adminHeaders(adminKey)
      );

      load(adminKey);
    } catch (err) {
      setError("Failed to approve registrant");
    }
  };

  const reject = async (id) => {
    try {
      await api.patch(
        `/registrants/${id}/reject`,
        {},
        adminHeaders(adminKey)
      );

      load(adminKey);
    } catch (err) {
      setError("Failed to reject registrant");
    }
  };

  if (!unlocked) {
    return (
      <div className="max-w-[400px] mx-auto px-5 py-10">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-maroon text-2xl mb-4">
            Admin Login
          </h2>

          <form onSubmit={handleUnlock}>
            <label className="block mb-3 font-semibold text-sm">
              Admin Key

              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </label>

            <button
              className="w-full bg-maroon text-white font-semibold text-sm py-2.5 rounded-md hover:bg-maroon-dark"
              type="submit"
            >
              Unlock
            </button>
          </form>

          {error && (
            <p className="text-red-600 text-sm mt-2">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-5 py-10">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-maroon text-2xl mb-4">
          Registrants ({registrants.length})
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-2">
            {error}
          </p>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-200 p-2 text-left">
                  Name
                </th>

                <th className="border-b border-gray-200 p-2 text-left">
                  Dept
                </th>

                <th className="border-b border-gray-200 p-2 text-left">
                  Year
                </th>

                <th className="border-b border-gray-200 p-2 text-left">
                  Txn ID
                </th>

                <th className="border-b border-gray-200 p-2 text-left">
                  Status
                </th>

                <th className="border-b border-gray-200 p-2 text-left">
                  Alumni ID
                </th>

                <th className="border-b border-gray-200 p-2 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {registrants.map((r) => (
                <tr key={r._id}>
                  <td className="border-b border-gray-100 p-2">
                    {r.name}
                  </td>

                  <td className="border-b border-gray-100 p-2">
                    {r.department}
                  </td>

                  <td className="border-b border-gray-100 p-2">
                    {r.passingYear}
                  </td>

                  <td className="border-b border-gray-100 p-2">
                    {r.transactionId}
                  </td>

                  <td
                    className={`border-b border-gray-100 p-2 font-semibold ${
                      statusColors[r.paymentStatus] || ""
                    }`}
                  >
                    {r.paymentStatus}
                  </td>

                  <td className="border-b border-gray-100 p-2">
                    {r.alumniId || "-"}
                  </td>

                  <td className="border-b border-gray-100 p-2">
                    <div className="flex gap-1.5 flex-wrap">
                      {r.paymentStatus !== "approved" && (
                        <button
                          className="bg-maroon text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-maroon-dark"
                          onClick={() => approve(r._id)}
                        >
                          Approve
                        </button>
                      )}

                      {r.paymentStatus !== "rejected" && (
                        <button
                          className="bg-gray-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-gray-600"
                          onClick={() => reject(r._id)}
                        >
                          Reject
                        </button>
                      )}
                    </div>

                    {r.paymentScreenshotUrl && (
                      <div className="mt-1">
                        <a
                          href={`${fileBase}${r.paymentScreenshotUrl}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-maroon underline text-xs"
                        >
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
