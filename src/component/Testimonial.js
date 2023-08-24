import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from 'react-icons/ai'

export default function Testimonial() {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'>
               <h1 className="primary-heading"></h1>
               <p className="primary-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem aliquid officia animi voluptate distinctio dolore cum asperiores adipisci suscipit at!
               </p>
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="No Image" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae facere veritatis neque, delectus quos corporis eaque consequatur, autem libero odit nisi ullam vero! Ut.
            </p>
            <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
            </div>
        <h1>John Doe</h1>
        </div>
    </div>
  )
}
