import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiPackage } from "react-icons/fi";
import "./Header.css";

// Đổi tên file logo/avatar theo asset của bạn
import logo from "../assets/logo.png";
import avatar from "../assets/react.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Left: Logo */}
        <Link to="/" className="header__brand" aria-label="Chefify Home">
          {/* <img src={logo} alt="Chefify logo" className="header__logo" /> */}
          <span className="header__brand-text">Chefify</span>
        </Link>

        {/* Search */}
        <div className="header__search">
          <FiSearch className="header__search-icon" />
          <input type="text" defaultValue="" aria-label="Search recipes" placeholder="What u would like to cook" />
        </div>

        {/* Center nav */}
        <nav className="header__nav">
          <NavLink to="#" className="header__nav-link">
            What to cook
          </NavLink>
          <NavLink to="#" className="header__nav-link">
            Recipes
          </NavLink>
          <NavLink to="#" className="header__nav-link">
            Ingredients
          </NavLink>
          <NavLink to="#" className="header__nav-link">
            Occasions
          </NavLink>
          <NavLink to="#" className="header__nav-link">
            About Us
          </NavLink>
        </nav>

        {/* Right actions */}
        <Link to="#" className="header__recipe-box">
          <FiPackage />
          <span>Your Recipe Box</span>
        </Link>

        <button className="header__avatar-btn" aria-label="Open profile">
          <img src={avatar} alt="User avatar" className="header__avatar" />
        </button>
      </div>
    </header>
  );
}