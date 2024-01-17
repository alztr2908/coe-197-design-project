import React from "react";
import "./nearEntrance.css";
const nearEntrance = () => {
  return (
    <div className="near-entrance">
      <span className="entrance-title">
        Available Parking Slot near EEE Entrance
      </span>
      <div className="entrance-grid">
        <div className="entrance-item">001</div>
        <div className="entrance-item">002</div>
        <div className="entrance-item">003</div>
        <div className="entrance-item">004</div>
        <div className="entrance-item">005</div>
        <div className="entrance-item">006</div>
      </div>
    </div>
  );
};

export default nearEntrance;
