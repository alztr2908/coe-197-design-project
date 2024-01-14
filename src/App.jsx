import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="display"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
