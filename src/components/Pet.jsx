import React from "react";
import fontistoClock from "./assets/clock.svg";

import image from "./assets/sunglasses.svg";
import layer3 from "./assets/main-corgi-1.svg";
import layer15 from "./assets/bowl-full.svg";
import "./stylesheets/pet.css";
import vector2 from "./assets/connect.svg";
import vector from "./assets/bone.svg";
import {useNavigate} from "react-router-dom";


export default function Pet() {
    const navigate = useNavigate()
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">bostonhacks’s Corgi</div>

          <div className="login" onClick={() => navigate('/tasks')}>
            <button className="button">View Tasks</button>
          </div>
        </div>

        <div className="overlap-group" onClick={() => navigate('/connect')}>
          <img className="vector" alt="Vector" src={vector2} />
        </div>

        <div className="vector-wrapper">
          <img className="img" alt="Vector" src={vector} />
        </div>

        <div className="fontisto-clock-wrapper" onClick={() => navigate('/checkin')}>
          <img
            className="fontisto-clock"
            alt="Fontisto clock"
            src={fontistoClock}
          />
        </div>

        <div className="img-wrapper" onClick={() => navigate('/customize')}>
          <img className="vector-2" alt="Vector" src={image} />
        </div>

        <div className="overlap-2">
          <img className="layer" alt="Layer" src={layer3} />
        </div>

        <div className="bowl-empty">
          <img className="layer-2" alt="Layer" src={layer15} />
        </div>
      </div>
    </div>
  );
};
