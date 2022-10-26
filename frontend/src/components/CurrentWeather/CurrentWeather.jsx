import React from "react";
import "./CurrentWeather.css";
import sunny from "../../assets/icons/sunny.svg";

function CurrentWeather() {
  return (
    <div>
      <div className="weatherMain">
        <img className="imgWeather" src={sunny} alt="Sunny" />
        <p className="myCityTem">16°</p>
        <p className="myWeather">Cloudy</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
