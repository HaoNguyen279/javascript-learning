import { Link, NavLink, useNavigate, useNavigation } from "react-router-dom";
import { FiSearch, FiPackage } from "react-icons/fi";
import "./Header.css";

// Đổi tên file logo/avatar theo asset của bạn
import logo from "../assets/logo.png";
import avatar from "../assets/react.svg";
import { useState } from "react";

function SearchInput() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/search/" + value);
    }
  };

  return <input type="text" defaultValue="" onChange={e => setValue(e.target.value)} aria-label="Search recipes" placeholder="What u would like to cook" onKeyDown={handleKeyDown} />;
}
export default function Header() {
  const navigate = useNavigate();
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
          <FiSearch className="header__search-icon" onClick={() => navigate("/search")} />
          <SearchInput/>
        </div>

        {/* Center nav */}
        <nav className="header__nav">
          <NavLink to="#" className="header__nav-link">
            What to cook
          </NavLink>
          <NavLink to="/subscribe" className="header__nav-link">
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