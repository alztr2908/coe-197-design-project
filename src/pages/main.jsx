import React from "react";
import Map from "../components/main/map";
import Dashboard from "../components/main/dashboard";
const main = () => {
  const mainStyle = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <div style={mainStyle}>
      <Map />
      <Dashboard />
    </div>
  );
};

export default main;
