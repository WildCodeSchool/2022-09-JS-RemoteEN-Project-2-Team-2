import { useState } from "react";
import Search from "./components/search/search";
import MainContainer from "./components/main-container/main-container";
import SavedLocations from "./components/SavedLocations/SavedLocations";
import SubscribeBtn from "./components/subscribe/SubscribeBtn";
import "./App.css";
import logo from "./assets/logo/suni_logo.png";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import HoursForecast from "./components/HoursForecast/HoursForecast";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
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
    <div className="appContainerDesktop">
      <Search onSearchChange={handleOnSearchChange} />
      <Toggle toggled={toggled} onClick={handleClick} />
      {currentWeather && <MainContainer data={currentWeather} />}
      <HoursForecast />
      <SavedLocations />
      <SubscribeBtn />
      <div className="weatherMain">
        <div className="myFooter">
          <img className="sunnyLogo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
