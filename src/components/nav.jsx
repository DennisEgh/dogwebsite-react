import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navlinks from "../subcomponents/navlinks";
import Modal from "../subcomponents/Modal";
import { auth } from "../firebase/init.js";
import { signOut } from "firebase/auth";

const Nav = () => {
  const [user, setUser] = useState();

  function openSearch() {
    let element = document.querySelector(".interaction__container");
    element.classList.toggle("search__active");
  }

  function openLogIn() {
    document.body.classList.toggle("menu--open");
  }

  const searching = () => {
    let input = document.querySelector(".search__input");

    return input.value;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(searching());
    }
  };
  function logout() {
    signOut(auth);
    setUser();
    console.log(user)
    
    if(user){

      document.querySelector(".login").classList.remove("login__inactive");

      document.querySelector(".logout").classList.remove("logout__active");
    }
    
    
   
  }

  return (
    <>
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
                <FontAwesomeIcon
                  onClick={openSearch}
                  icon="fa-solid fa-magnifying-glass"
                />
                <p className="search__para" onClick={openSearch}>
                  SEARCH
                </p>
              </div>

              <FontAwesomeIcon
                onClick={openSearch}
                icon="fa-solid fa-circle-xmark"
              />
              <input
                onKeyPress={handleKeyPress}
                className="search__input"
                type="text"
                placeholder="What are you looking for?"
                spellCheck="false"
              />
            </li>
            <li className="interaction">
              <div className="interaction__container--user">
                <FontAwesomeIcon
                  onClick={openLogIn}
                  icon="fa-solid fa-circle-user"
                />
                <FontAwesomeIcon icon="fa-solid fa-circle" />
                <p onClick={openLogIn} className="search__para login">
                  LOG IN
                </p>
                <p onClick={logout} className="search__para logout">
                  LOG OUT
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Navlinks></Navlinks>
        <Modal user={user} setUser={setUser}></Modal>
      </nav>
      <div
        onClick={() =>
          document.body.classList.remove("menu--open", "register--open")
        }
        className="nav__bg"
      ></div>
    </>
  );
};
export default Nav;
