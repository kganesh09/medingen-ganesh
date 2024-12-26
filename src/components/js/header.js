import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../../Screenshot 2024-12-24 174301.png";
import "../css/Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header p-2">
      <nav className="nav d-flex align-items-center justify-content-between px-4">
        {/* Logo Section */}
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="#" className="logo-icon" />
          <span className="logo-text">Medingen</span>
        </div>

        {/* Menu Toggle for Mobile */}
        <div className="menu-toggle d-md-none" onClick={toggleMenu}>
          <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </div>

        {/* Navigation List */}
        <ul
          className={`nav-list d-flex align-items-center ${
            isMenuOpen ? "open" : "d-none d-md-flex"
          }`}
        >
          <li
            className={`nav-item  ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => handleTabClick("Home")}
          >
            <Link to="/" className={`nav-link rounded-pill ${activeTab === "Home" ? "active-link" : ""}`}>
              <i className="bi bi-house-fill"></i>
              <span>Home</span>
            </Link>
          </li>
          <li
            className={`nav-item  ${activeTab === "Offers" ? "active" : ""}`}
            onClick={() => handleTabClick("Offers")}
          >
            <Link to="/offers" className={`nav-link rounded-pill ${activeTab === "Offers" ? "active-link" : ""}`}>
              <i className="bi bi-percent"></i>
              <span>Offers</span>
            </Link>
          </li>
          <li
            className={`nav-item  ${activeTab === "Notification" ? "active" : ""}`}
            onClick={() => handleTabClick("Notification")}
          >
            <Link to="/notification" className={`nav-link rounded-pill ${activeTab === "Notification" ? "active-link" : ""}`}>
              <i className="bi bi-bell"></i>
              <span>Notification</span>
            </Link>
          </li>
          <li
            className={`nav-item  ${activeTab === "Profile" ? "active" : ""}`}
            onClick={() => handleTabClick("Profile")}
          >
            <Link to="/profile" className={`nav-link rounded-pill ${activeTab === "Profile" ? "active-link" : ""}`}>
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>

        {/* Cart Section */}
        <div className="cart d-none d-md-block">
          <Link to="/cart">
            <i className="bi bi-cart3"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
