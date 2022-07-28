import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Food from "../components/ui/food";
import Price from "../components/ui/price";
import Rating from "../components/ui/rating";

export default function FoodInfo({ dogfoods }) {
  const { id } = useParams();
  const dogfood = dogfoods.find((dogfoods) => +dogfoods.id === +id);

  return (
    

    
    <div id="dogfood__body">
      <main id="dogfood__main">
        <div className="dogfood__container">
          <div className="dogfood__row">
            <div className="dogfood__selected--top">
              <Link to="/store" className="dogfood__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/store" className="dogfood__link">
                <h2 className="dogfood__selected--title--top">Foods</h2>
              </Link>
            </div>
            <div className="dogfood__selected">
              <figure className="dogfood__selected-figure">
                <img
                  src={dogfood.url}
                  alt=""
                  className="dogfood__selected--img"
                />
              </figure>
              <div className="dogfood__selected--description">
                <h2 className="dogfood__selected--title">{dogfood.title}</h2>
                <Rating rating={dogfood.rating} />
                <div className="dogfood__selected--price">
                  <Price
                    originalPrice={dogfood.originalPrice}
                    salePrice={dogfood.salePrice}
                  />
                </div>
                <div className="dogfood__summary">
                  <h3 className="dogfood__summary--title">Summary</h3>
                  <div className="dogfood__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    vel, temporibus vero ducimus veniam assumenda fuga est
                    quibusdam odio ratione, laborum consequatur quae molestias
                    hic delectus laudantium facere minus, nesciunt harum? Sequi
                    sed cum alias iusto minima rerum, sint at odit dignissimos
                    qui odio pariatur quibusdam magni sapiente, deleniti
                    repellat.
                  </div>
                  <div className="dogfood__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos commodi excepturi ullam! Optio natus possimus minima
                    delectus quam sint, ea, maxime, numquam culpa labore iste!
                    Quae quidem ab ad possimus?
                  </div>
                  <button className="cart__btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dogfood__container">
          <div className="dogfood__row">
            <div className="dogfood__selected--top">
              <h2 className="dogfood__selected--title--top">
                You may also like
              </h2>
            </div>
            <div className="food__all">
            {dogfoods
              .filter((dogfood) => dogfood.rating === 5 && +dogfood.id !== +id)
              .slice(0, 4)
              .map((dogfood) => (
                <Food dogfood={dogfood} key={dogfood.id} />
              ))}
          </div>
          </div>
     
        </div>
      </main>
    </div>
    
  );
}
