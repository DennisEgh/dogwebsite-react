import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import hiring from "../assets/hiring.jpg"
import hiringdog from "../assets/hiringdog.jpg"

 function Hiring() {
  return (
    <section id="hiring__donations">
      <div className="hiring__container">
        <Link className="hiring__anchor" to="/">
        </Link>
        <img className="hiring__img" src={hiring} alt="" />
        <div className="hiring__content">
        <div className="title__container">
<h1 className="hiring__title">PawMate is Hiring</h1>
<FontAwesomeIcon icon="fa-solid fa-chevron-right" />

        </div>
            <p className="hiring__para">
            View our current job openings for staff veterinarians and veterinary technicians.  
            </p>
            
        </div>
      </div>
      <div className="hiring__container">
        <Link className="hiring__anchor" to="/">
        </Link>
        <img className="hiring__img" src={hiringdog} alt="" />
        <div className="hiring__content">
         <div className="title__container">

            <h1 className="hiring__title">PawMates</h1>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
         </div>
            <p className="hiring__para">
            Our monthly donors are always on the job, helping the dogs that need help the most. Join a good cause today!
            </p>
           
        </div>
      </div>
    </section>
  );
}
export default Hiring