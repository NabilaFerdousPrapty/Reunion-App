import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <h2>Registration Successful ✅</h2>
        <p>
          Thank you for registering. Your payment will be verified by the organizing
          committee, after which your alumni ID card will be generated.
        </p>
        <Link to="/">
          <button className="btn">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}
