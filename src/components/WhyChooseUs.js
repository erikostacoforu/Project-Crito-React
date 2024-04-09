import React from 'react'

import img_why_choose_us from '../assets/images/why-choose-us.png'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
                
    <div className="container">
        <div className="why-left-box">
            <p className="små-rubriker">Why Choose Us</p>
            <h2>Why We Are The Best Business Consulting Agency</h2>
            <div>
                <div className="why-choose-us-boxes">
                    <i className="fa-light fa-thumbs-up button-block">
                        <div>
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div> 
                    </i>
                </div>
                <div className="why-choose-us-boxes">
                    <i className="fa-light fa-chess button-block">
                        <div>
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div> 
                    </i>
                </div>
                <div className="why-choose-us-boxes">
                    <i className="fa-light fa-head-side-gear button-block">
                        <div>
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div> 
                    </i>
                </div>
                <div className="why-choose-us-boxes">
                    <i className="fa-sharp fa-light fa-pen-paintbrush button-block">
                        <div>
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div> 
                    </i>
                </div>
        </div>
        <img className="pic-above-box" src={img_why_choose_us} alt="two women discussing" />
        <div className="grey-box-under-picture"></div>
    </div>
</div>    
</section>
  )
}

export default WhyChooseUs