import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SubscribeBtn.css";
import Subscribe from "./components/Subscribe";

function SubscribeBtn({ darkThemeOn }) {
  const [buttonSubbtn, setButtonSubbtn] = useState(false);

  const [firstname, setFirstname] = useState("");
  useEffect(() => {}, [firstname]);

  const [lastname, setLastname] = useState("");
  useEffect(() => {}, [lastname]);

  const [email, setEmail] = useState("");
  useEffect(() => {}, [email]);

  const [isUserSubscribed, setIsUserSubscribed] = useState(false);
  const [isUserSubscribedErr, setIsUserSubscribedErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/weather/subscribe", {
        firstname,
        lastname,
        email,
      })
      .then((res) => {
        setIsUserSubscribed(true);
        setFirstname("");
        setLastname("");
        setEmail("");
      })
      .catch((err) => {
        setIsUserSubscribedErr(true);
        console.error(err);
      });
  };

  const handleClose = () => {
    setButtonSubbtn(false);
    setIsUserSubscribed(false);
    setIsUserSubscribedErr(false);
    setFirstname("");
    setLastname("");
    setEmail("");
  };

  return (
    <div className="subscribe-container-flex">
      <button
        className={darkThemeOn === true ? "subButtonDark" : "subButton"}
        type="button"
        onClick={() => setButtonSubbtn(true)}
      >
        Subscribe now
      </button>
      <Subscribe trigger={buttonSubbtn} setTrigger={handleClose}>
        <div>
          <h3>Subscribe Now!</h3>
        </div>
        <form onSubmit={handleSubmit} className="App">
          <label className="fcss" htmlFor="firstname">
            Firstname:
          </label>
          <input
            type="text"
            placeholder=""
            value={firstname}
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
          />
          <label className="lcss" htmlFor="lastname">
            Lastname:
          </label>
          <input
            type="text"
            placeholder=""
            value={lastname}
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
          <label className="ecss" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            placeholder="your@mail.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input className="scss" type="submit" value="submit" />
        </form>
        {isUserSubscribed && <h3>Thank you for subscribing!</h3>}
        {isUserSubscribedErr && <h3>Failed to Subcribed</h3>}
      </Subscribe>
    </div>
  );
}

export default SubscribeBtn;
