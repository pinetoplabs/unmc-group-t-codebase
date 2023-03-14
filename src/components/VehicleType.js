import { useState } from "react";
import "./module.css";

function VehicleType({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Minicompact(car)",
    "Subcompact(car)",
    "Compact(car)",
    "Mid-size(car)",
    "Full-size(car)",
    "Small(truck)",
    "Standard(truck)",
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
