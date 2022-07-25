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

                <div className="nav__link--dropdown adopt__dropdown">
                  <div className="columns">
                    <div className="column__container">
                      <div className="column column__one">
                        <h1 className="column__title borderbot">
                          ALL ADOPTION CENTERS
                        </h1>
                        <ul className="column__one--lists">
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Texas
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              New York
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Washington DC
                            </Link>
                          </li>
                          <li className="column__one--list">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Lost or Found a Pet?
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="column__container">
                      <div className="column column__two">
                        <h1 className="column__title">SEARCH ADOPTABLE DOGS</h1>
                      </div>
                    </div>
                    <div className="column__container">
                      <div className="column column__three">
                        <h1 className="column__title">DOGVOCATES</h1>
                      </div>
                    </div>
                    <div className="column__container">
                      <div className="column column__four">
                        <h1 className="column__title">WISHLIST</h1>
                      </div>
                    </div>
                  </div>
                </div>
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

                <div className="nav__link--dropdown pro-res__dropdown"></div>
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
