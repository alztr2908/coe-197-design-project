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

  // console.log(slots);
  // console.log(slotsArray);
  return (
    <div className="map-bg">
      <div className="building">
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
      <div className="southwest-parking"></div>
      <div className="northwest-parking"></div>
      <div className="west-parking"></div>
      <div className="east-parking">
        {condition
          ? // Render when slots is not null
            slotsArray.map((slot) => {
              return slot.users.map((num, index) => {
                return <ParkingSlot key={num.slotNumber} num={num} />;
              });
            })
          : null}
      </div>
    </div>
  );
};

export default map;
