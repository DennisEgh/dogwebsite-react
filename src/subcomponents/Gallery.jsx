import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "../index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Img1 from "../assets/logo.png";
import Img2 from "../assets/playing.jpg";
import Img3 from "../assets/dogs2.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="item" data-value="1">
    <img className="item--second" src={Img2} alt="" />
    <h1 className="item--third">Hello</h1>
  </div>,

  <div className="item" data-value="2">
    <img className="item--second" src={Img2} alt="" />
  </div>,

  <div className="item" data-value="3">
    <img className="item--second" src={Img2} alt="" />
  </div>,
];

const Gallery = () => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = Img2;
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
          <AliceCarousel mouseTracking items={items} />
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
