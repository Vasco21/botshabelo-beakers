import React from "react"
import Cards from "./Card"
import "./Project.css"
import GalleryData from "./ProjectData"
import HeadTitle from "../../common/HeadTitle/HeadTitle"

const Gallery = () => {
  return (
    <>
      <HeadTitle />
      <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Cards imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery