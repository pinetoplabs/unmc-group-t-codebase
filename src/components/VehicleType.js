import { useState } from "react";
import "./module.css";

function VehicleType({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Small Car",
    "Medium size  car",
    "Large Car",
    "SUV",
    "Large Truck",
  ];
  return (
    <div className="choicebox">
      <div className="choicebox-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="choicebox-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="choicebox-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VehicleType;
