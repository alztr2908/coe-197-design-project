import { useSlotContext } from "../../SlotContext";
import { useState, useEffect } from "react";
import "./dashboard.css";
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
      <div className="box near-entrance">
        <span className="db-title">
          Available Parking Slot near EEE Entrance
        </span>
        <div className="db-grid">
          <div className="grid-item green">001</div>
          <div className="grid-item green">002</div>
          <div className="grid-item green">003</div>
          <div className="grid-item green">004</div>
          <div className="grid-item green">005</div>
          <div className="grid-item green">006</div>
        </div>
      </div>
      <div className="box near-exit">
        <span className="db-title">
          Available Parking Slot near Parking Entrance
        </span>
        <div className="db-grid">
          <div className="grid-item red">001</div>
          <div className="grid-item red">002</div>
          <div className="grid-item red">003</div>
          <div className="grid-item red">004</div>
          <div className="grid-item red">005</div>
          <div className="grid-item red">006</div>
        </div>
      </div>
      <div className="box slot-info">
        {selected ? (
          <div className="db-info">
            <span className="info-title">SLOT: {selected.slotNumber}</span>

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
// parking slot shortest path
// request page
// Parking Slot button functionality

export default map;
