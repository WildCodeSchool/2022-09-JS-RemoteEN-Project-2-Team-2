import React from "react";
import clear from "../../assets/clear.svg";
import "./Cities.css";

function Cities() {
  return (
    <div className="saved-components">
      <div className="left">
        <h3 className="cities-name-saved">KYIV</h3>
        <p className="country-name-saved">Ukraine</p>
      </div>
      <div className="right">
        <img className="saved-icon" src={clear} alt="" />
        <p className="saved-temperature">14°</p>
      </div>
    </div>
  );
}

export default Cities;
