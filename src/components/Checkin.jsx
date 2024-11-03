import React from "react";


import layer3 from "./assets/main-corgi-1.svg";
import "./stylesheets/checkin.css"
import {useNavigate} from "react-router-dom";

let clicked = false;

export default function Checkin() {
  const navigate = useNavigate()
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="check-in-text">Check in</div>

        <p className="para">Let your corgi know how you’re feeling today!</p>

        <div className="ellipseS" onClick={function() {
          const element = document.querySelector('.ellipseS');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }
       } />

        <div className="ellipseS-2" onClick={function() {
          const element = document.querySelector('.ellipseS-2');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }
       } />

        <div className="ellipseS-3" onClick={function() {
          const element = document.querySelector('.ellipseS-3');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }
       } />

        <div className="ellipseS-4" onClick={function() {
          const element = document.querySelector('.ellipseS-4');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }
       } />



        <div className="done-buttonZ" onClick={() => navigate('/pet')}>
          <button className="done-buttonZ2">Done</button>
        </div>


        <div className="Clayer">

          <img className="CorgiLay3r" alt="Layer" src={layer3} />

        
        </div>
      </div>
    </div>
  );
};
