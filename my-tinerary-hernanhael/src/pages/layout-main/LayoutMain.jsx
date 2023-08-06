import React from "react";
import { Header } from "../../components/header/Header";
import { Main } from "../../components/main/Main";
import { Footer } from "../../components/footer/Footer";
import "./layoutMain.css";

const LayoutMain = () => {
  return (
    <>
      <div className="app-layout">
        <Header />
        <Main />
      </div>
      <div className="app-layout-footer">
        <Footer />
      </div>
    </>
  );
};

export default LayoutMain;
