import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "../index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Img1 from "../assets/dog1.jpg"





const items = [
  <div className="item pic--one" data-value="1">
    <div className="item__content--wrapper--one">
      <h1 className="item__title--one">Kindness <br />
      & Care <br />
       for <br />
        Animals
        </h1>

        <p className="item__para--one">
          Help us care for our best friends <br />
           who've ran into bad luck <br />
            and <span className="underline">NEED</span> our help.
        </p>

       <button className="item__button--one">Donate Now 
       
       </button>
    </div>
  </div>,

  <div className="item pic--two" data-value="2">
   <div className="item__content--wrapper--two"></div>
  </div>,

  <div className="item pic--three" data-value="3">
    <div className="item__content--wrapper--three"></div>
    
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
          mouseTracking items= {items}
          autoPlay={true}
          autoPlayInterval={3000}
          infinite={true}
          
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
