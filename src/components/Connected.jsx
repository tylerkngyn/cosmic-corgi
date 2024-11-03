import React from "react";
import image from "./assets/main-corgi-1.svg";
import layer3 from "./assets/main-corgi-1.svg";
import line1 from "./assets/line.png";
import "./stylesheets/connected.css";

export default function Connected() {
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="connected-title">Connected!</div>


        <div className="corgi-duo">
          <img className="layerCorgi" alt="Layer" src={layer3} />


          <img className="imgCorgi" alt="Layer" src={image} />


          <img className="line" alt="Line" src={line1} />
        </div>
      </div>
    </div>
  );
};
