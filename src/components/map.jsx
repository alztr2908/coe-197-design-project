import React from "react";
import "./map.css";
const map = () => {
  return (
    <div className="map-bg">
      <div className="building">
        <div className="rec1"></div>
        <div className="rec2"></div>
        <div className="rec3"></div>
        <div className="rec4"></div>
      </div>
      <div className="fence">
        <span className="long-fence"></span>
        <span className="entrance-exit"></span>
        <span className="short-fence"></span>
      </div>
      <div className="oval"></div>
      <div className="southwest-parking"></div>
      <div className="northwest-parking"></div>
      <div className="west-parking"></div>
      <div className="east-parking"></div>
    </div>
  );
};

export default map;
