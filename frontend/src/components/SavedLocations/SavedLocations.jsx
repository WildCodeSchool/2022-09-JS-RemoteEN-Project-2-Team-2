import React from "react";
import button from "../../assets/Button.png";
import Cities from "../Cities/Cities";
import "./SavedLocations.css";

function SavedLocations() {
  return (
    <div>
      <div className="savedlocations-box">
        <div className="button-flexbox">
          <button className="adding-saved-locations" type="button">
            <img src={button} alt="" />
          </button>
        </div>
        <h3 className="saved-title">SAVED LOCATIONS</h3>
        <div className="flex-box-container">
          <div className="saved-cities-components">
            <Cities />
            <Cities />
            <Cities />
            <Cities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedLocations;
