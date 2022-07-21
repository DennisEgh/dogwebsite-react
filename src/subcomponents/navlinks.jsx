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
              </Link>
            </li>

            <li className="nav__link veterinary">
              <Link to="/" className="nav__link--anchor">
                VETERINARY CARE
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/" className="nav__link--anchor">
                PROGRAMS & RESOURCES
              </Link>
            </li>
            </div>
            <div className="shop__container">
              <div className="shop__content">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                <p className="shop__para">SHOP</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
