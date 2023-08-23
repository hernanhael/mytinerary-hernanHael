import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const links = [
  { id: "home", label: "Home", href: "/home" },
  { id: "cities", label: "Cities", href: "/cities" },
];

const NavBarLink = ({ label, href }) => {
  return (
    <div className="navbar-link">
      <Link to={href}>{label}</Link>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <NavBarLink id={link.id} label={link.label} to={link.href} />
      ))}
    </nav>
  );
}
