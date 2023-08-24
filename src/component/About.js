import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBannerImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function About() {
    return (
        <div className='about-section-container'>
             <div className='about-background-image-container'>
                <img src={ AboutBackground} alt="" />
            </div>
        <div className='about-section-image-container'>
        <img src={AboutBannerImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                About Food Is An Important Part Of A Balenced Diet
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, porro aspernatur dolore placeat laboriosam voluptate. Illo dolore odio similique numquam!
            </p>
            <p className='primary-text'>
                Non tincident magna non et elit. Dolor turpis mloestie dui magnis
                facilisis at Fringilla quam
            </p>
            <div className='about-buttons-container'>
                <button className='secondary button'>Learn More </button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill/>
                </button>
                   

                </div>
            </div>
        </div>
    )
}