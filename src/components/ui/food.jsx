
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Price from "./price";
import Rating from "./rating";

export default function Food({ dogfood }) {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = dogfood.url;
    image.onload = () => {
        setTimeout(() =>{

            setImg(image);
        }, 300);
    };
  });
  return (
    <div className="food">
      {img ? (
        <>
          <Link to="/">
            <figure className="food__img--wrapper">
              <img className="food__img" src={dogfood.url} alt="" />
            </figure>
          </Link>
          <div className="food__title">
            <Link className="food__title--link" to="/">
              {dogfood.title}
            </Link>
          </div>
          <Rating rating={dogfood.rating} />
          <Price
            salePrice={dogfood.salePrice}
            originalPrice={dogfood.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="skeleton__three--img"></div>
          <div className="skeleton__three--title"></div>
          <div className="skeleton__three--rating"></div>
          <div className="skeleton__three--price"></div>
        </>
      )}
    </div>
  );
}
