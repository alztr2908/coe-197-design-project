import { useState, useEffect } from "react";

const parkingTile = ({ num }) => {
  const [time, setTime] = useState(new Date());
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    if (num.timeStarted !== "") {
      const timeStarted = new Date(num.timeStarted);

      // set initial time
      setTime(timeStarted);

      // Calculate elapsed time
      updateElapsedTime(timeStarted);

      // Set up interval to update elapsed time every second
      const intervalId = setInterval(() => {
        updateElapsedTime(timeStarted);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [num]);

  const updateElapsedTime = (startTime) => {
    const currentTime = new Date();
    const timeDifference = currentTime - startTime;
    const seconds = Math.floor(timeDifference / 1000);
    timeToCharge(seconds);
  };

  const timeToCharge = (seconds) => {
    if (seconds < 3600) {
      setCharge(10);
    } else if (seconds >= 3601 && seconds <= 10800) {
      setCharge(20);
    } else {
      setCharge(30);
    }
  };

  // Time started format
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // Use 12-hour clock with AM/PM
  };

  const slotStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0 20px",
  };

  const dateStyle = {
    fontSize: "0.67rem",
    width: "25px",
    textAlign: "center",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space",
          alignItems: "center",
        }}
      >
        <div style={slotStyle}>
          {num.slotNumber <= 9 ? (
            <span>0{num.slotNumber}</span>
          ) : (
            <span>{num.slotNumber}</span>
          )}
        </div>
        <div>
          {!num.isOccupied ? (
            <div style={{ marginRight: "20px", fontSize: "0.9rem" }}>
              <span>Total Charge: ₱{charge}</span>
              <br />
              <span>Occupied: No</span>
              <br />
              <span style={{ fontSize: "0.7rem" }}>
                Time Started: Not started
              </span>
            </div>
          ) : (
            <div style={{ marginRight: "20px", fontSize: "0.9rem" }}>
              <span>Total Charge: ₱{charge}</span>
              <br />
              <span>Occupied: Yes</span>
              <br />
              <span style={dateStyle}>
                Time Started: {time.toLocaleString("en-US", options)}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default parkingTile;
