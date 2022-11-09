import React, { useState } from "react";
import "./HoursForecast.css";
import cloudy from "../../assets/cloudy.svg";
import nightCloudy from "../../assets/night cloudy.svg";
import clear from "../../assets/clear.svg";

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

function HoursForecast({ data }) {
  const dayOfWeekDigit = new Date().getDay();
  let day = dayOfWeekDigit + 2;

  switch (day) {
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    case 8:
      day = "Monday";
      break;
    default:
      day = "WrongData";
  }

  const [today, setToday] = useState(true);
  const [tomorrow, setTomorrow] = useState(false);
  const [dayAfter, setDayAfter] = useState(false);

  const handleTodayChange = () => {
    setToday(true);
    setTomorrow(false);
    setDayAfter(false);
  };

  const handleTomorrowChange = () => {
    setToday(false);
    setTomorrow(true);
    setDayAfter(false);
  };

  const handleDayAfterChange = () => {
    setToday(false);
    setTomorrow(false);
    setDayAfter(true);
  };

  return (
    <div className="forecastContainer">
      <div className="days">
        <button type="button" className="dayOfWeek" onClick={handleTodayChange}>
          Today
        </button>
        <button
          type="button"
          className="dayOfWeek"
          onClick={handleTomorrowChange}
        >
          Tomorrow
        </button>
        <button
          type="button"
          className="dayOfWeek"
          onClick={handleDayAfterChange}
        >
          {day}
        </button>
      </div>
      {today ? (
        <div className="hours-box">
          <div className="hour-weather">
            <p className="hour">00:00</p>
            <img
              className="img-hours"
              src={
                data.list[0].weather[0].description === "broken clouds"
                  ? brokenCloudsD
                  : data.list[0].weather[0].description === "clear sky"
                  ? clearSkyD
                  : data.list[0].weather[0].description === "few clouds"
                  ? fewCloudsD
                  : data.list[0].weather[0].description === "mist" ||
                    data.list[0].weather[0].description === "fog"
                  ? mistD
                  : data.list[0].weather[0].description === "rain" ||
                    data.list[0].weather[0].description === "light rain" ||
                    data.list[0].weather[0].description === "moderate rain"
                  ? rainD
                  : data.list[0].weather[0].description ===
                      "scattered clouds" ||
                    data.list[0].weather[0].description === "overcast clouds"
                  ? scatteredCloudsD
                  : data.list[0].weather[0].description === "shower rain"
                  ? showerRainD
                  : data.list[0].weather[0].description === "snow"
                  ? snowD
                  : data.list[0].weather[0].description === "thunder"
                  ? thunderstormD
                  : rainN
              }
              alt=""
            />
            <p className="temperature">{Math.round(data.list[0].main.temp)}°</p>
          </div>
          <div className="hour-weather">
            <p className="hour">06:00</p>
            <img className="img-hours" src={cloudy} alt="" />
            <p className="temperature">{Math.round(data.list[2].main.temp)}°</p>
          </div>
          <div className="hour-weather">
            <p className="hour">12:00</p>
            <img className="img-hours" src={clear} alt="" />
            <p className="temperature">{Math.round(data.list[4].main.temp)}°</p>
          </div>
          <div className="hour-weather">
            <p className="hour">18:00</p>
            <img className="img-hours" src={clear} alt="" />
            <p className="temperature">{Math.round(data.list[6].main.temp)}°</p>
          </div>
        </div>
      ) : null}
      {tomorrow ? (
        <div className="hours-box">
          <div className="hour-weather">
            <p className="hour">00:00</p>
            <img className="img-hours" src={nightCloudy} alt="" />
            <p className="temperature">{Math.round(data.list[8].main.temp)}°</p>
          </div>
          <div className="hour-weather">
            <p className="hour">06:00</p>
            <img className="img-hours" src={cloudy} alt="" />
            <p className="temperature">
              {Math.round(data.list[10].main.temp)}°
            </p>
          </div>
          <div className="hour-weather">
            <p className="hour">12:00</p>
            <img className="img-hours" src={clear} alt="" />
            <p className="temperature">
              {Math.round(data.list[12].main.temp)}°
            </p>
          </div>
          <div className="hour-weather">
            <p className="hour">18:00</p>
            <img className="img-hours" src={clear} alt="" />
            <p className="temperature">
              {Math.round(data.list[14].main.temp)}°
            </p>
          </div>
        </div>
      ) : null}
      {dayAfter ? (
        <div className="hours-box">
          <div className="hour-weather">
            <p className="hour">00:00</p>
            <img className="img-hours" src={nightCloudy} alt="" />
            <p className="temperature">
              {" "}
              {Math.round(data.list[16].main.temp)}°
            </p>
          </div>
          <div className="hour-weather">
            <p className="hour">06:00</p>
            <img className="img-hours" src={cloudy} alt="" />
            <p className="temperature">
              {" "}
              {Math.round(data.list[18].main.temp)}°
            </p>
          </div>
          <div className="hour-weather">
            <p className="hour">12:00</p>
            <img className="img-hours" src={clear} alt="" />
            <p className="temperature">
              {" "}
              {Math.round(data.list[20].main.temp)}°
            </p>
          </div>
          <div className="hour-weather">
            <p className="hour">18:00</p>
            <img className="img-hours" src={clear} alt="" />
            <p className="temperature">
              {" "}
              {Math.round(data.list[22].main.temp)}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default HoursForecast;
