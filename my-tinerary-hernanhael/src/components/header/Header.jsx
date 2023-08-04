import React from "react";
import Navbar from "./navbar/Navbar";
// import Logo from "../../../public/mytinerary-logo.png";
import "./header.css";

export const Header = () => {
  return (
    <div className="app-header">
      <div className="header-logo">Logo</div>
      <Navbar />
    </div>
  );
};
