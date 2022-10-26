import React from "react";
import "./CurrentWeather.css";
import clearSkyD from "../../assets/icons/clear-sky-.svg";

function CurrentWeather() {
  return (
    <div>
      <div className="weatherMain">
        <img className="imgWeather" src={clearSkyD} alt="Sunny" />
        <p className="myCityTem">16°</p>
        <p className="myWeather">Cloudy</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
