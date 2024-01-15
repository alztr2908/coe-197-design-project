import React from "react";
import Map from "../components/main/map";
import Dashboard from "../components/main/dashboard";
const main = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Map />
      <Dashboard />
    </div>
  );
};

export default main;
