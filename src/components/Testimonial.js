import React from 'react'

import img_client1 from '../assets/images/client1.png'
import img_client2 from '../assets/images/client2.png'
import img_client3 from '../assets/images/client3.png'


const Testimonial = () => {
  return (
    <section className="testimonial">
    <div className="container-fluid">
        <div className="testimonial-header">
            <p className="små-rubriker">Testimonial</p>
            <h2>What Our Client Says</h2>
        </div>
        <div className="container">
            <div className="testimonial-flex-boxes">
                <div className="testimonial-box">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p className="testimonial-clients-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="testimonial-clients">
                        <img src={img_client1} alt="headshot photo of a woman" />
                        <div>
                            <h3>Cassandra Warren</h3>
                            <p className="små-rubriker">Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-box">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p className="testimonial-clients-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="testimonial-clients">
                        <img src={img_client2} alt="headshot photo of a woman" />
                        <div>
                            <h3>Amanda Tulling</h3>
                            <p className="små-rubriker">Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-box">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p className="testimonial-clients-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="testimonial-clients">
                        <img src={img_client3} alt="headshot photo of a woman" />
                        <div>
                            <h3>Jack McDogglas</h3>
                            <p className="små-rubriker">Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="test">
                <div className="content-center"> 
                    <a className="svart-knapp" href="service.html">All Reviews<i className="fa-regular fa-arrow-up-right"></i></a>      
                </div>  
            </div>
  
        </div>
    </div>
</section>
  )
}

export default Testimonial