import React from 'react'

import img_confused from '../assets/images/confused.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <img className="" src={img_confused } alt="confused man" />
        <div className="center">
          <h1>404 Page Not Found!</h1>
          <p>Unable to find the page that you are looking for.</p>
          <Link to='/' className="transparent-knapp">Home Page<i className="fa-regular fa-arrow-up-right"></i></Link>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default NotFound