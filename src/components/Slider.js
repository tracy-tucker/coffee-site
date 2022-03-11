import React, { useState, useEffect } from "react"

import Title from "./Title"
import style from "styled-components"
import { FaQuoteRight } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const Slider = ({ customer = [] }) => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1
      if (index > customers.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1
      if (index < 0) {
        index = customers.length - 1
      }
      return index
    })
  }
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > customers.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Wrapper className="section">
      <Title title="reviews" />
      <div className="section-center">
        {customers.map((customer, customerIndex) => {
          const {
            data: { image, name, title, quote },
          } = customer
          const customerImg = getImage(image.localfiles[0])

          let position = "nextSlide"
          if (customerIndex === index) {
            position = "activeSlide"
          }
          if (
            customerIndex === index - 1 ||
            (index === 0 && customerIndex === customers.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article className={position} key={customerIndex}>
              <GatsbyImage
                image={customerImg}
                className="img"
                alt={name}
              ></GatsbyImage>
            </article>
          )
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

export default Slider
