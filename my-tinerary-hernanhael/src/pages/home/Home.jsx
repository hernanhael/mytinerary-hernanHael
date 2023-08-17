import React from "react";
import LayoutMain from "../layout-main/LayoutMain";
import Carousel from "../../components/carousel/Carousel";
import "./home.css";

const Home = () => {
  return (
    <LayoutMain>
      <div className="home-carousel">
        <Carousel />
      </div>
    </LayoutMain>
  );
};

export default Home;
