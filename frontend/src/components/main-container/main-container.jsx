import React from "react";
import "./main-container.css";

function MainContainer() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current = new Date();
  const day = weekday[current.getDay() + 2];

  return (
    <div className="main-container">
      <div className="days">
        <h3 className="dayOfWeek">Today</h3>
        <h3 className="dayOfWeek">Tomorrow</h3>
        <h3 className="dayOfWeek">{day}</h3>
      </div>
      <div className="datas">
        <div className="wind">
          <h3>WIND</h3>
          <p>26 km/h</p>
        </div>
        <div className="humidity">
          <h3>HUMIDITY</h3>
          <p>30%</p>
        </div>
        <div>
          <h3>AQI</h3>
          <p>38 good</p>
        </div>
      </div>
      <div className="sun-position">
        <div className="sunrise">
          <h3>Sunrise</h3>
          <p className="sunrise-time">7:53</p>
        </div>
        <div className="sunset">
          <h3>Sunset</h3>
          <p className="sunset-time">18:15</p>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
