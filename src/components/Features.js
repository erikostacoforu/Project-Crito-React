import React from 'react'

const Features = () => {
  return (
    <section className="features">
                <div className="container-fluid">
                    <div className="feature-left">
                        <p className="små-rubriker">Features</p>
                        <h2>Our Accounting is trusted by thousand of companies</h2>
                        <a className="theme-knapp" href="consulting.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                    <div className="feature-list">
                        <div className="feature-box-right">
                            <i className="fa-sharp fa-regular fa-handshake"></i>
                            <h3>Business Advice</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="feature-box-right">
                            <i className="fa-regular fa-lightbulb-on"></i>
                            <h3>Startup Business</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="feature-box-right">
                            <i className="fa-regular fa-money-bill-trend-up"></i>
                            <h3>Financial Advice</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="feature-box-right">
                            <i className="fa-sharp fa-regular fa-folder-gear"></i>
                            <h3>Risk Management</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Features