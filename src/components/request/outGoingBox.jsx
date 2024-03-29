import { db } from "../../firebase";
import { ref, update } from "firebase/database";

const outGoingBox = ({ slot }) => {
  // once button clicked accept isOccupied = false and other parameter changed
  const outBox = {
    width: "200px",
    height: "100px",
    borderRadius: "15px",
    backgroundColor: "#AEB117",
    display: "flex",
    justifyContent: "space",
    alignItems: "center",
  };

  const slotStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0 20px",
  };

  const acceptButton = {
    width: "100%",
    // marginBottom: "5px",
    backgroundColor: "#2f8a38",
  };
  const declineButton = {
    width: "90%",
    backgroundColor: "#925c5c",
  };

  // Update outgoing by setting isOccupied to false and time started to null
  const updateOutgoing = (val) => {
    const updatedValues = {
      isOccupied: false,
      timeStarted: "",
    };

    // Create a new object that merges the existing val with updatedValues
    const updatedSlot = { ...val, ...updatedValues };

    update(ref(db, `/users/${val.slotNumber - 1}`), updatedSlot);
  };

  return (
    <div style={outBox}>
      <div style={slotStyle}>
        {slot.slotNumber <= 9 ? (
          <span>0{slot.slotNumber}</span>
        ) : (
          <span>{slot.slotNumber}</span>
        )}
      </div>
      <div>
        <button onClick={() => updateOutgoing(slot)} style={acceptButton}>
          Got it!
        </button>
        {/* <button style={declineButton}>Decline</button> */}
      </div>
    </div>
  );
};

export default outGoingBox;
