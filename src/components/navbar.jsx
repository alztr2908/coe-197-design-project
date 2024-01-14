import { useState, useEffect } from "react";
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
        <h1 className="title">Smart Parking: Admin</h1>
        <ul>
          <li>MAP</li>
          <li>OVERALL</li>
        </ul>
      </div>
      <span className="clock">{date.toLocaleTimeString()}</span>
    </nav>
  );
};

export default navbar;
