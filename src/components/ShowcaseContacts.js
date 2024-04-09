import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import img_blackgroundlines from '../assets/images/background-line1.svg'


const ShowcaseContacts = () => {
  return (
    <section className="showcase">
      <img className="background-line1" src={img_blackgroundlines} alt="2 linjer som korsar varandra" />
      <div className="showcase-middle-text">
          <div className="container">
              <nav>
              <Link to='/'>Home</Link>
              <NavLink to='/Contacts'>Contact</NavLink>  
              </nav>
              <p className="showcase-middle-headline">Let’s Connect</p>
          </div>
      </div> 
</section>
  )
}

export default ShowcaseContacts