import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <h2>ABOUT US</h2>
            <p>
              development department ensures that only the most advanced baking
              processes.
            </p>
            <br />
            <p>
              development department ensures that only the most advanced baking
              processes.
            </p>
            <div className="icon flex_spaces">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="box">
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/products">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="box post">
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>
                  development department ensures that only the most advanced
                  baking processes and .
                </p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 June 2022</span>
              </li>
              <li>
                <p>
                  development department ensures that only the most advanced
                  baking processes and .
                </p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 June 2022</span>
              </li>
              <li>
                <p>
                  development department ensures that only the most advanced
                  baking processes and .
                </p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 June 2022</span>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>NEWSLETTER</h2>
            <p>
              development department ensures that only the most advanced baking
              processes and .
            </p>

            <input type="text" name="" id="" />
            <input type="text" className="primary-btn" value="SUBSCRIBE" />
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>© 2022 Bots Baker's All Rights Reserved | Vasco Eti</p>
      </div>
    </>
  );
};

export default Footer;
