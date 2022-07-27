import React from "react";
import { Link } from "react-router-dom";
import dog from "../assets/dogsresource1.jpg";
import dog2 from "../assets/dogsresource2.jpg";
import dog3 from "../assets/dogsresource3.jpg";
import dogforeground from "../assets/dogforeground.png"
import dogforeground2 from "../assets/dogforeground2.png"
import dogforeground3 from "../assets/dogforeground3.png"

export default function dogsresource() {
  return (
    <section id="dogsresource">
      <div className="dogsresource__wrapper">
        <div className="dogsresource__columns">

          <div className="dogsresource__column dog__training">
            <Link className="dogsresource__column--anchor" to="/"></Link>
            <div className="dogsresource__content">
              <img className="dogsresource__img" src={dog} alt="" />
              <div className="dogsresource__foreground">
                <img className="dogsresource__img--foreground" src={dogforeground} alt="" />
                <h3 className="dogsresource__title">Dog Training</h3>
                </div>
                <div className="dogsresource__hidden">
                    <h3 className="dogsresource__title hidden">Dog Training</h3>
                    <p className="dogsresource__para">Our dogs training programs revolve exclusively around clicker and rewards-based methods.</p>
                </div>
            </div>
          </div>
          <div className="dogsresource__column dog__adopt">
            <Link className="dogsresource__column--anchor" to="/"></Link>
            <div className="dogsresource__content">
              <img className="dogsresource__img" src={dog2} alt="" />
              <div className="dogsresource__foreground">
              <img className="dogsresource__img--foreground" src={dogforeground2} alt="" />
                <h3 className="dogsresource__title">Adopt a Dog</h3>
                </div>
                <div className="dogsresource__hidden">
                    <h3 className="dogsresource__title hidden">Adopt a Dog</h3>
                    <p className="dogsresource__para">We care for and adopt out thousands of homeless and unwanted dogs each year.</p>
                </div>
            </div>
          </div>
          <div className="dogsresource__column dog__advocate">
            <Link className="dogsresource__column--anchor" to="/"></Link>
            <div className="dogsresource__content">
              <img className="dogsresource__img" src={dog3} alt="" />
              <div className="dogsresource__foreground">
              <img className="dogsresource__img--foreground" src={dogforeground3} alt="" />
                <h3 className="dogsresource__title">Advocate for Dogs</h3>
              </div>
                <div className="dogsresource__hidden">
                    <h3 className="dogsresource__title hidden">Advocate for Dogs</h3>
                    <p className="dogsresource__para">See what dog protection legislation we support this session.</p>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
