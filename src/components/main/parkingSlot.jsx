import { useSlotContext } from "../../SlotContext";

const parkingSlot = ({ num }) => {
  const { setSelected } = useSlotContext();
  // CSS design
  /*
    available: #2f8a38
    not-available: #925c5c

  */
  const box1 = {
    height: num.isHorizontal ? "38.8px" : "87px",
    width: num.isHorizontal ? "87px" : "38.8px",
    border: "2px solid #d9d9d9",
    backgroundColor: num.isOccupied ? "#925c5c" : "#2f8a38",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const text = {
    color: "black",
    fontWeight: "bold",
  };

  const clickParking = (val) => {
    setSelected(val);
  };

  return (
    <>
      <div style={box1} onClick={() => clickParking(num)}>
        {num.slotNumber <= 9 ? (
          <span style={text}>0{num.slotNumber}</span>
        ) : (
          <span style={text}>{num.slotNumber}</span>
        )}
      </div>
    </>
  );
};

export default parkingSlot;

/*
Parking slot number
TimeStarted
Duration of stay
(horizontal or vertical) flag
Total Charge (stay duration conversion)
Frequency of car that parked 
*/
