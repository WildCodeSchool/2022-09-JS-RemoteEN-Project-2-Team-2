import React from "react";
import "./SubscribeBtn.css";

function SubscribeBtn({state}) {
  return (
    
    <div className="subscribe-container-flex">
      
      <button className={state == true ? "subButtonDark" : "subButton"} type="button">
        Subscribe now
      </button>
    </div>
  );
}

export default SubscribeBtn;
