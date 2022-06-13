import React, { useState } from "react"
import Data from "./Data"

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.image} alt='Home Images' />}
            </div>
          )
        })}
      </section>

      <section className='slide-form'>
        <div className='container'>
          <h2>Enjoy Your BreakFast</h2>
          <span>Order Your Best Bread</span>

          <form>
            <input type='text' placeholder='Seacrh' />
            <div className='flex_space'>
              <input type='date' placeholder='Order In' />
            </div>
            <div className='flex_space'>
              <input type='number' placeholder='Bread(1 - 24)' />
            </div>
            <input type='number' placeholder='Total' />
            <input type='Submit' value='Search' className='submit' />
          </form>
        </div>
      </section>
    </>
  )
}

export default Home