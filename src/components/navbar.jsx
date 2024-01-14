import React from "react";
import "./navbar.css";
const navbar = () => {
  return (
    <nav>
      <div className="nav-display">
        <h1 className="title">Smart Parking: Admin</h1>
        <ul>
          <li>Map</li>
          <li>Overall</li>
        </ul>
      </div>
      <span className="clock">3:14:15</span>
    </nav>
  );
};

export default navbar;
