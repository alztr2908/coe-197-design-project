import { useState, useEffect } from "react";
import { useSlotContext } from "../../SlotContext";
import "./nearExit.css";

const nearExit = () => {
  const { slots } = useSlotContext();
  const [slotsArray, setSlotsArray] = useState(null);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (slots.length !== 0) {
      const filteredSlots = slots[0]
        .filter((slot) => !slot.isOccupied)
        .sort((a, b) => a.distanceToExit - b.distanceToExit);
      setSlotsArray(filteredSlots);
      setCondition(true);
    }
  }, [slots]);

  return (
    <div className="near-exit">
      <span className="exit-title">
        Available Parking Slot near Parking Entrance
      </span>
      <div className="exit-grid">
        {condition
          ? slotsArray.map((slot, index) => {
              return (
                index <= 5 &&
                (slot.slotNumber < 10 ? (
                  <span key={slot.slotNumber} className="exit-item">
                    0{slot.slotNumber}
                  </span>
                ) : (
                  <span key={slot.slotNumber} className="exit-item">
                    {slot.slotNumber}
                  </span>
                ))
              );
            })
          : null}
      </div>
    </div>
  );
};

export default nearExit;
