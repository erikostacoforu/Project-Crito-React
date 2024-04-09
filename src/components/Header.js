import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_logo_black from '../assets/images/logo-black.svg'



const Header = () => {
  return (
    <div className="container">
        <Link to='/'><img src={img_logo_black} alt="Crito logotyp" /></Link>
            <div className="top-meny">
                <div className="topp-info">
                    <div className="kontakt-information">
                        <div className="info-box">
                            <i className="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="info-box">
                            <i className="fa-sharp fa-regular fa-envelope-dot"></i>
                            info@crito.com
                        </div>
                        <div className="info-box last">
                            <i className="fa-regular fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/adventuringwithnala" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="https://twitter.com/elonmusk" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                        <a href="https://www.instagram.com/zuck/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="main-nav">
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/Service'>Service</NavLink>
                        <NavLink to='/News'>News</NavLink>
                        <NavLink to='/Contacts'>Contact</NavLink>
                    </nav>
                    <a className="theme-knapp login-knapp" href="login.html">Login<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>       
    </div>   
  )
}

export default Header