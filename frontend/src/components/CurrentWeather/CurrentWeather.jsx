import React from "react";
import "./CurrentWeather.css";
import clearSkyD from "../../assets/icons/clearSkyD.svg";

function CurrentWeather() {
  return (
    <div>
      <div className="weatherMain">
        <img className="imgWeather" src={clearSkyD} alt="Sunny" />
        <p className="myCityTem">17°</p>
        <p className="myWeather">Clear Skies</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
