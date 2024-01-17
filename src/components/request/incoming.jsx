import React from "react";
import IncomingBox from "./incomingBox";

const ingoing = () => {
  const inGoingSlot = [35, 1, 15, 27];
  const inStyle = {
    width: "25%",
    borderRadius: "20px",
    backgroundColor: "#5dbb63",
    height: "515px",
    marginLeft: "10px",
    padding: "5px",
  };

  return (
    <div style={inStyle}>
      <h1>Incoming</h1>
      <div>
        {inGoingSlot.map((slot) => {
          return <IncomingBox key={inGoingSlot.indexOf(slot)} slot={slot} />;
        })}
      </div>
    </div>
  );
};

export default ingoing;
