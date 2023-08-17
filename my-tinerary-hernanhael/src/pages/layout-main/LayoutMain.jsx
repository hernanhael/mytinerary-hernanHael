import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import "./layoutMain.css";

const LayoutMain = ({ children }) => {
  return (
    <>
      <div className="app-layout">
        <Header />
      </div>
      {children}
      <div className="app-layout-footer">
        <Footer />
      </div>
    </>
  );
};

export default LayoutMain;
