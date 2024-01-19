import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSlotContext } from "../SlotContext";

import Main from "./main";
import Overall from "./overall";
import Request from "./request";

const display = () => {
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

  const displayStyle = {
    width: "1445.61px",
    height: "532.39px",
    paddingTop: "10px",
    // display: "flex",
    // alignItems: "center",
  };

  const loadingStyle = {
    width: "1445.61px",
    height: "510px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid white",
  };

  return (
    <div style={displayStyle}>
      {condition ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/overall" element={<Overall />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      ) : (
        <h1 style={loadingStyle}>Assets are loading... please wait</h1>
      )}
    </div>
  );
};

export default display;
