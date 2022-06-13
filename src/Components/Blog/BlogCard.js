import React from "react"
import { Link } from "react-router-dom"

const BlogCard = ({ item: { id, cover, title, para, catgeory, date } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Images' />
        </div>

        <div className='category'>
          <h4>{catgeory}</h4>
          <span>{date}</span>
        </div>

        <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>

        <Link to={`/blogsingle/${id}`} className='blogItem-link'>
          READ MORE <i className='fa fa-long-arrow-right'></i>
        </Link>
      </div>
    </>
  )
}

export default BlogCard
