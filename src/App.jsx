import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./pages/main";
import { db } from "./firebase";
import { ref } from "firebase/database";

import "./App.css";
import { onValue } from "firebase/database";

function App() {
  const [slot, setSlot] = useState(null);
  const [slots, setSlots] = useState([]);

  // read
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

  console.log(slots[0][1]);
  return (
    <>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
