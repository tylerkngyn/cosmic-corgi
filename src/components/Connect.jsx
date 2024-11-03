import React from "react";

import layer3 from "./assets/main-corgi-1.svg";
import "./stylesheets/connect.css";
import {useNavigate} from "react-router-dom";

export default function Connect() {
  const navigate = useNavigate()
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="connect-title">Connect with friends!</div>

        <div className="overlap-group20">
          <div className="rectangleAA" />

          <div className="text-wrapper-2">
            <input class="id-input" placeholder="Friend ID"></input>
          </div>
        </div>

        <div className="login2" onClick={() => navigate('/connected')}>
          <button className="connect-button">Connect</button>
        </div>

        <div className="overlap5">
          <div className="text-wrapper-3">X</div>
        </div>

        <div className="overlap-27">
          <img className="layer55" alt="Layer" src={layer3} />
          
        </div>
      </div>
    </div>
  );
};
