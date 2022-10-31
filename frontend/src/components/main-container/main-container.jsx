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
      day = "NoData";
  }

  const dateDay = new Date().toLocaleDateString("en-us", {
    weekday: "long",
  });
  const dateNumeric = new Date().toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });

  const dateUNIXrise = (data.sys.sunrise + data.timezone - 3600) * 1000;
  const sunriseUNIX = new Date(dateUNIXrise);
  const sunrise = sunriseUNIX.toLocaleDateString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });
  const sunriseArray = sunrise.split("");
  const finalSunriseTime = sunriseArray.slice(11).join("");

  const dateUNIXset = (data.sys.sunset + data.timezone - 3600) * 1000;
  const sunsetUNIX = new Date(dateUNIXset);
  const sunset = sunsetUNIX.toLocaleDateString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });

  const sunsetArray = sunset.split("");
  const finalSunsetTime = sunsetArray.slice(11).join("");

  return (
    <div>
      <div className="weatherMain">
        <p className="myCity">{data.city}</p>
        <p className="myDate">
          {dateNumeric}
          <span className="weekDay">, {dateDay}</span>
        </p>
      </div>
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
        <p className="myCityTem">{Math.round(data.main.temp)}°C</p>
        <p className="myWeather">{data.weather[0].main}</p>
      </div>
      <div className="main-container">
        <div className="days">
          <h3 className="dayOfWeek">Today</h3>
          <h3 className="dayOfWeek">Tomorrow</h3>
          <h3 className="dayOfWeek">{day}</h3>
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
            <p className="incorporated-data">
              {Math.round(data.main.feels_like)}°C
            </p>
          </div>
        </div>
        <div className="sun-position">
          <div className="sunrise">
            <h3>Sunrise</h3>
            <div className="border-Sunrise">
              <p className="sunrise-time">{finalSunriseTime}</p>
            </div>
          </div>
          <div className="sunset">
            <h3>Sunset</h3>
            <div className="border-Sunset">
              <p className="sunset-time">{finalSunsetTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
