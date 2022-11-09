import React from "react";
import "./SubscribeBtn.css";

function SubscribeBtn({ darkThemeOn }) {
  return (
    <div className="subscribe-container-flex">
      <button
        className={darkThemeOn === true ? "subButtonDark" : "subButton"}
        type="button"
      >
        Subscribe now
      </button>
    </div>
  );
}

export default SubscribeBtn;
