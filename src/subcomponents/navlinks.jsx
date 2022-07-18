import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from "react-router-dom";

const Navlinks = () => {
    return(
        <div className="nav__links">
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
              Dogs
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
              Puppies
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
            Veterinary
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
            Store
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
            Services
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor">
            Bounty Hunting
            </Link>
          </li>
        <div className="cart__icon">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </div>
        </ul>
      </div>
    )
}

export default Navlinks;