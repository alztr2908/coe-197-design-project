import { useState } from "react";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="display"></div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default App;
