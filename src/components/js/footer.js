import React from "react";
import "../css/Footer.css";
import footer from "../../footer.png" // Add the styles in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <div className="logo">
            <img src={footer} alt="Logo" className="logo-img" />
          </div>
          <h3>Medingen</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.
          </p>
        </div>

        {/* Middle Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Website</h4>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>How it works</li>
              <li>What our customers say?</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>More</h4>
            <ul>
              <li>Help Center</li>
              <li>Become Member</li>
              <li>Events</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Medingen. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
