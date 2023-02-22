import { Component, useState } from "react";
import { Fragment } from "react";
import transportImage from "../assets/Transport.jpg";
import FuelType from "./FuelType";
import EngineType from "./EngineType";
import VehicleType from "./VehicleType";
import "./module.css";
import "./navbar.css";
import axios from "axios";

export default function Home() {
  //because extends the Component , if no, then render is not required.
  const [selected, setSelected] = useState("Choose one");
  const [selected1, setSelected2] = useState("Choose one");
  const [selected3, setSelected4] = useState("Choose one");

  const handleClick = () => {
    const origin = document.getElementById("origin").value;
    const mileage = document.getElementById("mileage").value;
    const destination = document.getElementById("destination").value;
    const fuelType = selected;
    const vehicleType = selected1;
    const engineType = selected3;

    axios
      .post("http://your-django-server-url.com/your-api-endpoint", {
        origin: origin,
        mileage: mileage,
        destination: destination,
        fuel_type: fuelType,
        vehicle_type: vehicleType,
        engine_type: engineType,
      })
      .then((response) => {
        // Handle the response from the server
        console.log(response);
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
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

        <div className="originInput">
          <label className="inputTitle">From</label>
          <div className="inputflex">
            <input type="text" placeholder="Enter your origin" id="origin" />
          </div>
        </div>

        <div className="mileageInput">
          <label className="inputTitle">Trip distance (in Km)</label>
          <div className="inputflex">
            <input type="number" placeholder="Enter the total mileage" id="mileage" />
          </div>
        </div>

        <div className="destinationInput">
          <label className="inputTitle">To</label>
          <div className="inputflex">
            <input type="text" placeholder="Enter your destination" id="destination" />
          </div>
        </div>

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
    </Fragment>)
    };
