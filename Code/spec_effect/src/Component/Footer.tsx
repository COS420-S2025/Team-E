import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} SpecEffect. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/glossary"> Glossary</a>
          </li>
          <li>
            <a href="/adminlogin"> Admin Login</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
