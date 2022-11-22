import React from "react";
import "../SubscribeBtn.css";
import close from "../../../assets/icons/close.svg";

function Subscribe({ trigger, children, setTrigger }) {
  return trigger ? (
    <div className="subs">
      <div className="subs-inner">
        <button
          type="button"
          className="close-btn"
          onClick={() => setTrigger()}
        >
          <img src={close} alt="" />
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Subscribe;
