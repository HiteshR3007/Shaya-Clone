import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li>Earrings</li>
            <li>Necklaces</li>
            <li>Rings</li>
            <li>Bracelets</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SHAYA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
