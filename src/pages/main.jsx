import React from "react";
import Map from "../components/map";
import Dashboard from "../components/dashboard";
const main = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Map />
      <Dashboard />
    </div>
  );
};

export default main;
