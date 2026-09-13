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
    <div className="max-w-[500px] mx-auto px-5 py-10">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center">
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {registrant && (
          <>
            <h2 className="text-maroon text-2xl mb-4">✅ Verified Registered Alumni</h2>
            {registrant.photoUrl && (
              <img
                src={`${fileBase}${registrant.photoUrl}`}
                alt={registrant.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-3"
              />
            )}
            <h3 className="text-lg font-semibold mb-1">{registrant.name}</h3>
            <p className="text-gray-600 text-sm">Department: {registrant.department}</p>
            <p className="text-gray-600 text-sm">Passing Year: {registrant.passingYear}</p>
            <p className="text-gray-600 text-sm">Alumni ID: {registrant.alumniId}</p>
          </>
        )}
      </div>
    </div>
  );
}