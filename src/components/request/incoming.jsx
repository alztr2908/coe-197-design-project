import { useState, useEffect } from "react";
import { useSlotContext } from "../../SlotContext";
import IncomingBox from "./incomingBox";

const ingoing = () => {
  const { slots } = useSlotContext();
  const [slotsArray, setSlotsArray] = useState(null);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (slots.length !== 0) {
      const filteredSlots = slots[0].filter((slot) => !slot.isOccupied);
      setSlotsArray(filteredSlots);
      setCondition(true);
    }
  }, [slots]);

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
        {condition
          ? slotsArray.map((slot, index) => {
              return (
                index < 4 && <IncomingBox key={slot.slotNumber} slot={slot} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ingoing;
