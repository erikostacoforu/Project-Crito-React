import React from 'react'

import img_newspaper from '../assets/images/newspaper.png'
import img_stuff from '../assets/images/stuff.png'
import img_supplies from '../assets/images/supplies.png'
import img_laptop from '../assets/images/laptop.png'

const ProjectCaseStudies = () => {
  return (
    <section className="project-case">
                <div className="container">
                    <div className="sektion-title">
                        <p className="små-rubriker">Project & Case Studies</p>
                        <h2>Let's Looks Our Global Projects</h2>
                    </div>
                    <div className="project-cases">
                        <article>
                            <img src={img_newspaper} alt="A mans hands holding a business newspaper" />
                            <h3>Grow your business</h3>
                            <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
                        </article>
                        <article>
                            <img src={img_stuff} alt="Pink Apple products on a desk" />
                            <h3>Why your client needs a responsive website</h3>
                            <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
                        </article>
                        <article>
                            <img src={img_supplies} alt="Office supplies on a desk" />
                            <h3>Educate your employees to get better results</h3>
                            <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
                        </article>
                        <article>
                            <img src={img_laptop} alt="Laptop with buisness intelligence insight" />
                            <h3>Business Insights is a important piece of your business</h3>
                            <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
                        </article>
                    </div>
                    <div className="content-center"> 
                        <a className="svart-knapp" href="#">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>      
                    </div>  
                </div>
            </section>
  )
}

export default ProjectCaseStudies