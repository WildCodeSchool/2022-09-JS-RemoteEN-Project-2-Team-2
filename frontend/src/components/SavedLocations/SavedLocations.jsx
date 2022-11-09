import React from "react";
import button from "../../assets/Button.svg";
import Cities from "../Cities/Cities";
import "./SavedLocations.css";
import RectangleDark from "../../assets/RectangleDark.png";

function SavedLocations() {
  const backgroundDark = {
    backgroundImage: `url(${RectangleDark})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "50% auto",
    borderRadius: "20px 20px 0px 0px",
  };

  const backgroundDesktopDark = {
    backgroundImage: `url(${RectangleDark})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "57% auto",
    borderRadius: "20px 20px 0px 0px",
  };
  return (
    <div>
      <div className="savedlocations-boxDark">
        <div
          style={
            window.screen.width > 1024 ? backgroundDesktopDark : backgroundDark
          }
        >
          <div className="button-flexbox">
            <button className="adding-saved-locations" type="button">
              <img className="img-button" src={button} alt="" />
            </button>
          </div>
          <div className="box-saved-locations">
            <h3 className="saved-titleDark">SAVED LOCATIONS</h3>
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
