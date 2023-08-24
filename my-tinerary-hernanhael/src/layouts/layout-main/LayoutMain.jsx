import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./layoutMain.css";

export default function LayoutMain() {
  return (
    <>
      <div className="app-layout">
        <Header />
      </div>
      <Outlet />
      <div className="app-layout-footer">
        <Footer />
      </div>
    </>
  );
}
