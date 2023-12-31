import React from 'react'
import homeImg from '../images/pro.jpg'
import {Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={homeImg} alt="homeImg" className='home-img' />
        <div className="developer">
          <p>HY I'M SAMI KHAN, A FRONT-END-DEVELOPER</p>
          <h1>REACT-DEVELOPER</h1>
          <div className="btn">
              <Link className='btn-dark' to="/project">PROJECTS</Link>
\              <Link className='btn-light' to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroImg;
