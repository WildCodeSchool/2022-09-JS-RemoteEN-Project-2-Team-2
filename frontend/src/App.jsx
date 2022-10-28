import React from "react";
import Search from "@components/search/search";
import CurrentWeather from "@components/CurrentWeather/CurrentWeather";
import MainContainer from "./components/main-container/main-container";
import SavedLocations from "./components/SavedLocations/SavedLocations";
import "./App.css";
import logo from "./assets/logo/suni_logo.png";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.warn(lat);
    console.warn(lon);
  };

  return (
    <div className="App">
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      <div className="weatherMain">
        <p className="myCity">Hamburg</p>
        <p className="myDate">
          26 October, <span className="weekDay">Wednesday</span>
        </p>
      </div>
      <CurrentWeather />
      <MainContainer />
      <SavedLocations />
      <div className="weatherMain">
        <div className="myFooter">
          <img className="sunnyLogo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
