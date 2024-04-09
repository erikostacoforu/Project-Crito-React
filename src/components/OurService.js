import React from 'react'

import img_backgroundline2 from '../assets/images/backgroundline2.svg'

const OurService = () => {
  return (
    <section className="our-service">
    <img className="background-line2" src={img_backgroundline2} alt="2 linjer som korsar varandra" />
    <div className="container">
        <p className="små-rubriker">Our Services</p>
        <h2>We Provide The Best<br/> Service For Consulting</h2>
        <div className="display-boxes">
            <div className="service-boxes">
                <hr className="service-linje" />
                <h3>Business Advice</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <a href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
            </div>
            <div className="service-boxes service-second-yellow">
                <hr className="service-linje" />
                <h3>Startup Business</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <a className="service-yellow" href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
            </div>
            <div className="service-boxes">
                <hr className="service-linje" />
                <h3>Financial Advice</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <a href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
            </div>
            <div className="service-boxes">
                <hr className="service-linje" />
                <h3>Risk Management</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <a href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
            </div>
        </div> 
        <div className="content-center"> 
            <a className="transparent-knapp" href="service.html">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>      
        </div>  
    </div>  
</section>
  )
}

export default OurService