import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div className="nav__container--lower">
      <div className="nav__links--container">
        <div className="nav__links">
          <ul className="nav__link--list">
            <div className="nav__link--wrapper">
              <li className="nav__link adopt">
                <Link to="/" className="nav__link--anchor">
                  ADOPT
                  <div className="nav__link--square adopt__square"></div>
                </Link>

                <div className="nav__link--dropdown adopt__dropdown"></div>
              </li>

              <li className="nav__link veterinary vet">
                <Link to="/" className="nav__link--anchor">
                  VETERINARY CARE
                  <div className="nav__link--square vet__square"></div>
                </Link>

                <div className="nav__link--dropdown vet__dropdown"></div>
              </li>

              <li className="nav__link pro-res">
                <Link to="/" className="nav__link--anchor pro-res">
                  PROGRAMS & RESOURCES
                  <div className="nav__link--square pro-res__square"></div>
                </Link>

                
                <div className="nav__link--dropdown pro-res__dropdown">
                  
                </div>
              </li>

            </div>
            <Link className="shop__anchor" to="/store">
              <div className="shop__container">
                <div className="shop__content">
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  <p className="shop__para">SHOP</p>
                </div>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
