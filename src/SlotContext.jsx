import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

const SlotContext = createContext();

export const SlotContextProvider = ({ children }) => {
  // handle data from api
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState(null);

  // read data from api
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setSlots([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((slot) => {
          setSlots((oldArray) => [...oldArray, slot]);
        });
      }
    });
  }, []);

  return (
    <SlotContext.Provider value={{ slots, selected, setSelected }}>
      {children}
    </SlotContext.Provider>
  );
};

export const useSlotContext = () => useContext(SlotContext);
