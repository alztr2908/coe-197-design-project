import { useState, useEffect } from "react";
import { useSlotContext } from "../SlotContext";
import ParkingSlot from "../components/overall/parkingTile";
import "./overall.css";

const overall = () => {
  const { slots } = useSlotContext();
  const [slotsArray, setSlotsArray] = useState(null);

  // enable map function
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (slots.length !== 0) {
      setSlotsArray(slots);
      setCondition(true);
    }
  }, [slots]);

  return (
    <div className="overall-bg">
      {condition
        ? // Render when slots is not null
          slotsArray.map((slot) => {
            return slot.users.map((num) => {
              return (
                <div key={num.slotNumber} className="oa-box">
                  {/* {num.slotNumber} */}
                  <ParkingSlot key={num.slotNumber} num={num} />
                </div>
              );
            });
          })
        : null}
    </div>
  );
};

export default overall;

// Slot Number
// Total Charge
// Occupied
// Time Started
