import "./map.css";
import { useState, useEffect } from "react";
import { useSlotContext } from "../../SlotContext";
import ParkingSlot from "./parkingSlot";

const map = () => {
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
    <div className="map-bg">
      <div className="building">
        {/* Building blocks */}
        <div className="rec1"></div>
        <div className="rec2"></div>
        <div className="rec3"></div>
        <div className="rec4"></div>
      </div>
      <div className="fence">
        <span className="long-fence"></span>
        <span className="entrance-exit"></span>
        <span className="short-fence"></span>
      </div>
      <div className="oval"></div>
      <span className="arrow upArrow">↑</span>
      <span className="arrow downArrow">↓</span>
      <span className="arrow rightArrow">→</span>
      <span className="arrow leftArrow">←</span>
      <div className="southwest-parking">
        {condition
          ? // Render when slots is not null
            slotsArray.map((slot) => {
              return slot.map((num, index) => {
                return (
                  index >= 18 &&
                  index <= 34 && <ParkingSlot key={num.slotNumber} num={num} />
                );
              });
            })
          : null}
      </div>
      <div className="northwest-parking">
        {condition
          ? // Render when slots is not null
            slotsArray.map((slot) => {
              return slot.map((num, index) => {
                return (
                  index >= 15 &&
                  index <= 17 && <ParkingSlot key={num.slotNumber} num={num} />
                );
              });
            })
          : null}
      </div>
      <div className="west-parking">
        {condition
          ? // Render when slots is not null
            slotsArray.map((slot) => {
              return slot.map((num, index) => {
                return (
                  index >= 10 &&
                  index <= 14 && <ParkingSlot key={num.slotNumber} num={num} />
                );
              });
            })
          : null}
      </div>
      <div className="east-parking">
        {condition
          ? // Render when slots is not null
            slotsArray.map((slot) => {
              return slot.map((num, index) => {
                return (
                  index <= 9 && <ParkingSlot key={num.slotNumber} num={num} />
                );
              });
            })
          : null}
      </div>
      {/* Direction to the driveway */}
    </div>
  );
};

export default map;
