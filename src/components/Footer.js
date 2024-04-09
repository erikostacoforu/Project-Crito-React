import React from 'react'

import { Link } from 'react-router-dom'
import img_backgroundline4 from '../assets/images/backgroundline4.svg'
import img_logo_white from '../assets/images/logo-white.svg'

const Footer = () => {
  return (
    <footer className="footer">
            <img className="background-line4" src={img_backgroundline4} alt="2 linjer som korsar varandra" />
            <div className="container">
                <div className="footer-box-flex">
                    <div className="footer-box1">
                    <Link to='/'><img src={img_logo_white} alt="Crito logotype" /></Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>    
                    </div>
                    <div className="footer-box-flex2">
                        <div className="footer-boxes1">
                            <h3>Company</h3>
                            <ul>
                                <li>
                                    <a href="#"><p className="footer-first-link">About</p></a>
                                    <a href="#"><p>Features</p></a>
                                    <a href="#"><p>Works</p></a>
                                    <a href="#"><p>Career</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-boxes2">
                            <h3>Help</h3>
                           <ul>
                                <li>
                                    <a href="#"><p className="footer-first-link">Customer Support</p></a>
                                    <a href="#"><p>Delivery Details</p></a>
                                    <a href="#"><p>Terms & Conditions</p></a>
                                    <a href="#"><p>Privacy Policy</p></a>
                                </li>
                           </ul>
                        </div>
                        <div className="footer-boxes3">
                            <h3>Resources</h3>
                            <ul>
                                <li>
                                    <a href="#"><p className="footer-first-link">Free eBooks</p></a>
                                    <a href="#"><p>Development Tutorial</p></a>
                                    <a href="#"><p>How to - Blog</p></a>
                                    <a href="#"><p>Youtube Playlist</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-boxes4">
                            <h3>Resources</h3>
                            <ul>
                                <li>
                                    <a href="#"><p className="footer-first-link">Free eBooks</p></a>
                                    <a href="#"><p>Development Tutorial</p></a>
                                    <a href="#"><p>How to - Blog</p></a>
                                    <a href="#"><p>Youtube Playlist</p></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <hr className="" />
                <div className="container">
                    <div className="footer-social-flex">
                        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                        <div className="social-icons-footer">
                            <a href="https://www.facebook.com/adventuringwithnala" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="https://twitter.com/elonmusk" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                            <a href="https://www.instagram.com/zuck/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>   
                </div>
            </div>
    </footer>  
  )
}

export default Footer