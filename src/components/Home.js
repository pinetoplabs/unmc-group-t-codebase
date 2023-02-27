import { Component, useRef, useState } from "react";
import { Fragment } from "react";
import transportImage from "../assets/Transport.jpg";
import FuelType from "./FuelType";
import EngineType from "./EngineType";
import VehicleType from "./VehicleType";
import "./module.css";
import "./navbar.css";
import "./result.css";
import Headline from "./Headline.js";

export default function Home() {
  //because extends the Component , if no, then render is not required.
  const [selected, setSelected] = useState("Choose one");
  const [selected1, setSelected2] = useState("Choose one");
  const [selected3, setSelected4] = useState("Choose one");

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      <header className="header">
        <h1>CARBONET</h1>
      </header>

      <div className="main-image">
        <img src={transportImage}></img>
        <div className="text-on-image">
          <h1>Carbon Footprint Calculator</h1>
        </div>
      </div>

      <div className="card-container">
        <div className="card-title">
          <h5>Trip details:</h5>
        </div>

        <div className="row">
          <div className="originInput">
            <label className="inputTitle">From</label>
            <div className="inputflex">
              <input type="text" placeholder="Enter your origin" />
            </div>
          </div>

          <div className="mileageInput">
            <label className="inputTitle">Trip distance (in Km)</label>
            <div className="inputflex">
              <input type="number" placeholder="Enter the total mileage" />
            </div>
          </div>
        </div>

        <div className="destinationInput">
          <label className="inputTitle">To</label>
          <div className="inputflex">
            <input type="text" placeholder="Enter your destination" />
          </div>
        </div>

        <hr className="line"></hr>
        <div className="card-title">
          <h5>Vehicle details:</h5>
        </div>

        <div className="subtitle">
          <div className="temp">
            <h5>Fuel type:</h5>
          </div>
          <FuelType selected={selected} setSelected={setSelected} />
          <div className="temp">
            <h5>Vehicle type:</h5>
          </div>
          <VehicleType selected={selected1} setSelected={setSelected2} />
          <div className="temp">
            <h5>Engine type:</h5>
          </div>
          <EngineType selected={selected3} setSelected={setSelected4} />
        </div>

        <div className="userInput">
          <button onClick={handleClick}>Calculate my emissions</button>
        </div>
      </div>

      <div className="title2">
        <Headline ref={ref} text="Your Footprint"></Headline>
      </div>

      <div className="displayRow">
        <div className="cardContainer1">
          <div className="cardTitle">
            Kilometers
            <div className="cardBody">123</div>
            <div className="cardDescription">Your travelled distance</div>
          </div>
        </div>

        <div className="cardContainer2">
          <div className="cardTitle">
            CO2
            <div className="cardBody">123</div>
            <div className="cardDescription">Your carbon emissions</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
