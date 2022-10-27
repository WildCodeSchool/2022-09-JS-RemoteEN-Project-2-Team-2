import React from "react";
import clear from "../../assets/clear.svg";
import "./Cities.css";
import removeButton from "../../assets/removeButton.svg";

function Cities() {
  return (
    <div className="saved-components">
      <div className="left">
        <div className="cities-button-flexbox">
          <button className="remove-button" type="button">
            <img src={removeButton} alt="" />
          </button>
          <div className="city-flex">
            <h3 className="cities-name-saved">Barcelona</h3>
            <p className="country-name-saved">Spain</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="saved-icon" src={clear} alt="" />
        <p className="saved-temperature">14°</p>
      </div>
    </div>
  );
}

export default Cities;
