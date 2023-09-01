import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { FaBars, FaGithubSquare, FaLinkedin, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    const autoClose = () => {
        setClick(false);
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      };

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 70) {
            document.body.style.backgroundColor = '#000'
            setColor(true)
        } else {
            document.body.style.backgroundColor = "#f5f7fb";
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div className='main' >
            <nav className={color ? ('main-nav-bg') : ('main-nav')}>
                <div className="logo" onClick={autoClose}>
                    <NavLink to="/"> SAMI<span>KHAN</span></NavLink>
                </div>
                <ul onClick={() => { autoClose(); scrollToTop(); }} className={click ? 'nav-list active' : 'nav-list'}>
                    <li><NavLink to="/" activeclassname="active">HOME</NavLink></li>
                    <li><NavLink to="/about" >ABOUT</NavLink></li>
                    <li><NavLink to="/project" >PROJECTS</NavLink></li>
                    <li><NavLink to="/contact" >CONTACT</NavLink></li>
                </ul>
                <ul className="social-links">
                    <li><NavLink to="https://www.linkedin.com/in/muhammad-samiullah-khan-00323823a/" target='_blank'><FaLinkedin className='linkedin-icon' />Linkedin</NavLink></li>
                    <li><NavLink to="https://github.com/Samikhan-123" target='_blank'><FaGithubSquare className='github-icon' />GitHub</NavLink></li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={20} style={{ color: 'gold' }} />
                    ) : (
                        <FaBars size={20} style={{ color: '#fff' }} />
                    )}

                </div>
            </nav>
        </div>
    )
}

export default Navbar
