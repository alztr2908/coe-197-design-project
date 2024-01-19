import { useState, useEffect } from "react";
import { useSlotContext } from "../../SlotContext";
import "./nearEntrance.css";

const NearEntrance = () => {
  const { slots } = useSlotContext();
  const [slotsArray, setSlotsArray] = useState(null);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (slots.length !== 0) {
      const filteredSlots = slots[0]
        .filter((slot) => !slot.isOccupied)
        .sort((a, b) => a.distanceToEntrance - b.distanceToEntrance);
      // console.log(filteredSlots);
      setSlotsArray(filteredSlots);
      setCondition(true);
    }
  }, [slots]);

  return (
    <div className="near-entrance">
      <span className="entrance-title">
        Available Parking Slot near EEE Entrance
      </span>
      <div className="entrance-grid">
        {condition
          ? slotsArray.map((slot, index) => {
              return (
                index <= 5 &&
                (slot.slotNumber < 10 ? (
                  <span class="entrance-item">0{slot.slotNumber}</span>
                ) : (
                  <span class="entrance-item">{slot.slotNumber}</span>
                ))
              );
            })
          : null}
      </div>
    </div>
  );
};

export default NearEntrance;
