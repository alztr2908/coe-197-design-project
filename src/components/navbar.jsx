import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
const navbar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <nav>
      <div className="nav-display">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h1 className="title">Smart Parking: Admin</h1>
        </Link>
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              MAP
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/overall">
              OVERALL
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/request"
            >
              REQUESTS
            </Link>
          </li>
        </ul>
      </div>
      <span className="clock">{date.toLocaleTimeString()}</span>
    </nav>
  );
};

export default navbar;
