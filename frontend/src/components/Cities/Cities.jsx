import React from "react";
import clear from "../../assets/clear.svg";
import "./Cities.css";
import removeButtonDarkMode from "../../assets/removeButtonDarkMode.svg";

function Cities() {
  return (
    <div className="saved-components">
      <div className="left">
        <div className="cities-button-flexbox">
          <button className="remove-buttonDark" type="button">
            <img src={removeButtonDarkMode} alt="" />
          </button>
          <div className="city-flex">
            <h3 className="cities-name-savedDark">Barcelona</h3>
            <p className="country-name-savedDark">Spain</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="saved-icon" src={clear} alt="" />
        <p className="saved-temperatureDark">14°</p>
      </div>
    </div>
  );
}

export default Cities;
