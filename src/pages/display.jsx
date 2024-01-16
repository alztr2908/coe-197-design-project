import { Route, Routes } from "react-router-dom";
import Main from "./main";
import Overall from "./overall";
import Request from "./request";
const display = () => {
  const displayStyle = {
    width: "1445.61px",
    height: "532.39px",
    // display: "flex",
    // alignItems: "center",
    border: "1px solid yellow",
  };

  return (
    <div style={displayStyle}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/overall" element={<Overall />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </div>
  );
};

export default display;
