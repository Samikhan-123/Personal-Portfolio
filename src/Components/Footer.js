import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome className='fa-icon' size={20} style={{ color: '#fff' }} />
                        <p>Gulberg 3, Lahore,</p>
                        <p> Pakistan</p>
                    </div>
                    <div className="phone">
                        <FaPhone className='fa-icon' size={20} style={{ color: '#fff', }} />
                        <h5>+92 3342323004</h5>
                    </div>
                    <div className="email">
                        <FaMailBulk className='fa-icon' size={20} style={{ color: '#fff' }} />
                        <p>samikhan7816@gmail.com</p>
                    </div>

                </div>
                <div className="right">
                    <h4>About The Company</h4>
                    <p>Hy this is me sami khan. the Front-End-Developer With React.js Expertise. Feel free to discussing new projects and design challenges.</p>
                    <div className="social">
                        <Link to="https://web.facebook.com/samikhan7816" target='_blank' className='fb'>
                            <FaFacebook className='social-icon facebook' size={20} style={{ color: '#fff' }} />
                        </Link>
                        <Link to="https://twitter.com/SAMIIKHANNN" target='_blank' className='tr'>
                            <FaTwitter className='social-icon twitter' size={20} style={{ color: '#fff' }} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/muhammad-samiullah-khan-00323823a/" target='_blank' className='in'>
                            <FaLinkedin className='social-icon linkedin' size={20} style={{ color: '#fff' }} />
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
