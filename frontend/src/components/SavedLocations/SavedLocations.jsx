import React from "react";
import button from "../../assets/Button.svg";
import buttonDark from "../../assets/ButtonDark.svg";
import Cities from "../Cities/Cities";
import "./SavedLocations.css";
import RectangleDark from "../../assets/RectangleDark.png";
import Rectangle from "../../assets/Rectangle.png";

function SavedLocations({ darkThemeOn }) {
  const background = {
    backgroundImage: `url(${darkThemeOn ? RectangleDark : Rectangle})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "50% auto",
    borderRadius: "20px 20px 0px 0px",
  };

  const backgroundDesktop = {
    backgroundImage: `url(${darkThemeOn ? RectangleDark : Rectangle})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "57% auto",
    borderRadius: "20px 20px 0px 0px",
  };
  return (
    <div>
      <div
        className={
          darkThemeOn === true ? "savedlocations-boxDark" : "savedlocations-box"
        }
      >
        <div
          style={window.screen.width > 1024 ? backgroundDesktop : background}
        >
          <div className="button-flexbox">
            <button className="adding-saved-locations" type="button">
              <img
                className={
                  darkThemeOn === true ? "img-buttonDark" : "img-button"
                }
                src={darkThemeOn === true ? buttonDark : button}
                alt=""
              />
            </button>
          </div>
          <div className="box-saved-locations">
            <h3
              className={
                darkThemeOn === true ? "saved-titleDark" : "saved-title"
              }
            >
              SAVED LOCATIONS
            </h3>
          </div>
          <div className="flex-box-container">
            <div className="saved-cities-components">
              <Cities darkThemeOn={darkThemeOn} />
              <Cities darkThemeOn={darkThemeOn} />
              <Cities darkThemeOn={darkThemeOn} />
              <Cities darkThemeOn={darkThemeOn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedLocations;
