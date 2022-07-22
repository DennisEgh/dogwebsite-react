import React from "react";
import { Link } from "react-router-dom";
import Covidlogo from "../assets/covid.png";

function Covid() {
  return (
    <div className="covid__container">
      <div className="covid__wrapper">
        <div className="covid__inner">
          <div className="covid__header">
            <div className="covid__icon">
              <img src={Covidlogo} alt="" className="icon" />
            </div>
            <header className="covid__title">COVID-19 Information</header>
          </div>
          <div className="covid__content">
            <p className="covid__para">
              Learn more about our efforts to prevent the 
              spread of Coronavirus.
            </p>
            <Link className="covid__anchor" to="/">
              <div className="covid__btn">Learn More</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Covid;
