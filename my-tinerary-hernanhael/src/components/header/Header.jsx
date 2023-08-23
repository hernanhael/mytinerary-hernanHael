import Navbar from "./navbar/Navbar";
import Logo from "../logo/Logo";
import "./header.css";

export default function Header() {
  return (
    <header className="app-header">
      <Logo />
      <h1>MyTinerary</h1>
      <Navbar />
    </header>
  );
}
