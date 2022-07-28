import React, { useState } from "react";
import Food from "../components/ui/food";

const Store = ({ dogfood: initialDogfood }) => {
  const [dogfood, setDogfood] = useState(initialDogfood);

  function filterFoods(filter) {
    if (filter === "LOW_TO_HIGH") {
      setDogfood(
        dogfood
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setDogfood(
        dogfood
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setDogfood(dogfood.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div className="store__body">
      <main id="store__main">
        <div className="section">
          <div className="store__container">
            <div className="store__row">
              <div className="store__header">
                <h2 className="store__title">All Food</h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterFoods(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="food__all">
                {dogfood.map((dogfood) => (
                  <Food dogfood={dogfood} key={dogfood.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;
