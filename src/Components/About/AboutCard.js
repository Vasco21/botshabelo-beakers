import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtops flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h5>The Bots Baker Story</h5>
          <h1>
             <span>"Bots Baker</span> We provide the bread of life"
          </h1>
          <p>development department ensures that only the most advanced baking processes and milling techniques are adhered to – using the latest technology and equipment..</p>
          <p>development department ensures that only the most advanced baking processes and milling techniques are adhered to – using the latest technology and equipment.</p>
          <button className='secondary-btn'>
              <Link to="/testimonial" className='primary-btn'>
                Explore More <i className='fas fa-long-arrow-alt-right'></i>
              </Link>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard