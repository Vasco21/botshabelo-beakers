import React from "react"
import "./About.css"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import AboutCard from "./AboutCard";
import { Link } from "react-router-dom";

const About = () => {
    return (
      <>
        <HeadTitle />
        <section className='about top'>
          <div className='container'>
            <AboutCard />
          </div>
        </section>
  
        <section className='features top'>
          <div className='container aboutCard flex_space'>
            <div className='row row1'>
              <h1>
                Our <span>Features</span>
              </h1>
              <p>development department ensures that only the most advanced baking processes and milling techniques are adhered to – using the latest technology and equipment..</p>
              <p>development department ensures that only the most advanced baking processes and milling techniques are adhered to – using the latest technology and equipment.</p>
              <button className='secondary-btn'>
              <Link to="/" className='primary-btn'>
                Explore More <i className='fas fa-long-arrow-alt-right'></i>
              </Link>
              </button>
            </div>
            <div className='row image'>
              <img src='/images/feature-img-1.jpg' alt='' />
              <div className='control-btn'>
                <button className='prev'>
                  <i className='fas fa-play'></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default About