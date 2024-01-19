import { db } from "../../firebase";
import { ref, update } from "firebase/database";

const incomingBox = ({ slot }) => {
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

  // Update incoming by setting isOccupied to true and time started to new Date
  const updateIncoming = (val) => {
    const updatedValues = {
      isOccupied: true,
      timeStarted: new Date(),
      frequencyCars: val.frequencyCars + 1,
    };

    // Create a new object that merges the existing val with updatedValues
    const updatedSlot = { ...val, ...updatedValues };

    update(ref(db, `/users/${val.slotNumber - 1}`), updatedSlot);
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
        <button onClick={() => updateIncoming(slot)} style={okayButton}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default incomingBox;
