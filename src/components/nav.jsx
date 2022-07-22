import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navlinks from "../subcomponents/navlinks";



const Nav = () => {


function openSearch(){
  let element = document.querySelector(".interaction__container")
  element.classList.toggle("search__active");
}



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
      
          <li className="interaction" id="search">
            <div className="interaction__container--search">

            <FontAwesomeIcon onClick={openSearch} icon="fa-solid fa-magnifying-glass" />
            <p className="search__para" onClick={openSearch}>SEARCH</p>
            
            </div>
            
            

            
            <FontAwesomeIcon onClick={openSearch} icon="fa-solid fa-circle-xmark" />
            <input className="search__input" type="text" placeholder="What are you looking for?"
            />
            
            
          </li>
          <li className="interaction">
            <div className="interaction__container--user">

          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
            <p className="search__para">LOG IN</p>
            </div>
          </li>
        </ul>
      </div>

      <Navlinks></Navlinks>
    </nav>
  );
};
export default Nav;
