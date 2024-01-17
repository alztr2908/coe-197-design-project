import Incoming from "../components/request/incoming";
import Outgoing from "../components/request/outgoing";

const request = () => {
  const reqStyle = {
    display: "flex",
  };

  return (
    <div style={reqStyle}>
      <Outgoing />
      <Incoming />
    </div>
  );
};

export default request;
