import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SubscribeBtn.css";
import Subscribe from "./components/Subscribe";
import fewCloudsD from "../../assets/icons/fewCloudsD.svg";
import logo from "../../assets/logo/suni_logo.png";

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
      <Subscribe
        className="subscr-pop"
        trigger={buttonSubbtn}
        setTrigger={handleClose}
      >
        <div className="subscr-form">
          <div className="suscr-header">
            <h3>Subscribe</h3>
            <p className="notification">
              Get notified about the current weather every day
            </p>
          </div>
          <form onSubmit={handleSubmit} className="App">
            <input
              required
              type="text"
              placeholder="Your firstname"
              value={firstname}
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />

            <input
              required
              type="text"
              placeholder="Your lastname"
              value={lastname}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />

            <input
              required
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input className="scss" type="submit" value="submit" />
          </form>
          {isUserSubscribed && (
            <h3 className="susc-mess">Thank you for subscribing!</h3>
          )}
          {isUserSubscribedErr && (
            <h3 className="susc-mess">Failed to subcribe</h3>
          )}
        </div>
        <div className="suscr-footer">
          <img src={fewCloudsD} alt="" />
          <img className="suscr-log" src={logo} alt="" />
        </div>
      </Subscribe>
    </div>
  );
}

export default SubscribeBtn;
