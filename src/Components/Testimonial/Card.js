import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box'>
        <i className='fa fa-quote-left'></i>
        <div className='details flex '>
          <div className='img'>
            <img src={props.profile} alt='' />
          </div>
          <div className='name'>
            <h5>{props.name}</h5>
            <span>{props.post}</span>
          </div>
        </div>
        <hr />
        <div className='para'>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default Card
