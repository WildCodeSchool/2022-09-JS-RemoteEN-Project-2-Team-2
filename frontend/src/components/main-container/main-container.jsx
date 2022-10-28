import React from "react";
import "./main-container.css";
import HoursForecast from "../HoursForecast/HoursForecast";

function MainContainer() {
  // const weekday = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // const current = new Date();
  // const day = weekday[current.getDay() + 2];

  return (
    <div className="main-container">
      <div className="days">
        <h3 className="dayOfWeek">Today</h3>
        <h3 className="dayOfWeek">Tomorrow</h3>
        <h3 className="dayOfWeek">Sunday</h3>
      </div>
      <div>
        <HoursForecast />
      </div>
      <div className="datas">
        <div className="wind">
          <h3>WIND</h3>
          <p className="incorporated-data">26 km/h</p>
        </div>
        <div className="separator" />
        <div className="humidity">
          <h3>HUMIDITY</h3>
          <p className="incorporated-data">30%</p>
        </div>
        <div className="separator" />
        <div>
          <h3>FEELS LIKE</h3>
          <p className="incorporated-data">14°</p>
        </div>
      </div>
      <div className="sun-position">
        <div className="sunrise">
          <h3>Sunrise</h3>
          <div className="border-Sunrise">
            <p className="sunrise-time">7:53</p>
          </div>
        </div>
        <div className="sunset">
          <h3>Sunset</h3>
          <div className="border-Sunset">
            <p className="sunset-time">18:15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
