import { useState, useEffect } from "react";
import { useSlotContext } from "../../SlotContext";
import OutGoingBox from "./outGoingBox";
const outgoing = () => {
  const { slots } = useSlotContext();
  const [slotsArray, setSlotsArray] = useState(null);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (slots.length !== 0) {
      const filteredSlots = slots[0].filter((slot) => slot.isOccupied);
      setSlotsArray(filteredSlots);
      setCondition(true);
    }
  }, [slots]);

  // console.log(slotsArray);

  const outStyle = {
    width: "75%",
    borderRadius: "20px",
    backgroundColor: "#60100B",
    height: "515px",
    padding: "5px",
    overflow: "scroll",
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
        {condition
          ? slotsArray.map((slot) => {
              return <OutGoingBox key={slot.slotNumber} slot={slot} />;
            })
          : null}
      </div>
    </div>
  );
};

export default outgoing;
