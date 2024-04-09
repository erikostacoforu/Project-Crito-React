import React from 'react'

import img_founder from '../assets/images/founder.png'

const AboutCompany = () => {
  return (
    <section className="about-company">
                <div className="container">
                    <div className="pic-with-qoute">
                        <img src={img_founder} alt="Bild på personen som grundade företaget" />
                        <div className="qoute-box">
                            <h4>Samantha Brown,
                                <span className="founder-last">Founder</span>
                            </h4>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                    </div>
                    <div className="content-about-company"> 
                        <p className="små-rubriker">About Company</p>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2> 
                        <p className="about-company-text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p className="about-company-text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>  
                        <div className="parent-knapp">
                            <a className="svart-knapp " href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                            <div className="intro-video-gap">
                                <a className="button-block" href="#"><i className="fa-sharp fa-regular fa-circle-play"></i><p>Intro Video</p></a>
                            </div>  
                        </div>
                    </div>
                </div>                
            </section>
  )
}

export default AboutCompany