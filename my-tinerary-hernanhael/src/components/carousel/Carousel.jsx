import React from "react";
import { useState } from "react";

function Carousel() {
  const cities = [
    {
      name: "Villa Nougués",
      image:
        "https://www.welcomeargentina.com/paseos/villa_nougues/villa-nougues-1.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index == 0) {
      setIndex(cities.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index == cities.length - 1) {
      setIndex(index == 0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="home-carousel">
      <button onClick={prev}>{"<"}</button>
      <img src={cities[0].image} alt="" />
      <button onClick={next}>{">"}</button>
    </div>
  );
}

export default Carousel;
