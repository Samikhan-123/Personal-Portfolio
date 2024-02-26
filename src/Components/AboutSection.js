import React from 'react'
import sami from '../images/pkboy.jpg'
import { Link } from 'react-router-dom'
const AboutSection = () => {
    return (
        <div className='main-about'>
            <div className="about-me">
                <div className="left-about">
                    <img src={sami} alt="boyPicture" />
                </div>
                <div className="right-about">
                    <h2>Who I Am?</h2>
                    <p>Thank you for visiting my portfolio! I'm excited to introduce myself as a committed Full-Stack developer who loves using MERN-Stack Technologies to make amazing web experiences. I enjoy turning design ideas into smooth and user-friendly websites. I bring together creativity and technical skills for every project I work on. I create responsive and secure websites for clients.</p>
                    <button className='btn-dark' download>
                        <Link to="/contact">Hire Me</Link>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default AboutSection
