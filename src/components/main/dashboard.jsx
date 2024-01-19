import { useSlotContext } from "../../SlotContext";
import { useState, useEffect } from "react";
import "./dashboard.css";
import NearEntrance from "./nearEntrance";
import NearExit from "./nearExit";
const map = () => {
  const { selected } = useSlotContext();
  const [time, setTime] = useState(new Date());
  const [elapsedTime, setElapsedTime] = useState(null);
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    if (selected !== null) {
      const timeStarted = new Date(selected.timeStarted);

      // set initial time
      setTime(timeStarted);

      // Calculate elapsed time immediately
      updateElapsedTime(timeStarted);

      // Set up interval to update elapsed time every second
      const intervalId = setInterval(() => {
        updateElapsedTime(timeStarted);
      }, 1000);

      // Clean up the interval when the component is unmounted or when 'selected' changes
      return () => clearInterval(intervalId);
    }
  }, [selected]);

  const updateElapsedTime = (startTime) => {
    const currentTime = new Date();
    const timeDifference = currentTime - startTime;
    const seconds = Math.floor(timeDifference / 1000);
    timeToCharge(seconds);
    setElapsedTime(seconds);
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

  return (
    <div className="db-bg">
      <NearEntrance />
      <NearExit />
      <div className="box slot-info">
        {selected ? (
          <div className="db-info">
            <span className="info-title">
              SLOT:{" "}
              {selected.slotNumber < 9 ? (
                <span>0{selected.slotNumber}</span>
              ) : (
                <span>{selected.slotNumber}</span>
              )}
            </span>

            {/* isOccupied block */}
            {!selected.isOccupied ? (
              <div className="info-info">
                <div className="info-row">
                  <div className="info-row-row">
                    <span>Duration of stay:</span>
                    <br></br>
                    <span>0</span>
                  </div>
                  <div className="info-row-row">
                    <span>Total Charge:</span>
                    <br></br>
                    <span>₱ {0}</span>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-row-row">
                    <span>Currently Occupied:</span>
                    <br></br>
                    <span>No</span>
                  </div>
                  <div className="info-row-row">
                    <span>Car Frequency:</span>
                    <br></br>
                    <span>{selected.frequencyCars}</span>
                  </div>
                </div>
                <span className="dateStarted">Time Started: Not Started </span>
              </div>
            ) : (
              <div className="info-info">
                <div className="info-row">
                  <div className="info-row-row">
                    <span>Duration of stay:</span>
                    <br></br>
                    <span>
                      {elapsedTime !== null ? `${elapsedTime} seconds` : "N/A"}
                    </span>
                  </div>
                  <div className="info-row-row">
                    <span>Total Charge:</span>
                    <br></br>
                    <span>₱ {charge}</span>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-row-row">
                    <span>Currently Occupied:</span>
                    <br></br>
                    <span>Yes</span>
                  </div>
                  <div className="info-row-row">
                    <span>Car Frequency:</span>
                    <br></br>
                    <span>{selected.frequencyCars}</span>
                  </div>
                </div>
                <span className="dateStarted">
                  Time Started: {time.toLocaleString("en-US", options)}{" "}
                </span>
              </div>
            )}
          </div>
        ) : (
          <span className="db-default">Click a parking slot on map</span>
        )}
      </div>
    </div>
  );
};

// title
// duration of stay // total charge
// Occupied //Car Freq
// time started

// Todo only in order [DELETE THIS]
// dashboard (DONE)
// navbar display (DONE)
// scale parking slot (DONE)
// overall page (DONE)
// request page frontend (DONE)
// parking slot shortest path (DONE)
// request page backend
// Parking Slot button functionality

export default map;
