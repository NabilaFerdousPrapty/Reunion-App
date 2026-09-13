import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, fileBase } from "../api";

export default function Verify() {
  const { alumniId } = useParams();
  const [registrant, setRegistrant] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/registrants/verify/${alumniId}`)
      .then((res) => setRegistrant(res.data))
      .catch(() => setError("This alumni ID could not be verified."));
  }, [alumniId]);

  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {registrant && (
          <>
            <h2>✅ Verified Registered Alumni</h2>
            {registrant.photoUrl && (
              <img
                src={`${fileBase}${registrant.photoUrl}`}
                alt={registrant.name}
                style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover" }}
              />
            )}
            <h3>{registrant.name}</h3>
            <p>Department: {registrant.department}</p>
            <p>Passing Year: {registrant.passingYear}</p>
            <p>Alumni ID: {registrant.alumniId}</p>
          </>
        )}
      </div>
    </div>
  );
}
