import React from "react";
import "./HoursForecast.css";
import cloudy from "../../assets/cloudy.svg";
import nightCloudy from "../../assets/night cloudy.svg";
import clear from "../../assets/clear.svg";

function HoursForecast({ darkThemeOn }) {
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
  return (
    <div
      className={
        darkThemeOn === true ? "forecastContainerDark" : "forecastContainer"
      }
    >
      <div className={darkThemeOn === true ? "daysDark" : "days"}>
        <h3 className="dayOfWeek">Today</h3>
        <h3 className="dayOfWeek">Tomorrow</h3>
        <h3 className="dayOfWeek">{day}</h3>
      </div>
      <div className={darkThemeOn === true ? "hours-boxDark" : "hours-box"}>
        <div className="hour-weather">
          <p className={darkThemeOn === true ? "hourDark" : "hour"}>00:00</p>
          <img className="img-hours" src={nightCloudy} alt="" />
          <p
            className={darkThemeOn === true ? "temperatureDark" : "temperature"}
          >
            10°
          </p>
        </div>
        <div className="hour-weather">
          <p className={darkThemeOn === true ? "hourDark" : "hour"}>06:00</p>
          <img className="img-hours" src={cloudy} alt="" />
          <p
            className={darkThemeOn === true ? "temperatureDark" : "temperature"}
          >
            12°
          </p>
        </div>
        <div className="hour-weather">
          <p className={darkThemeOn === true ? "hourDark" : "hour"}>12:00</p>
          <img className="img-hours" src={clear} alt="" />
          <p
            className={darkThemeOn === true ? "temperatureDark" : "temperature"}
          >
            13°
          </p>
        </div>
        <div className="hour-weather">
          <p className={darkThemeOn === true ? "hourDark" : "hour"}>18:00</p>
          <img className="img-hours" src={clear} alt="" />
          <p
            className={darkThemeOn === true ? "temperatureDark" : "temperature"}
          >
            17°
          </p>
        </div>
      </div>
    </div>
  );
}

export default HoursForecast;
