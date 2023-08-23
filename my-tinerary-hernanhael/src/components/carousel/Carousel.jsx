import { useState } from "react";

export default function Carousel() {
  const cities = [
    {
      name: "Villa Nougués",
      image:
        "https://www.welcomeargentina.com/paseos/villa_nougues/villa-nougues-1.jpg",
    },
    {
      name: "Buenos Aires",
      image:
        "https://cdn.britannica.com/63/188963-050-2C94FEC2/Night-view-obelisk-Buenos-Aires.jpg",
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
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="home-carousel">
      <button onClick={prev}>{"<"}</button>
      <img src={cities[index].image} alt="" />
      <button onClick={next}>{">"}</button>
    </div>
  );
}
