import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "../index.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import Img1 from '../assets/logo.png'
import Img2 from '../assets/playing.jpg'
import Img3 from '../assets/dogs2.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={Img1} className="sliderimg" onDragStart={handleDragStart} role="presentation" />,
  <img src={Img2} className="sliderimg" onDragStart={handleDragStart} role="presentation" />,
  <img src={Img3} className="sliderimg" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}
export default Gallery