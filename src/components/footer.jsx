import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png"
import instagram from "../assets/insta.jpg"
import youtube from "../assets/youtube.jpg"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.svg"

export default function footer() {
  return (
    <section id="footer">
      <div className="footer__wrapper">
        <div className="footer__columns">
          <div className="footer__column">
            <h4 className="footer__column--title">Who We Are</h4>
            <ul className="column__lists">
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Contact Us
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Careers
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  History
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column--title">What We do</h4>
            <ul className="column__lists">
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Our Mission
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Why Prevent Cruelty?
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Publications
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Annual Reports
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column--title">Resources</h4>
            <ul className="column__lists">
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Spay/Neuter
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Dog Training
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Report Cruelty
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Lost/Found Pet?
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column--title">Donate</h4>
            <ul className="column__lists">
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Ways to Donate
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Manage Your Gift
                </Link>
              </li>
              <li className="column__list">
                <Link to="/" className="column__list--anchor">
                  Donor Recognition
                </Link>
              </li>
            </ul>
          </div>
        </div>
<div className="social__links">
    <h4 className="footer__column--title">Connect With Us</h4>
    <div className="social__links__container">
        <div className="social__link">
            <Link to="/" className="social__link--anchor">
            <img className="social__link--img" src={facebook} alt="" />
            </Link>
        </div>
        <div className="social__link">
            <Link to="/" className="social__link--anchor">
            <img className="social__link--img" src={instagram} alt="" />
            </Link>
        </div>
        <div className="social__link">
            <Link to="/" className="social__link--anchor">
            <img className="social__link--img" src={youtube} alt="" />
            </Link>
        </div>
        <div className="social__link">
            <Link to="/" className="social__link--anchor">
            <img className="social__link--img" src={twitter} alt="" />
            </Link>
        </div>
        <div className="social__link">
            <Link to="/" className="social__link--anchor">
            <img className="social__link--img" src={linkedin} alt="" />
            </Link>
        </div>
    </div>
<Link className="footer__btn" to="/">NewsLetter Sign Up</Link>
</div>


      </div>
<p className="footer__para">
        	Copyright © 2022 PawMate  <br />
            PawMate is a 501(C)(3) Nonprofit registered in the US under EIN: 04-2103597
             </p>
    </section>
  );
}
