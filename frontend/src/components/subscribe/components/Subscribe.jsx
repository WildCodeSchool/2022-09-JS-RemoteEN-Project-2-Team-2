import React from "react";
import "../SubscribeBtn.css";

function Subscribe({ trigger, children, setTrigger }) {
  return trigger ? (
    <div className="subs">
      <div className="subs-inner">
        <button
          type="button"
          className="close-btn"
          onClick={() => setTrigger()}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Subscribe;
