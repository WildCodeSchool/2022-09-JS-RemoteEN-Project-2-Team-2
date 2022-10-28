import React from "react";
import "./HoursForecast.css";
import cloudy from "../../assets/cloudy.svg";
import nightCloudy from "../../assets/night cloudy.svg";
import clear from "../../assets/clear.svg";

function HoursForecast() {
  return (
    <div>
      <div className="hours-box">
        <div className="hour-weather">
          <p className="hour">00:00</p>
          <img className="img-hours" src={nightCloudy} alt="" />
          <p className="temperature">10°</p>
        </div>
        <div className="hour-weather">
          <p className="hour">06:00</p>
          <img className="img-hours" src={cloudy} alt="" />
          <p className="temperature">12°</p>
        </div>
        <div className="hour-weather">
          <p className="hour">12:00</p>
          <img className="img-hours" src={clear} alt="" />
          <p className="temperature">13°</p>
        </div>
        <div className="hour-weather">
          <p className="hour">18:00</p>
          <img className="img-hours" src={clear} alt="" />
          <p className="temperature">17°</p>
        </div>
      </div>
    </div>
  );
}

export default HoursForecast;
