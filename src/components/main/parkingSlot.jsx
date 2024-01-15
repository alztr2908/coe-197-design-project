import React from "react";

const parkingSlot = ({ num }) => {
  // CSS design
  const box1 = {
    height: num.isHorizontal ? "38.8px" : "87px",
    width: num.isHorizontal ? "87px" : "38.8px",
    border: "2px solid #d9d9d9",
    backgroundColor: "#925c5c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const text = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    <>
      <div style={box1}>
        {num.slotNumber <= 9 ? (
          <span style={text}>00{num.slotNumber}</span>
        ) : (
          <span style={text}>0{num.slotNumber}</span>
        )}
      </div>
    </>
  );
};

export default parkingSlot;

/*
Parking slot number
TimeStarted
Duration of stay
(horizontal or vertical) flag
Total Charge (stay duration conversion)
Frequency of car that parked 
*/
