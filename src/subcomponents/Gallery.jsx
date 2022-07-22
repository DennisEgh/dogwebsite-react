import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "../index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Img1 from "../assets/dog1.jpg";

const items = [
  <div className="item pic--one" data-value="1">
    <div className="item__content--wrapper">
      <h1 className="item__title">
        Kindness <br />
        & Care <br />
        for <br />
        Animals
      </h1>

      <p className="item__para">
        Help us care for our best friends <br />
        who've ran into bad luck <br />
        and <span className="underline">NEED</span> our help.
      </p>

      <button className="item__button">Donate Now</button>
    </div>
  </div>,

  <div className="item pic--two" data-value="2">
    <div className="item__content--wrapper">
      <h1 className="item__title">
        Give <br />
        Them <br />
        Homes
      </h1>
      <p className="item__para">
        Our Adoption Centers care for and <br />
        adopt out thousands of homeless <br />
        dogs each year. Help us give <br />
        them the homes they deserve.
      </p>
      <button className="item__button btn__two">Search Adoptable Dogs</button>
    </div>
  </div>,

  <div className="item pic--three" data-value="3">
    <div className="item__content--wrapper">
      <h1 className="item__title">
        Compassionate <br />
        Veterinary <br />
        Care
      </h1>
      <p className="item__para">
        Over 100 veterinarians, including <br />
        46 board-certified specialists, work <br />
        side by side to provide safe, <br />
         compassionate, state-of-the-art <br />
        care.
      </p>
      <button className="item__button btn__three">
        Learn More
      </button>
    </div>
  </div>,
];

const Gallery = () => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = Img1;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  });

  return (
    <>
      {img ? (
        <>
          <AliceCarousel
            mouseTracking={false}
            items={items}
            autoPlay
            autoPlayInterval={3000}
            infinite
            animationDuration={1500}
          />
        </>
      ) : (
        <>
          <div className="skeleton"></div>
        </>
      )}
    </>
  );
};
export default Gallery;
