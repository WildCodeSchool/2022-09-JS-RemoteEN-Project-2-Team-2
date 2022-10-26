import React from "react";
import "./App.css";
import sunny from "./assets/icons/sunny.svg";
import logo from "./assets/logo/suni_logo.png";

const App = () => {
  return (
    <div>
      <div className="weatherMain">
        <p className="myCity">Hamburg</p>
        <p className="myDate">
          26 October, <span className="weekDay">Wednesday</span>
        </p>
        <div className="myFooter">
          <img className="sunnyLogo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
