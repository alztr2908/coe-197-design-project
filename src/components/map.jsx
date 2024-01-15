import "./map.css";
import { useContext, useState, useEffect } from "react";
import { SlotContext } from "../App";

const map = () => {
  const slotsArray = useContext(SlotContext);
  const [slots, setSlots] = useState(null);

  // enable map function
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (slotsArray !== undefined) {
      setSlots(slotsArray.slots);
      setCondition(true);
    }
  }, [slotsArray]);

  // console.log(slotsArray.slots);
  // console.log(slots);
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
            slots.map((slot) => {
              return slot.users.map((num, index) => {
                return <h1 key={num.slotNumber}>{num.slotNumber}</h1>;
              });
            })
          : null}
      </div>
    </div>
  );
};

export default map;
