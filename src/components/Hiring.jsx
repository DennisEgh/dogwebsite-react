import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hiring from "../assets/hiring.jpg";
import hiringdog from "../assets/hiringdog.jpg";

function Hiring() {
  const [image, setImage] = useState();
  const [imageTwo, setImageTwo] = useState();

  useEffect(() => {
    const image = new Image();
    const imageTwo = new Image();

    imageTwo.src = hiringdog;
    image.src = hiring;
    image.onload = () => {
      setImage(image);
    };
    imageTwo.onload = () => {
      setImageTwo(imageTwo);
    };
  });

  return (
    <section id="hiring__donations">
      {image ? (
        <div className="hiring__container">
          <Link className="hiring__anchor" to="/"></Link>
          <img className="hiring__img" src={hiring} alt="" />
          <div className="hiring__content">
            <div className="title__container">
              <h1 className="hiring__title">PawMate is Hiring</h1>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </div>
            <p className="hiring__para">
              View our current job openings for staff veterinarians and
              veterinary technicians.
            </p>
          </div>
        </div>
      ) : (
        <div className="skeleton__two"></div>
      )}

      {imageTwo ? (
        <div className="hiring__container">
          <Link className="hiring__anchor" to="/"></Link>
          <img className="hiring__img" src={hiringdog} alt="" />
          <div className="hiring__content">
            <div className="title__container">
              <h1 className="hiring__title">PawMates</h1>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </div>
            <p className="hiring__para">
              Our monthly donors are always on the job, helping the dogs that
              need it the most. Join a good cause. Become a PawMate!
            </p>
          </div>
        </div>
      ) : (
        <div className="skeleton__two"></div>
      )}
    </section>
  );
}
export default Hiring;
