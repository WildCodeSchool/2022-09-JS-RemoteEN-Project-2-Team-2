import React, { useState } from "react";
import "./HoursForecast.css";
import cloudy from "../../assets/cloudy.svg";
import nightCloudy from "../../assets/night cloudy.svg";
import clear from "../../assets/clear.svg";

function HoursForecast() {
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
      ) : null}
      {tomorrow ? (
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
      ) : null}
      {dayAfter ? (
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
      ) : null}
    </div>
  );
}

export default HoursForecast;
