import { useState } from "react";
import "./F.css";

function FuelType({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Regular Gasoline",
    "Premium Gasoline",
    "Diesel",
    "E85(ethanol)",
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

export default FuelType;
