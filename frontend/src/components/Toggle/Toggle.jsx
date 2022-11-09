import React from "react";
import "./Toggle.css";

function Toggle({ toggled, onClick }) {
  return (
    <div className="toggle-container">
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onClick}
        className={`toggle${toggled ? " night" : ""}`}
      >
        <div className="notch" />
      </div>
    </div>
  );
}

export default Toggle;
