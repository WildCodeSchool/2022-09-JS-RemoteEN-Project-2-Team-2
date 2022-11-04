import React from "react";
import button from "../../assets/Button.svg";
import Cities from "../Cities/Cities";
import "./SavedLocations.css";
import Rectangle from "../../assets/Rectangle.png";

function SavedLocations() {
  const background = {
    backgroundImage: `url(${Rectangle})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "50% auto",
    borderRadius: "20px 20px 0px 0px",
  };

  const backgroundDesktop = {
    backgroundImage: `url(${Rectangle})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "57% auto",
    borderRadius: "20px 20px 0px 0px",
  };
  return (
    <div>
      <div className="savedlocations-box">
        <div
          style={window.screen.width > 1024 ? backgroundDesktop : background}
        >
          <div className="button-flexbox">
            <button className="adding-saved-locations" type="button">
              <img className="img-button" src={button} alt="" />
            </button>
          </div>
          <div className="box-saved-locations">
            <h3 className="saved-title">SAVED LOCATIONS</h3>
          </div>
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
