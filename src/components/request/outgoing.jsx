import React from "react";
import OutGoingBox from "./outGoingBox";
const outgoing = () => {
  const outGoingSlot = [2, 4, 5, 8, 9];
  const outStyle = {
    width: "75%",
    borderRadius: "20px",
    backgroundColor: "#60100B",
    height: "515px",
  };

  const outGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridTemplateRows: "repeat(4,1fr)",
    marginTop: "20px",
    marginBottom: "10px",
    placeItems: "center",
    gap: "10px",
  };

  return (
    <div style={outStyle}>
      <h1>Outgoing</h1>
      <div style={outGrid}>
        {outGoingSlot.map((slot) => {
          return <OutGoingBox key={outGoingSlot.indexOf(slot)} slot={slot} />;
        })}
      </div>
    </div>
  );
};

export default outgoing;
