import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./pages/main";

import "./App.css";

function App() {
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
