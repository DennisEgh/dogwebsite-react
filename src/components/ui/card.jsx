import React from "react";

import { Link } from "react-router-dom";

export default function Card({data}) {

  

  return (
<>
    {data ? (
        <>
     
     {data.map((data) => (
        <Link to="/" key={data.id}>

        <div className="adopt__information--container" >
          <div className="card__img--holder">
            <img className="card__img" src={data.image.url} alt="" />
          </div>
          <div className="card__content--container">
            <h3 className="card__title">{data.name}</h3>
            <p className="card__title--para">{data.bred_for}</p>
          </div>
        </div>
        </Link>
      ))}
      ;
        </>
      ) : (
          <>
          {new Array(4).fill(0).map((_, index) =>( 
            <div className="skeleton__four" key={index}>
            <div className="skeleton__four--title"></div>
            <div className="skeleton__four--title--para"></div>
         </div>
          ))}
        </>
      )}


  </>
  );
}
