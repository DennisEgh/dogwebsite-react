import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/card";

export default function Adopt({ data }) {
  const [inputValue, setInputValue] = useState();

  const searching = () => {
    let input = document.querySelector(".adopt__search");
    setInputValue(input.value);
    return input.value;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(searching());
    }
  };
 


  return (
    <div id="adopt__body">
      <section id="adopt__main">
        <div className="adopt__container">
          <div className="adopt__upper">
            <div className="adopt__upper--content">
              <input
                placeholder="Find Your Favorite Breed..."
                type="text"
                className="adopt__search"
                onKeyPress={handleKeyPress}
                spellCheck="false"
              />
              <Link to="/">
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  className="adopt__glass"
                />
              </Link>
            </div>
          </div>
          <div className="adopt__lower">
            {inputValue ? (
              data
                .filter((data) => data.name === inputValue)
                .map((data) => (
                    <Card data={data} key={data.id} />
                ))
            ) : (
              <Card data={data} />
            )}
          </div>
        </div>
      </section>
      <div className="adopt__continued"></div>
    </div>
  );
}
