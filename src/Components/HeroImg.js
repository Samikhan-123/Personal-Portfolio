import React from 'react'
import homeImg from '../images/pro.jpg'
import { NavLink } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={homeImg} alt="homeImg" className='home-img' />
        <div className="developer">
          <p>HY I'M SAMI KHAN, A FRONT-END-DEVELOPER</p>
          <h1>REACT-DEVELOPER</h1>
          <div className="btn">
            <button className='btn-dark'>
              <NavLink to="/project">PROJECTS</NavLink>
            </button>
            <button className='btn-light'>
              <NavLink to="/contact" >CONTACT</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroImg;
