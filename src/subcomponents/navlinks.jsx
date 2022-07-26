import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import adoptable from "../assets/adoptabledogs.jpg";
import dogvocate from "../assets/dogvocate.jpg";
import wishlist from "../assets/wishlistdog.jpg";
import dogtraining from "../assets/dogtraining.jpg"
import spaydog from "../assets/spaydog.jpg"
import community from "../assets/theoffice.jpg"

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
                        <Link to="/" className="cover__img">
                          <img className="column__img" src={adoptable} alt="" />
                          <h1 className="column__title column__title--special">
                            SEARCH ADOPTABLE DOGS
                          </h1>
                          <p className="column__para">
                            Give a dog the home they deserve. Find yours today.
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="column__container">
                      <div className="column column__three">
                        <Link to="/" className="cover__img">
                          <img className="column__img" src={dogvocate} alt="" />
                          <h1 className="column__title column__title--special">
                            DOGVOCATES
                          </h1>
                          <p className="column__para">
                            Help us help dogs in our community, and encourage
                            others to do the same.{" "}
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="column__container">
                      <div className="column column__four">
                        <Link to="/" className="cover__img">
                          <img src={wishlist} alt="" className="column__img" />

                          <h1 className="column__title column__title--special">
                            WISHLIST
                          </h1>
                          <p className="column__para">
                            Donate dog care items to our Adoption Centers!
                          </p>
                        </Link>
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

                <div className="nav__link--dropdown vet__dropdown">
                  <div className="columns">
                    <div className="column__container">
                      <div className="column column__one">
                        <h1 className="column__title borderbot">SERVICES</h1>
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
                              24/7 Emergency Service
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="column__container">
                      <div className="column column__one">
                        <h1 className="column__title borderbot">
                          HOURS AND PATIENT INFO
                        </h1>
                        <ul className="column__one--lists">
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Appointment Hours
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Visiting Hours & Drop in
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Admissions and Payment Info
                            </Link>
                          </li>
                          <li className="column__one--list">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Our Doctors
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="column__container">
                      <div className="column column__one">
                        <h1 className="column__title borderbot">
                          EMERGENCY: WASHINGTON DC
                        </h1>
                        <ul className="column__one--lists">
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              512-821-9371
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Directions
                            </Link>
                          </li>
                        
                        </ul>
                      </div>
                    </div>

                    <div className="column__container">
                      <div className="column column__one">
                        <h1 className="column__title borderbot">
                          EMERGENCY: TEXAS
                        </h1>
                        <ul className="column__one--lists">
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              617-562-7812
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Directtions
                            </Link>
                          </li>
                          
                         
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </li>

              <li className="nav__link pro-res">
                <Link to="/" className="nav__link--anchor pro-res">
                  PROGRAMS & RESOURCES
                  <div className="nav__link--square pro-res__square"></div>
                </Link>

                <div className="nav__link--dropdown pro-res__dropdown">
                  <div className="columns">
                    <div className="column__container">
                      <div className="column column__one">
                        <ul className="column__one--lists">
                          <li className="column__one--list borderbot">
                          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Pet Owner Resources
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Dog Advocacy
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Humane Education
                            </Link>
                          </li>
                          <li className="column__one--list borderbot">
                          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Surrender a Dog
                            </Link>
                          </li>
                          <li className="column__one--list">
                          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <Link to="/" className="column__one--anchor">
                              Lost or Found a dog?
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="column__container">
                      <div className="column column__two">
                        <Link to="/" className="cover__img">
                          <img className="column__img" src={dogtraining} alt="" />
                          <h1 className="column__title column__title--special">
                            DOG TRAINING & BEHAVIOR
                          </h1>
                          <p className="column__para">
                            View all of our rewards-based training classes here.
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="column__container">
                      <div className="column column__three">
                        <Link to="/" className="cover__img">
                          <img className="column__img" src={spaydog} alt="" />
                          <h1 className="column__title column__title--special">
                            SPAY & NEUTER PROGRAMS
                          </h1>
                          <p className="column__para">
                            Help us help dogs in our community, and encourage
                            others to do the same.{" "}
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="column__container">
                      <div className="column column__four">
                        <Link to="/" className="cover__img">
                          <img src={community} alt="" className="column__img" />

                          <h1 className="column__title column__title--special">
                            PAWMATE C.A.R.E.S
                          </h1>
                          <p className="column__para">
                            See how we're giving back to the community. Enroll in our monthly giftbasktet today for FREE.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
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
