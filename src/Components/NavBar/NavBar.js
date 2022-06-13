import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../images/logo.png";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="meni-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li>
              <Link to="/testimonial" onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i className="far fa-chevron-right">Sign In</i>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="far fa-chevron-right">Register</i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className="contacts flex_space">
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 09.00am to 06.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to="/contact">+2767 909 0397</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">botsbakers@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
