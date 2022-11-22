import { useState, useEffect } from "react";
import Search from "./components/search/search";
import MainContainer from "./components/main-container/main-container";
import SubscribeBtn from "./components/subscribe/SubscribeBtn";
import "./App.css";
import logo from "./assets/logo/suni_logo.png";
import logoWhite from "./assets/logo/suni_logo_white.png";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import HoursForecast from "./components/HoursForecast/HoursForecast";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const lat = 48.8534;
    const lon = 2.3488;
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: response.label, ...weatherResponse });
        setForecast({ city: response.label, ...forecastResponse });
      })
      .catch(console.warn());
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.warn());
  };

  console.warn(currentWeather);
  console.warn(forecast);

  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };

  return (
    <div
      className={toggled ? "appContainerDesktopDark" : "appContainerDesktop"}
    >
      <Search onSearchChange={handleOnSearchChange} />
      <Toggle toggled={toggled} onClick={handleClick} />

      {currentWeather && (
        <MainContainer darkThemeOn={toggled} data={currentWeather} />
      )}
      {forecast && <HoursForecast darkThemeOn={toggled} data={forecast} />}

      <SubscribeBtn darkThemeOn={toggled} />

      <div className="weatherMain">
        <div className="myFooter">
          <img
            className={toggled ? "sunnyLogoDark" : "sunnyLogo"}
            src={toggled ? logoWhite : logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
