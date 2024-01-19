import React from "react";

const incomingBox = ({ slot }) => {
  console.log(slot);
  // once button clicked isOccupied = true
  const inBox = {
    width: "345px",
    height: "100px",
    borderRadius: "15px",
    backgroundColor: "#AEB117",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  };

  const slotStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    margin: "0 20px",
  };

  const okayButton = {
    width: "130px",
    backgroundColor: "#2f8a38",
    marginRight: "10px",
  };

  return (
    <div style={inBox}>
      <div style={slotStyle}>
        {slot <= 9 ? (
          <span>
            <span style={{ color: "green" }}>Slot: 0{slot.slotNumber}</span>{" "}
            will be occupied
          </span>
        ) : (
          <span>
            <span style={{ color: "green" }}>Slot: {slot.slotNumber}</span> will
            be occupied
          </span>
        )}
      </div>
      <div>
        <button style={okayButton}>Got it!</button>
      </div>
    </div>
  );
};

export default incomingBox;
