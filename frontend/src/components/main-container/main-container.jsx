import React from "react";
import "./main-container.css";
import HoursForecast from "../HoursForecast/HoursForecast";
import brokenCloudsD from "../../assets/icons/brokenCloudsD.svg";
import brokenCloudsN from "../../assets/icons/brokenCloudsN.svg";
import clearSkyD from "../../assets/icons/clearSkyD.svg";
import clearSkyN from "../../assets/icons/clearSkyN.svg";
import fewCloudsD from "../../assets/icons/fewCloudsD.svg";
import fewCloudsN from "../../assets/icons/fewCloudsN.svg";
import mistD from "../../assets/icons/mistD.svg";
import mistN from "../../assets/icons/mistN.svg";
import rainD from "../../assets/icons/rainD.svg";
import rainN from "../../assets/icons/rainN.svg";
import scatteredCloudsD from "../../assets/icons/scatteredCloudsD.svg";
import scatteredCloudsN from "../../assets/icons/scatteredCloudsN.svg";
import showerRainD from "../../assets/icons/showerRainD.svg";
import showerRainN from "../../assets/icons/showerRainN.svg";
import snowD from "../../assets/icons/snowD.svg";
import snowN from "../../assets/icons/snowN.svg";
import thunderstormD from "../../assets/icons/thunderstormD.svg";
import thunderstormN from "../../assets/icons/thunderstormN.svg";

function MainContainer({ data }) {
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
    <div>
      <div className="weatherMain">
        <img
          className="imgWeather"
          src={
            data.weather[0].description === "broken clouds"
              ? brokenCloudsD
              : data.weather[0].description === "clear sky"
              ? clearSkyD
              : data.weather[0].description === "few clouds"
              ? fewCloudsD
              : data.weather[0].description === "mist"
              ? mistD
              : data.weather[0].description === "rain" ||
                data.weather[0].description === "light rain" ||
                data.weather[0].description === "moderate rain"
              ? rainD
              : data.weather[0].description === "scattered clouds" ||
                data.weather[0].description === "overcast clouds"
              ? scatteredCloudsD
              : data.weather[0].description === "shower rain"
              ? showerRainD
              : data.weather[0].description === "snow"
              ? snowD
              : data.weather[0].description === "thunder"
              ? thunderstormD
              : rainN
          }
          alt="Sunny"
        />
        <p className="myCityTem">{Math.round(data.main.temp)}°</p>
        <p className="myWeather">{data.weather[0].description}</p>
      </div>
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
            <p className="incorporated-data">
              {Math.round(data.wind.speed)} m/s
            </p>
          </div>
          <div className="separator" />
          <div className="humidity">
            <h3>HUMIDITY</h3>
            <p className="incorporated-data">{data.main.humidity}%</p>
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
              <p className="sunrise-time">{data.sys.sunrise}</p>
            </div>
          </div>
          <div className="sunset">
            <h3>Sunset</h3>
            <div className="border-Sunset">
              <p className="sunset-time">{data.sys.sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
