import React from "react";
import layer3 from "./assets/main-corgi-1.svg";
import "./stylesheets/customize.css";
import {useNavigate} from "react-router-dom";

let clicked = false;

export default function Customize() {
  const navigate = useNavigate()
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="customize-text">Customize</div>

        <div className="ellipse" onClick={function() {
          const element = document.querySelector('.ellipse');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }


        }/>

        <div className="ellipse-2" onClick={function() {
          const element = document.querySelector('.ellipse-2');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }
        
      }/>

        <div className="ellipse-3" onClick={function() {
          const element = document.querySelector('.ellipse-3');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }
        
      }/>

        <div className="ellipse-4" onClick={function() {
          const element = document.querySelector('.ellipse-4');
          if (!clicked) {
            element.classList.add('clicked');
            clicked = true;
          }
          else {
            element.classList.remove('clicked');
            clicked = false;
          }
        }
        
      }/>

        <div className="d-button" onClick={() => navigate('/pet')}>
          <button className="done-button">Done</button>
        </div>


        <div className="corgi-container">
          <img className="corgi22" alt="Layer" src={layer3} />

        </div>
      </div>
    </div>
  );
};

