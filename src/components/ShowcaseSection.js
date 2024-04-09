import React from 'react'

import img_blackgroundlines from '../assets/images/background-line1.svg'
import img_showcase from '../assets/images/showcase.png'
const ShowcaseSection = () => {
  return (
    <section className="showcase">
                <img className="background-line1" src={img_blackgroundlines} alt="2 linjer som korsar varandra" />
                <div className="container">
                    <div className="content"> 
                        <h1>We Provide The Best Business Solutions</h1>
                        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>   
                        <a className="theme-knapp" href="consulting.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
                        <a className="transparent-knapp" href="service.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                    <img src={img_showcase} alt="Bild på man som håller en läsplatta" />    
                </div>
            </section>
  )
}

export default ShowcaseSection