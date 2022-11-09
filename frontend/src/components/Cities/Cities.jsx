import React from "react";
import clear from "../../assets/clear.svg";
import "./Cities.css";
import removeButtonDarkMode from "../../assets/removeButtonDarkMode.svg";
import removeButton from "../../assets/removeButton.svg";

function Cities({state}) {
  return (
    <div className="saved-components">
      <div className="left">
        <div className="cities-button-flexbox">
          <button className={state == true ? "remove-buttonDark" : "remove-button"} type="button">
            <img src={removeButtonDarkMode} alt="" />
          </button>
          <div className="city-flex">
            <h3 className={state == true ? "cities-name-savedDark" : "cities-name-savedDark"}>Barcelona</h3>
            <p className={state == true ? "country-name-savedDark" : "country-name-saved"}>Spain</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="saved-icon" src={clear} alt="" />
        <p className={state == true ? "saved-temperatureDark" : "saved-temperature"}>14°</p>
      </div>
    </div>
  );
}

export default Cities;
