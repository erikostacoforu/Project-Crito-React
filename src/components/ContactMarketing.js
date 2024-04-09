import React from 'react'

const ContactMarketing = () => {
  return (
    <section className="contact-marketing">
        <div className="container">
                <div className="marketing-box">
                    <i className="fa-sharp fa-solid fa-location-dot marketing-icon">
                        <div>
                            <h3>Visit us</h3>
                            <p>Sveavägen 31</p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </i>
                </div>
                <div className="marketing-box">
                    <i className="fa-solid fa-circle-phone marketing-icon">
                        <div>
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50</p>
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </i>
                </div>
                <div className="marketing-box">
                    <i class="fa-solid fa-circle-envelope marketing-icon">
                        <div>
                            <h3>Email us</h3>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </i>
                </div>  
        </div>  
    </section>
  )
}

export default ContactMarketing