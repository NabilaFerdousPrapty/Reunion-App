import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Reunion of Batch 2002</h1>
        <p>Celebrating memories, friendship & a journey of excellence</p>
        <p>15 November 2025 · College Campus · 10:00 AM Onwards</p>
        <Link to="/register">
          <button className="btn">Register Now</button>
        </Link>
      </div>

      <div className="container">
        <div className="card">
          <h2>Event Schedule</h2>
          <ul>
            <li>10:00 AM — Registration & Welcome</li>
            <li>11:00 AM — Opening Ceremony</li>
            <li>11:30 AM — Alumni Introduction</li>
            <li>1:30 PM — Lunch</li>
            <li>3:00 PM — Cultural Program</li>
            <li>4:30 PM — Prize & Recognition</li>
            <li>7:00 PM — Dinner</li>
            <li>8:30 PM — Closing Ceremony</li>
          </ul>
        </div>

        <div className="card">
          <h2>Registration Fee</h2>
          <p>Participant: 500 BDT &nbsp;|&nbsp; Guest: 400 BDT &nbsp;|&nbsp; Total: 900 BDT</p>
          <Link to="/register">
            <button className="btn">Register Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
