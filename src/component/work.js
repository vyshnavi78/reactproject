import React from 'react'
import pickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from '../Assets/choose-image.png'
import DelivaryMealsImage from '../Assets/delivery-image.png'


export default function work() {
    const workInfo = [
        {
            Image : pickMeals,
            title:"Pick Meals",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic pariatur corrupti officiis dolore quis quaerat vel! Quaerat praesentium, rerum, enim deserunt, exercitationem nulla fugit ducimus facere delectus doloremque cupiditate"
            
        },
        {
            Image : ChooseMeals,
            title:"Pick Meals",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic pariatur corrupti officiis dolore quis quaerat vel! Quaerat praesentium, rerum, enim deserunt, exercitationem nulla fugit ducimus facere delectus doloremque cupiditate"
            
        },
        {
            Image : DelivaryMealsImage,
            title:"Pick Meals",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic pariatur corrupti officiis dolore quis quaerat vel! Quaerat praesentium, rerum, enim deserunt, exercitationem nulla fugit ducimus facere delectus doloremque cupiditate"
            
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
           <p className='primary-subheading'>work</p>
           <h1 className='primary-heading'>How It Works</h1>
           <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat labore quos at ut. Soluta accusamus quidem ipsa quibusdam ex.
           </p>
        </div>
        <div className='work-section-bottom'>
        {workInfo.map((data) => (
                <div className="work-section-info">
                   <div className="info-boxes-img-container">
                        <img src={data.Image} alt="" />
                   </div>
                   <h2>{data.title}</h2>
                   <p>{data.text}</p>   
                </div>
            ))
        }
        </div>
    </div>
  )
}



