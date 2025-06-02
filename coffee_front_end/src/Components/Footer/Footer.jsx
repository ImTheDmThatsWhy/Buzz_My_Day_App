import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-heading">
        <h4 className="footer-header">Contact At info@sitename.com</h4>
        <h4 className="footer-header">Copyright SiteName 2025</h4>
      </div>
      <div className="footer-navbar">
        <a>
          <img src="/icons8-discord-50.png" alt="Logo" />
        </a>
        <a>
          <img src="/icons8-instagram-50.png" alt="Logo" />
        </a>
        <a>
          <img src="/icons8-twitter-50.png" alt="Logo" />
        </a>
        <a>
          <img src="/icons8-youtube-50.png" alt="Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
