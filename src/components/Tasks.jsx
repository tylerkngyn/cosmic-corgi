import React from "react";
import rectangle9 from "./assets/rectangle-10.svg";
import rectangle11 from "./assets/rectangle-10.svg";
import rectangle13 from "./assets/rectangle-10.svg";
import "./stylesheets/tasks.css";

export default function Tasks() {
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="todays-tasks">Today’s Tasks</div>


        <div className="rectangle-group">

          <img className="rectangle" alt="Rectangle" src={rectangle9} />

          <div className="text-wrapper-3">Exercise</div>
        </div>

        <div className="complete-button">
          <button className="button">Complete</button>
        </div>

        <div className="rectangle-group-2">

          <img className="rectangle" alt="Rectangle" src={rectangle13} />

          <div className="text-wrapper-3">Drink water</div>
        </div>

        <div className="complete-button2">
          <button className="button">Complete</button>
        </div>

        <div className="overlap-rectangle">

          <img className="rectangle" alt="Rectangle" src={rectangle11} />

          <div className="text-wrapper-3">Study</div>
        </div>

        <div className="complete-button3">
          <button className="button">Complete</button>
        </div>
      </div>
    </div>
  );
};