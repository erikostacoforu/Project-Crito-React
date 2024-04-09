import React from 'react'

import img_paperz from '../assets/images/paperz.svg'
import img_dorfus from '../assets/images/dorfus.svg'
import img_martino from '../assets/images/martino.svg'
import img_square from '../assets/images/square.svg'
import img_gobona from '../assets/images/gobona.svg'

const Brands = () => {
  return (
    <section className="företag">
        <div className="container">
            <a href="#"><img src={img_paperz} alt="Tidigare kund" /></a>
            <a href="#"><img src={img_dorfus} alt="Tidigare kund" /></a>
            <a href="#"><img src={img_martino} alt="Tidigare kund" /></a>
            <a href="#"><img src={img_square} alt="Tidigare kund" /></a>
            <a href="#"><img src={img_gobona} alt="Tidigare kund" /></a>
        </div>
    </section>
  )
}

export default Brands