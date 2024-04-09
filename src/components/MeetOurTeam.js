import React from 'react'

import img_teambild1 from '../assets/images/teambild1.png'
import img_teambild2 from '../assets/images/teambild2.png'
import img_teambild3 from '../assets/images/teambild3.png'
import img_teambild4 from '../assets/images/teambild4.png'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
    <div className="container">
        <div className="meet-our-team-header">
            <p className="små-rubriker">Meet Our Team</p>
            <div className="meet-our-team-head">
                <h2>Experience Team Members</h2>
                <a className="theme-knapp browse-team" href="consulting.html">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>   
        </div>
        <div className="meet-our-team-boxes">
            <div>
                <img src={img_teambild1} alt="A woman smiling with a shirt coloured as a zebra" />
                <h3>Kristine Palmer</h3>
                <p>Chef Operation Officer</p>
            </div>
            <div>
                <img src={img_teambild2} alt="Man in a black suit smiling" />
                <h3>Mark Aubri</h3>
                <p>Senior Consultant</p>
            </div>
            <div>
                <img src={img_teambild3} alt="Woman smiling while holding a book" />
                <h3>Kimberly Hansen</h3>
                <p>Senior Consultant</p>
            </div>
            <div>
                <img src={img_teambild4} alt="Headshot photo of a man smiling" />
                <h3>Justin Willoman</h3>
                <p>Senior Tech Consultant</p>
            </div>
        </div>
        <div className="dots-center">
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle dot-black"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
        </div>
    </div>
</section>
  )
}

export default MeetOurTeam