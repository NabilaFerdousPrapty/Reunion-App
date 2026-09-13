import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="max-w-[700px] mx-auto px-5 py-10">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center">
        <h2 className="text-maroon text-2xl mb-3">Registration Successful ✅</h2>
        <p className="text-gray-600 mb-5">
          Thank you for registering. Your payment will be verified by the organizing
          committee, after which your alumni ID card will be generated.
        </p>
        <Link to="/">
          <button className="bg-maroon text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-maroon-dark">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}