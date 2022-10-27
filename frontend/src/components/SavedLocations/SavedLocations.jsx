import React from "react";
import button from "../../assets/Button.png";
import Cities from "../Cities/Cities";
import "./SavedLocations.css";
import Rectangle from "../../assets/Rectangle.png";

function SavedLocations() {
  const background = {
    backgroundImage: `url(${Rectangle})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "50% auto",
    ZIndex: "3",
  };
  return (
    <div>
      <div className="savedlocations-box">
        <div style={background}>
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
    </div>
  );
}

export default SavedLocations;
