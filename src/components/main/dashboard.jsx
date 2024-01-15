import { useSlotContext } from "../../SlotContext";
import "./dashboard.css";
const map = () => {
  const { selected } = useSlotContext();
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

            {/* isOccupied */}
            {!selected.isOccupied ? (
              <>
                <span>Occupied: No</span>
                <span>Total Charge: 0 </span>
                <span>Duration of stay: 00 </span>
                <span>Car Frequency: 00 </span>
                <span>Time Started: 00 </span>
              </>
            ) : (
              <span></span>
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
// duration of stay
// total charge
// Occupied //Car Freq
// time started

export default map;
