import React from 'react'

import img_backgroundline3 from '../assets/images/backgroundline3.svg'

const NewsUpdate = () => {
  return (
    <section className="news-update">
    <img className="background-line3" src={img_backgroundline3} alt="1 linje som som upp och ned" />
    <div className="container">
        <div className="news-update-line">
            <h2>Get News Updates By Signup </h2>
                <div className="username-button">Username@domain.com</div>
                <a className="theme-knapp subscribe-button" href="#">Subscribe<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
</section>
  )
}

export default NewsUpdate