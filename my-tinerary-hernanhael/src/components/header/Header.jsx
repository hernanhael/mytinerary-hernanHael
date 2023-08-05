import React from "react";
import Navbar from "./navbar/Navbar";
import "./header.css";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <img src="../../../public/mytinerary-logo.png" alt="logo-myitinerary" />
      </div>
      <Navbar />
    </header>
  );
};
