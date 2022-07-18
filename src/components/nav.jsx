import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Magnify from "../assets/magnifying.png";
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

            <div className="user">
            <FontAwesomeIcon className="user__icon" icon="fa-solid fa-circle-user" />
            <p className="user__para">My Pages</p>
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
            </div>

        <div className="nav__search">
          <input
            className="search"
            type="text"
            placeholder="Find your lifetime companion breed..."
          ></input>
          <button className="search__btn">
            <img className="search__icon" src={Magnify} alt="" />
          </button>
        </div>
      </div>
      <div className="nav__container--lower">
      <hr className="linebreak" />
      <div className="nav__links--container">

      <Navlinks></Navlinks>
      </div>
      <hr className="linebreak__lower" />
      </div>
    </nav>
  );
};
export default Nav;
