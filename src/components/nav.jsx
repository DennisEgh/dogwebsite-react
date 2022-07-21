import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navlinks from "../subcomponents/navlinks";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container--upper">
        <Link to="/">
          <div className="nav__logo--container">
            <figure className="nav__logo">
              <img className="logo" src={Logo} alt="" />
            </figure>
            <h1 className="nav__logo--title">PawMate</h1>
          </div>
        </Link>

        <ul className="interaction__container">
          <li className="interaction">
            <p className="search__para">HOW TO HELP</p>
          </li>
          <li className="interaction">
            <p className="search__para">REPORT CRUELTY</p>
          </li>

          <li className="interaction">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <p className="search__para">SEARCH</p>
          </li>
        </ul>
      </div>

      <Navlinks></Navlinks>
    </nav>
  );
};
export default Nav;
